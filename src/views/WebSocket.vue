<template>
  <div>websocket</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // initWebSocket() {
    //   this.websock = new WebSocket("ws://localhost:8081");
    //   this.websock.onmessage = this.websocketonmessage;
    //   this.websock.onerror = this.websocketonerror;
    //   this.websock.onopen = this.websocketonopen;
    //   this.websock.onclose = this.websocketclose;
    // },
    // websocketonopen() {
    //     this.websock.send("connection");
    // },
    // websocketonerror() {
    //     //连接错误
    //   console.log("WebSocket连接失败");
    // },
    // websocketonmessage(e) {
    //     // 数据接收
    //   console.log(JSON.parse(e.data));
    // },
    // websocketclose(e) {
    //     // 关闭连接
    //   console.log("已关闭连接", e);
    // },
    // test() {
    //     this.websock.send("connection");
    // },
  },
  mounted() {
    // this.initWebSocket();
  },
  destroyed() {
    // this.websock.colse();
    // this.websocketclose()
  },
};
</script>

<style lang="scss" scoped>
</style>