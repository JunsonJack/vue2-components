<template>
  <div class="tree-list-box">
    <div class="search-box">
      <el-input
        placeholder="监控名称"
        clearable
        v-model="filterText"
        @change="searchFun"
        @keyup.enter="searchFun"
        class="input-with-select"
      ></el-input>
      <span class="el-icon-search search-ico" @click="searchFun"></span>
    </div>
    <div class="tree-content overflow-y-auto">
      <div
        class="tree-all-box"
        :class="{ 'is-tree-all': isTreeAll }"
        @click="treeNodeAllClick"
      >
        <span>全部</span>
      </div>
      <!--  allow-drag判断节点能否被拖拽 allow-drop	拖拽时判定目标节点能否被放置-->
      <el-tree
        class="el--tree-dom"
        ref="treeDom"
        :data="treeObjdata"
        node-key="id"
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        :filter-node-method="filterTreeNode"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        :expand-on-click-node="false"
      >
        <div
          class="custom-tree-node"
          slot-scope="{ data, node }"
          @click="treeNodeClick(data, node)"
        >
          <div class="custom-show-data" v-if="!data.isEdit">
            <div
              class="custom-node-label"
              :class="{ 'no-group-label': !data.isGroup }"
            >
              {{ node.label }}
            </div>
            <template v-if="data.isGroup">
              <div
                class="cust-label-oper"
                v-show="!ishaveEdit && data.id != 9527"
              >
                <i class="iconfont icon-new" @click="addGroupTree(data)"></i>
                <i
                  class="iconfont icon-edit"
                  @click="editGroupTree(data, node)"
                ></i>
                <i
                  class="iconfont icon-delete"
                  @click="removeGroupTree(data, node)"
                ></i>
              </div>
            </template>
            <div class="custom-location" v-else>
              <i class="iconfont icon-dingwei device-online"></i>
            </div>
          </div>
          <div class="custom-edit-node" v-else>
            <input
              class="custon-edit-input"
              size="mini"
              v-model="editNodeVal"
              placeholder="请输入分组名称"
            />
            <div class="custon-edit-ico">
              <i
                class="iconfont icon-Tick"
                @click="editTreeNodeSave(data, node)"
              ></i>
              <i
                class="iconfont icon-delete"
                @click="editTreeNodeCancel(data, node)"
              ></i>
            </div>
          </div>
        </div>
      </el-tree>
      <div class="add-tree-node">
        <el-button type="primary" @click="addFirstTreeNode">新建分组</el-button>
      </div>
    </div>
  </div>
</template>
 
 
<script>
export default {
  name: "MyTree",
  data() {
    return {
      filterText: "",

      // S tree 节点操作相关
      // 是否有节点在编辑中
      ishaveEdit: false,
      editNodeVal: "",
      isTreeAll: true,
      // S tree 节点操作相关


      treeObjdata: [{
        id: 1,
        label: '技术中心',
        isEdit: false,//节点编辑
        isGroup: true,
        children: [{
          id: 4,
          label: '开发部',
          isEdit: false,//节点编辑
          isGroup: true,
          children: [{
            id: 9,
            label: '视频设备-1',
            isGroup: false,

          }, {
            id: 10,
            label: '视频设备-2',
            isGroup: false,
          }]
        }]
      }, {
        id: 2,
        label: '商务中心',
        isEdit: false,//节点编辑
        isGroup: true,
        children: [{
          id: 5,
          label: '视频设备热成像视频设备热成像视频设备热成像',
          isEdit: false,//节点编辑
          isGroup: false,

        }, {
          id: 6,
          label: '视频设备可见光',
          isEdit: false,//节点编辑
          isGroup: false,

        }]
      },
      {
        id: 9527,//未分组组别 id固定 或固定其他字段标识
        label: '未分组',
        isEdit: false,//节点编辑
        isGroup: true,
        children: [{
          id: 5564564564656,
          label: '视频设备未分组1',
          isEdit: false,//节点编辑
          isGroup: false,

        }, {
          id: 67897897,
          label: '视频设备未分组2',
          isEdit: false,//节点编辑
          isGroup: false,

        }]
      }

      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.treeDom.filter(val)
    }
  },
  methods: {
    //S 搜索
    searchFun() {

    },
    filterTreeNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    //S 搜索

    treeNodeAllClick() {
      this.isTreeAll = true
    },
    treeNodeClick(data, node) {
      console.log("tree cilck", data, node)
      this.isTreeAll = false
    },
    //S tree node 新增删除修改
    addGroupTree(data) {
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      let label = '新建分组' + (data.children.length + 1)
      const newChild = { id: new Date().getTime(), label: label, isEdit: false, isGroup: true, children: [] }
      data.children.push(newChild)
    },
    editGroupTree(data, node) {
      this.editNodeVal = data.label + ''
      data.isEdit = true
      this.ishaveEdit = true
    },

    editTreeNodeSave(data, node) {
      data.label = this.editNodeVal
      data.isEdit = false
      this.ishaveEdit = false
    },
    editTreeNodeCancel(data, node) {
      data.isEdit = false
      this.ishaveEdit = false
    },

    removeGroupTree(data, node) {
      console.log("remove-----", data, node)
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },

    // 新建分组
    addFirstTreeNode() {

      let oindex = this.treeObjdata.length - 1
      let label = '新建分组' + this.treeObjdata.length
      const newChild = { id: new Date().getTime(), label: label, isEdit: false, isGroup: true, children: [] }
      this.treeObjdata.splice(oindex, 0, newChild)

      console.log("添加一级分组", this.treeObjdata)
    },

    //E tree node 新增删除修改






    handleDragStart(node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode, dropType)
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
      console.log("最终数据", this.data)
    },

    allowDrop(draggingNode, dropNode, type) {
      console.log("拖拽放置===", draggingNode.data.isGroup, dropNode, type)
      // 判断拖拽目标是否可以被放置到子节点
      if (!draggingNode.data.isGroup) {
        if (dropNode.level == 1) {
          return type === 'inner'
        } else {
          return type !== 'inner'
        }
      } else {
        // 判断是否是未分组
        if (dropNode.level == 1) {
          if (dropNode.data.id == '9527') {
            return type === 'prev'
          } else {
            return true
          }
        } else {
          // 判断父级是否是未分组
          if (dropNode.parent.data.id == '9527') {
            return false
          } else {
            return true
          }
        }


      }
    },
    allowDrag(draggingNode) {
      console.log("允许拖拽", draggingNode)
      return draggingNode.data.id != '9527'
      //   return true
    }
  }
};
</script>
 
