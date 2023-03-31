<template>
  <div class="menuitem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyMenuItem"
};
</script>

<style scoped>
.menuitem {
  width: 200px;
  height: 30px;
  background-color: #2f77f1;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 2px;
}
</style>
