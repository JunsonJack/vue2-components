<template>
  <div class="mySubMenu">
    <div class="SubMenu">
      <slot name="title"></slot>
      <i ref="icon" @click="open($event)"> ▼ </i>
    </div>
    <div class="Items" style="display: none">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySubMenu",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open(e) {
      this.isOpen = !this.isOpen;
      // console.log("e:", e.target.parentNode);
      let mySubMenu = e.target.parentNode.parentNode;
      this.$refs["icon"].classList.toggle("active");
      let items = mySubMenu.querySelector(".Items");
      // console.log(items);
      if (this.isOpen) {
        items.style.display = "block";
        let menuItem = items.querySelectorAll(".menuitem");
        mySubMenu.style.height = `${menuItem.length * 50 + 50}px`;
      } else {
        items.style.display = "none";
        mySubMenu.style.height = "50px";
      }
    }
  }
};
</script>

<style scoped>
.mySubMenu {
  height: 50px;
  overflow: hidden;

  transition: 0.5s;
}
.SubMenu {
  width: 200px;
  height: 30px;
  background-color: pink;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  position: relative;
}
/*.SubMenu::after{
  content: '';
  height: 0;
  width: 0;
  //background-color: black;
  border-top: 10px solid blue;
  border-right: 10px solid blue;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  transform: rotate(135deg);

  position: absolute;
  right: 10px;
}*/
i:last-child {
  font-style: normal !important;

  position: absolute;
  right: 10px;
  z-index: 10;

  //transition: 0.5s;
  user-select: none;
}
.active {
  transform: rotate(180deg);
}
</style>
