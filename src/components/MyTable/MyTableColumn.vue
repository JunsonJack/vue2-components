<template>
<div class="myTableColumn">
  <div class="thead">{{ label }}</div>
  <div v-for="(item,index) in $parent.tbData" :key="index" class="item">
    <div name="tableEdit" contenteditable="false" class="tableEdit">
      <template v-if="prop">
        {{ item[prop] }}
      </template>
    </div>
    <slot :row="item" :$index="index"></slot>
    <i style="display: none" >✔</i>
  </div>
</div>
</template>

<script>
export default {
  name: "MyTableColumn",
  props:{
    prop:{
      default: '',
      type: String,
      required: false
    },
    label:{
      default: '默认',
      type: String,
      required: true
    },
  },

}
</script>

<style scoped>
.tableEdit{
  display: inline-block;
  //display: flex;
  outline-color: #ccc;
}

a {
  text-decoration: none;
  user-select: none;
  cursor: pointer;
}
i{
  cursor: pointer;
}
.thead{
  height: 30px;
  line-height: 30px;
  background-color: rgb(65, 183, 131);
  padding: 10px;
  border: 2px solid #ddd;
  color: #fff;
}
.item{
  padding: 5px;
}
.item:nth-child(odd){
  background-color: #ddd;
}
.item:nth-child(even){
  background-color: #fff;
}

</style>
