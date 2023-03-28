<template>
  <div class="mytable">
    <table>
      <div class="mytable">
        <slot></slot>
      </div>
    </table>
  </div>
</template>

<script>
import MyTableColumn from "./MyTableColumn.vue";

export default {
  name: "MyTable",
  components: {
    MyTableColumn
  },
  props: {
    thData: [],
    tbData: []
  }
}
</script>

<style scoped>
table {
  //border: 1px solid #000;
  border-collapse: collapse;
  text-align: center;
}

.mytable {
  display: flex;
}
</style>
