<template>
  <div>
    <el-row>
      <!-- <el-col :span="12">
        <form action="" @submit="onSubmit">
          账号:<input
            type="text"
            placeholder="请输入...."
            v-model="userInfo.account"
          />
          <br /><br />
          密码:<input type="password" v-model="userInfo.password" />
          <br /><br />
          性别: 男:<input
            type="radio"
            name="sex"
            v-model="userInfo.sex"
            value="male"
          />
          女:<input
            type="radio"
            name="sex"
            v-model="userInfo.sex"
            value="female"
          />
          <br /><br />
          爱好: 学习:<input
            type="checkbox"
            v-model="userInfo.hobby"
            value="study"
          />
          打游戏:<input type="checkbox" v-model="userInfo.hobby" value="game" />
          吃饭:<input type="checkbox" v-model="userInfo.hobby" value="eat" />
          <br /><br />
          所属校区:
          <select v-model="userInfo.city">
            <option value="">请选择校区</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="wuhan">武汉</option>
            <option value="shengzhen">深圳</option>
          </select>
          <br /><br />
          其他信息:
          <textarea v-model="userInfo.other"></textarea> <br /><br />
          <input type="checkbox" v-model="userInfo.agree" />阅读并接受<a
            href="javascript:;"
            >阅读条款</a
          >
          <button>提交</button>
        </form>
      </el-col> -->
      <el-col :span="12">
        <!-- <self-form></self-form> -->
        <v-form :data="FormData"></v-form>
      </el-col>
      <el-col :span="12">
        <MyTree />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import selfForm from "../components/selfForm.vue"
import MyTree from '../components/MyTree.vue'
export default {
  components: {
    "v-form": selfForm,
    MyTree
  },
  data() {
    return {
      userInfo: {
        account: "",
        password: "",
        sex: "female",
        hobby: [],
        city: "beijing",
        other: "",
        agree: "",
      },
      FormData: {
        width: "100px",
        items: [
          {
            type: "Input",
            label: "活动名称",
            prop: "name",
            width: "300px",
            placeholder: "请输入活动名称",
            default: "请输入",
          },
          {
            type: "Input1",
            label: "活动名称",
            prop: "name1",
            width: "300px",
            placeholder: "请输入活动名称",
            default: "请输入",
          },
          {
            type: "Select",
            label: "活动区域",
            prop: "region",
            width: "200px",
            placeholder: "请选择区域",
            default: "wuhan",
            options: [
              {
                label: "上海",
                value: "shanghai",
              },
              {
                label: "北京",
                value: "Beijing",
              },
              {
                label: "武汉",
                value: "wuhan",
              },
            ],
          },
          {
            type: "Switch",
            label: "开关",
            prop: "delivery",
            default: true,
          },
          {
            type: "Checkbox",
            label: "爱好",
            prop: "type",
            default: ["1", "2"],
            options: [
              {
                label: "美食",
                value: "1",
              },
              {
                label: "小吃",
                value: "2",
              },
            ],
          },
          {
            type: "Radio",
            label: "性别",
            prop: "resource",
            default: "men",
            options: [
              {
                label: "男",
                value: "men",
              },
              {
                label: "女",
                value: "women",
              },
            ],
          },
          {
            type: "Textarea",
            label: "文本编辑",
            prop: "desc",
            placeholder: "请填写活动形式",
            span: 5,
            default: "请输入",
          },
          {
            type: "Date",
            label: "开始时间",
            prop: "date1",
            placeholder: "开始活动时间",
            default: "2021-3-1 12:00:01",
          },
          {
            type: "Time",
            label: "结束时间",
            prop: "date2",
            placeholder: "结束活动时间",
            default: "2021-6-1 12:00:01",
          },
          {
            type: "DateTime",
            label: "结活动时间",
            prop: "date3",
            placeholder: "活动时间",
            default: "2021-3-1 12:00:03",
          },
        ],
        buttons: [
          {
            label: "确定",
            type: "primary",
            action: "submit",
            call: (data) => {
              console.log(
                "🚀 ~ file: useForm.vue ~ line 177 ~ data ~ form",
                data
              )
            },
          },
          {
            label: "重置",
            type: "warning",
            action: "reset",
            call: () => {
              console.log("🚀 ~ file: useForm.vue ~ line 185 ~ data ~ reset")
            },
          },
          {
            label: "其他",
            type: "success",
            call: () => {
              console.log("🚀 ~ file: useForm.vue ~ line 193 ~ data ~ other")
            },
          },
        ],
        rules: {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
          name1: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" },
          ],
          date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
          type: [
            {
              type: "array",
              required: true,
              message: "请至少选择一个活动性质",
              trigger: "change",
            },
          ],
          resource: [
            { required: true, message: "请选择活动资源", trigger: "change" },
          ],
          desc: [
            { required: true, message: "请填写活动形式", trigger: "blur" },
          ],
        },
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(JSON.stringify(this.userInfo))
    },
    Submit() {
      console.log("🚀 ~ file: Form.vue ~ line 143 ~ Submit ~ Submit")
    },
  },
};
</script>

<style lang="sass" scoped>
</style>