<style lang="scss" scoped>
@mixin tree-font-color-size {
  color: #333333;
  font-size: 14px;
}

.tree-list-box {
  width: 100%;
  height: 100%;
}

.search-box {
  width: 100%;
  height: 36px;
  border: 1px solid #d7e0ef;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-top: 10px;

  .el-input {
    width: calc(100% - 30px);
    color: #abafb4;
    font-size: 14px;

    ::v-deep .el-input__inner {
      border: none;
      height: 34px;
      line-height: 34px;
      background-color: transparent;
    }
  }

  .search-ico {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #abafb4;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #666;
    }
  }
}

.tree-content {
  width: 100%;
  height: calc(100% - 36px - 20px);
  margin-top: 20px;
  box-sizing: border-box;

  .tree-all-box {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    @include tree-font-color-size;
  }
  .is-tree-all {
    background: #f5f7fa;
  }
}
.add-tree-node {
  width: 100%;
  padding: 20px 0 10px;
  display: flex;
  justify-content: flex-start;
  background: #fff;
  position: sticky;
  bottom: 0;
}

// S tree custom style
.el--tree-dom {
  width: 100%;
  padding-bottom: 50px;
  ::v-deep .el-tree-node__content {
    height: 30px;
  }
  ::v-deep .el-tree-node__expand-icon {
    color: #85888e;
    font-size: 14px;
  }
  ::v-deep .el-tree-node__expand-icon.is-leaf {
    color: transparent;
  }
  .custom-tree-node {
    width: calc(100% - 26px);
    height: 30px;

    .custom-show-data {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include tree-font-color-size;
      .custom-node-label {
        width: calc(100% - 70px);
        text-align: left;
        cursor: move;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      //  设备label
      .no-group-label {
        width: calc(100% - 30px);
      }
      .cust-label-oper {
        width: 70px;
        display: none;
        align-items: center;
        justify-content: space-around;
        i {
          font-size: 16px;
          color: #666;
          &:hover {
            color: #2f77f1;
          }
        }
      }
      &:hover {
        .cust-label-oper {
          display: flex;
        }
      }
      .custom-location {
        width: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .device-online {
          color: #2f77f1;
        }
        .device-unonline {
          color: #d81e06;
        }
      }
    }

    .custom-edit-node {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .custon-edit-input {
        width: calc(100% - 70px);
        height: 26px;
        border: 1px solid #d7e0ef;
        padding: 0 5px;
        box-sizing: border-box;
        &:focus-visible {
          outline: #1989fa solid 1px;
        }
        &::placeholder {
          color: #ccc;
        }
      }
      .custon-edit-ico {
        width: 70px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
          font-size: 16px;
          color: #666;
          &:hover {
            color: #2f77f1;
          }
        }
      }
    }
  }
}

// E tree custom style
</style>