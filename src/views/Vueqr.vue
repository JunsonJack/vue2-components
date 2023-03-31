<template>
  <div>
    <el-row>
      <el-col :span="12">
        <vue-qr :text="imgUrl" :size="250" :logoSrc="logo" :logoScale="0.3">
        </vue-qr>
      </el-col>
      <el-col :span="12">
        <div>vue-draggable 实现拖拽</div>
        <div class="drag">
          <draggable
            v-model="myArray"
            group="people"
            animation="1000"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div class="item" v-for="element in myArray" :key="element.id">
                {{ element.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
 <script>
import draggable from "vuedraggable"
//  最新版的vue-qr会报错，cnpm i vue-qr@3.2.2
import VueQr from "vue-qr"
export default {
  name: "",
  components: {
    VueQr,
    draggable,
  },
  data() {
    return {
      imgUrl: "https://baidu.com",
      logo: require("@/assets/search.png"),
      // 在data中定义需要拖拽的数据
      myArray: [
        { people: "cn", id: 1, name: "张三" },
        { people: "cn", id: 2, name: "李四" },
        { people: "cn", id: 3, name: "王五" },
        { people: "cn", id: 4, name: "钟馗" },
      ],
    }
  },
  methods: {
    // 开始拖拽事件
    onStart() {
      // 点击拖拽以后触发事件
      console.log("🚀 ~ file: Vueqr.vue ~ line 57 ~ onStart ~ this.myArray", this.myArray)
    },
    // 拖拽结束事件
    onEnd() {
      // 停止拖拽后触发事件，已排好序的对象数组
      console.log("🚀 ~ file: Vueqr.vue ~ line 61 ~ onEnd ~ this.myArray", this.myArray)
    },
  },
};
</script>
<style lang="scss" scoped >
.drag {
  width: 300px;
  background-color: #fff;
  .item {
    height: 30px;
    line-height: 30px;
    font-size: 25px;
    margin-top: 10px;
    background-color: #fff;
    border: 1px #ccc solid;
    text-align: center;
    &:hover {
      background-color: rgb(235, 235, 235);
    }
    cursor: move;
  }
}
</style>
 