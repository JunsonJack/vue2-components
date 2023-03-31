<template>
  <div class="btn">
    <el-button type="primary" v-auth="people">people权限</el-button>
    <el-button type="primary" v-auth="admin">admin权限</el-button>
    <el-button type="primary" v-auth="superadmin">superadmin权限</el-button>
  </div>
</template>

<script>
// import {auth} from '../utils/authority'
export default {
  data() {
    return {
      admin: 'admin',
      people: 'people',
      superadmin: 'superadmin'
    }
  },
}
</script>

<style lang="scss" scoped>
</style>