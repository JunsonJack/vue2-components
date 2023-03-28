<template>
  <div>
    <h2>自动计算表格的宽度，不换行</h2>
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="tableData"
      border
      stripe
      :header-cell-style="MyHeaderCellStyle"
      :height="TableHeight"
    >
      <el-table-column
        label="序号"
        type="index"
        align="center"
        fixed
        width="60"
      />

      <el-table-column
        v-for="obj in headerData"
        :key="obj.prop"
        :label="obj.label"
        :prop="obj.prop"
        align="center"
        sortable
        :width="flexColumnWidth(obj.label, obj.prop)"
      />

      <!--      :width="flexColumnWidth(label, prop)"-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AutoWidthTable',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎最帅哈，也难怪',
        address: '上海市普陀区金沙江路 1518 弄三个人给我二哥而给我我跟我二哥翁去玩儿过问题翁'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      headerData: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '居民姓名',
          prop: 'name'
        },
        {
          label: '家庭住址',
          prop: 'address'
        }
      ],
      loading: false,
      TableHeight: 200,
    }
  },
  methods: {
    MyHeaderCellStyle({ row, col, index }) {
      return {
        'background-color': 'rgb(65, 183, 131)',
        'color': '#fff',
        'font-weight': 'bold',
        'font-size': '14px',
        'padding': '0',
        'white-space': 'nowrap',
        'min-width': 'fit-content',
      }
    },
    // 获取表格每一列最大宽度
    getMaxWidth(arr) {
      return arr.reduce((prev, next) => {
        if (next) {
          const calcLen = this.getTextWidth(next)
          if (calcLen > prev) {
            prev = calcLen
          }
        }
        return prev
      }, 0)
    },
    getTextWidth(str) {
      let width = 0
      // 获取span标签的宽度
      let span = document.createElement('span')
      span.innerHTML = str
      span.className = 'getTextWidth'
      document.querySelector('body').appendChild(span)
      width = document.querySelector('.getTextWidth').offsetWidth
      document.querySelector('.getTextWidth').remove()
      return width

    },
    flexColumnWidth(label, prop) {
      console.log(label, prop)
      // 获取该列所有数据
      const arr = this.tableData.map(item => item[prop])
      // 把每列的label也加入到数组中
      arr.push(label)
      // 计算每列内容的最大宽度 + 表格的内间距（根据实际情况而定）
      return (this.getMaxWidth(arr) + 10) + 'px'
    }

  },

}

</script>

<style lang="scss" scoped>
.el-table >>> th {
  padding: 0;
  white-space: nowrap;
  min-width: fit-content;
}

.el-table >>> td {
  padding: 1px;
  white-space: nowrap;
  width: fit-content;
}

/** 修改el-card默认paddingL:20px-内边距 **/
>>> .el-card__body {
  padding: 10px;
}

.el-table >>> .cell {
  white-space: nowrap;
  width: fit-content;
}
</style>