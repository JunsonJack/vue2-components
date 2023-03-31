<template>
  <div>
    <MyTable :th-data="thData" :tb-data="tbData">
      <template v-slot="scope">
        <my-table-column label="序号">
          <template v-slot="scope">
            {{ scope.$index + 1 }}
          </template>
        </my-table-column>
        <my-table-column prop="Pname" label="项目名称"></my-table-column>
        <my-table-column prop="Pmanager" label="项目管理人"></my-table-column>
        <my-table-column
          prop="Pstarttime"
          label="项目开始时间"
        ></my-table-column>
        <my-table-column prop="Pendtime" label="项目结束时间"></my-table-column>
        <my-table-column label="项目是否完成">
          <template v-slot="scope">
            {{ scope.row.Pisfinish ? "是" : "否" }}
          </template>
        </my-table-column>
        <my-table-column label="操作">
          <template v-slot="scope">
            <a href="javascript:;" @click="delItem(scope.row)">删除</a> |
            <a href="javascript:;" @click="editItem(scope.row, $event)">编辑</a>
          </template>
        </my-table-column>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable/MyTable.vue"
import MyTableColumn from "../components/MyTable/MyTableColumn.vue"
export default {
  name: "useMyTable",
  components: {
    MyTable,
    MyTableColumn,

  },
  data() {
    return {
      thData: ["项目名称", "项目管理人", "项目开始时间", "项目结束时间", "项目是否完成"],
      tbData: [
        {
          Pname: "项目1",
          Pmanager: "张三",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: true,
        }, {
          Pname: "项目2",
          Pmanager: "李四hhhhhhhh",
          Pstarttime: "2019-03-01",
          Pendtime: "2019-05-01",
          Pisfinish: false,
        }, {
          Pname: "项目3",
          Pmanager: "王五",
          Pstarttime: "2019-02-01",
          Pendtime: "2019-06-01",
          Pisfinish: true,
        }, {
          Pname: "项目4",
          Pmanager: "赵六",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-08-01",
          Pisfinish: false,
        },
        {
          Pname: "项目5",
          Pmanager: "赵器",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-02-01",
          Pisfinish: false,
        },
        {
          Pname: "项目6",
          Pmanager: "老六浏览浏览绿绿绿绿绿绿绿绿绿绿绿绿",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: false,
        },
        {
          Pname: "项目7",
          Pmanager: "赵桥",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: false,
        },
        {
          Pname: "项目8",
          Pmanager: "赵六",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: true,
        },
        {
          Pname: "项目9",
          Pmanager: "赵六",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: false
        },
        {
          Pname: "项目10",
          Pmanager: "赵细",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: true
        },
        {
          Pname: "项目11",
          Pmanager: "老于",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: false
        },
        {
          Pname: "项目12",
          Pmanager: "新湖",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: false
        },
        {
          Pname: "项目13",
          Pmanager: "无章",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: true
        },
        {
          Pname: "项目14",
          Pmanager: "老西",
          Pstarttime: "2019-01-01",
          Pendtime: "2019-01-01",
          Pisfinish: true

        }
      ],
    }
  },
  methods: {
    delItem(item) {
      console.log(item.Pname)
      this.tbData = this.tbData.filter(v => v.Pname !== item.Pname)

    },
    editItem(item, e) {
      console.log(item)
      let target = e.target
      /* let edits = div.querySelectorAll('div[name="tableEdit"]');
       for (let i = 0; i < edits.length; i++) {
         edits[i].setAttribute('contenteditable', 'true');
         edits[i].onclick = (e) => {
           e.target.nextElementSibling.style.display = 'inline-block';
         }
       }*/

    },
    changeEdit(e) {
      let target = e.target
      target.style.display = 'none'
      target.previousElementSibling.setAttribute('contenteditable', 'false')
      target.previousElementSibling.onclick = null
    }
  }
}
</script>

<style scoped>
</style>
