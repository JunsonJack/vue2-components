<template>
  <div class="pdfs">
    <div class="btns">
      <el-button type="primary" @click="changePdfPage(0)" icon="el-icon-back"
        >上一页</el-button
      >
      <el-button type="primary">{{ currentPage }} / {{ pageCount }}</el-button>
      <el-button type="primary" @click="changePdfPage(1)" icon="el-icon-right"
        >下一页</el-button
      >
      <el-button type="primary" @click="downloadFile()" icon="el-icon-download"
        >下载</el-button
      >
    </div>

    <pdf
      :src="pdfUrl"
      :page="currentPage"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
      @loaded="loadPdfHandler"
    >
    </pdf>
  </div>
</template>

<script>
//https://blog.csdn.net/woshiwangdaye/article/details/111193013
import pdf from "vue-pdf"
export default {
  components: { pdf },
  data() {
    return {
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: "pdf", // 文件类型
      pdfUrl: "", // pdf文件地址
    }
  },
  methods: {
    //预览PDF翻页方法
    changePdfPage(val) {
      // console.log(val)
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
        // console.log(this.currentPage)
      }
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1 // 加载的时候先加载第一页
    },
    //初始化pdf路径
    initPdf() {
      //这里的PDF路径就是上传到后台的路径
      this.downloadFileUrl = "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
      this.pdfUrl =
        "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
    },
    downloadFile() {
      window.location.href =
        "http://xxx.xxx.xxx.xxx/downloadFile?token=xxx&path=" +
        this.downloadFileUrl
      this.$message.success("下载成功！")
    },
  },
  mounted() {
    this.initPdf()
  },
  created() { },
};
</script>

<style lang="scss" scoped>
.btns {
  position: fixed;
  top: 70vh;
  left: 75vh;
  z-index: 10;
}
</style>