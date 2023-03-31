<template>
  <my-menu>
    <template v-slot="scope">
      <my-sub-menu>
        <template v-slot:title>
          <i>○</i>
          <span>我是SubMenu</span>
        </template>
        <my-menu-item>
          <template v-slot:default>
            <i>○</i>
            <span>item1-1</span>
          </template>
        </my-menu-item>
        <my-menu-item>item1-2</my-menu-item>
      </my-sub-menu>
      <my-menu-item>item3</my-menu-item>
      <my-menu-item>item4</my-menu-item>
      <my-sub-menu>
        <template v-slot:title>
          <i>○</i>
          <span>我是SubMenu2</span>
        </template>
        <my-menu-item>
          <template v-slot:default>
            <i>○</i>
            <span>item2-1</span>
          </template>
        </my-menu-item>
        <my-menu-item>item2-2</my-menu-item>
        <my-menu-item>item2-3</my-menu-item>
      </my-sub-menu>
      <my-sub-menu>
        <template v-slot:title>
          <i>○</i>
          <span>我是SubMenu3</span>
        </template>
        <my-menu-item>
          <template v-slot:default>
            <i>○</i>
            <span>item3-1</span>
          </template>
        </my-menu-item>
        <my-menu-item>item3-2</my-menu-item>
        <my-menu-item>item3-3</my-menu-item>
      </my-sub-menu>
    </template>
  </my-menu>
</template>

<script>
import MyMenu from "../components/MyMenu/MyMenu.vue";
import MySubMenu from "../components/MyMenu/MySubMenu.vue";
import MyMenuItem from "../components/MyMenu/MyMenuItem.vue";
export default {
  name: "useMyMenu",
  components: {
    MyMenu,
    MySubMenu,
    MyMenuItem
  }
};
</script>

<style scoped></style>
