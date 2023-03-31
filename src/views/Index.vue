<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">xx</el-col>
          <el-col :span="16">Vue2.0 后台管理系统</el-col>
          <el-col :span="4">登录/注销</el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-menu-item
              v-for="(item, index) in routerList"
              :key="index"
              :index="item.path"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="(item, index) in lists"
                :key="item.path"
              >
                <router-link :to="item.path">{{ item.meta.title }}</router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </el-main>
          <el-footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      routerList: [],
      lists: []
    }
  },
  components: {},
  created() {

    console.log("🚀 ~ file: Index.vue ~ line 50 ~ created ~ this.$route.matched", this.$route.matched)
    this.lists = this.$route.matched
    // 模拟权限数组;
    let arr = ['admin']
    sessionStorage.setItem("btnPermissions", arr)
  },
  mounted() {
    console.log(this.$router.getRoutes())
    this.routerList = this.$router.getRoutes().filter((o) => o.meta.isShow)
    console.log(this.routerList)
  },
  watch: {
    $route(to, from) {
      console.log('to', to)
      this.lists = to.matched

    }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  height: 50px;
  width: 100%;
  background-color: #409eff;
}
.el-footer {
  height: 50px;
  width: 100%;
  background-color: #409eff;
}
.el-main {
  padding: 0;
  background-color: #f0f2f5;
  height: calc(100vh - 100px);
}
.el-breadcrumb {
  height: 40px;
  background-color: #fff;
  line-height: 40px;
}
.el-col:nth-child(2) {
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: #fff;
}
.el-col:nth-child(3) {
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  color: #fff;
}
</style>