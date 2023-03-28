<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div ref="main" style="width: 600px; height: 400px"></div>
      </el-col>
      <el-col :span="12">
        <div ref="main2" style="width: 600px; height: 400px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div ref="main3" style="width: 600px; height: 400px"></div>
      </el-col>
      <el-col :span="12">
        <div ref="main4" style="width: 600px; height: 400px"></div>
      </el-col>
    </el-row>
    <el-row>
      <div ref="map" class="map" style="width: 100%; height: 1000px"></div>
    </el-row>
  </div>
</template>

<script>
import china from "../assets/chinamap/china.json";
var myChart;
var PieChart;
var lineChart;
var mapChart;
export default {
  name: "Echarts",
  data() {
    return {
      barData: [5, 15, 5, 25, 20, 35],
      wsData: {},
    };
  },
  methods: {
    drawChart() {
      myChart = this.$echarts.init(this.$refs.main);

      let option = {
        title: {
          text: "Echarts 入门案例",
        },
        toolTip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.barData,
          },
        ],
      };
      myChart.setOption(option);
    },
    drawChart2() {
      PieChart = this.$echarts.init(this.$refs.main2);
      var option = {
        title: {
          text: "员工学历分布图",
          subtext: "xx网络科技公司",
          left: "center",
        },
        // 提示
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // 图例
        legend: {
          left: "center",
          top: "bottom",
          data: ["本科", "高中及以下", "专科", "研究生", "博士"],
        },

        series: [
          {
            name: "学历",
            type: "pie",
            radius: [20, 140],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: "本科" },
              { value: 28, name: "高中及以下" },
              { value: 26, name: "专科" },
              { value: 14, name: "研究生" },
              { value: 2, name: "博士" },
            ],
          },
        ],
      };
      PieChart.setOption(option);
    },
    drawChart3() {
      lineChart = this.$echarts.init(this.$refs.main3);
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date = [];
      let data = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }
      var option = {
        tooltip: {
          trigger: "axis",
          position: function (pt) {
            return [pt[0], "10%"];
          },
        },
        title: {
          left: "center",
          text: "Large Area Chart",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10,
          },
          {
            start: 0,
            end: 10,
          },
        ],
        series: [
          {
            name: "Fake Data",
            type: "line",
            symbol: "none",
            sampling: "lttb",
            itemStyle: {
              color: "rgb(255, 70, 131)",
            },
            areaStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)",
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)",
                },
              ]),
            },
            data: data,
          },
        ],
      };
      lineChart.setOption(option);
    },
    dramMap() {
      //初始化中国地图,引入china.json文件
      this.$echarts.registerMap("china", china);
      mapChart = this.$echarts.init(this.$refs.map);
      var points = [
        {value: [118.8062,31.9208], itemStyle:{color: '#c59800'}},
        {value: [110.3467,41.4899], itemStyle:{color: '#c59800'}},
        {value: [125.8154,44.2584], itemStyle:{color: '#c59800'}},
        {value: [116.405285, 39.904989], itemStyle:{color: '#c59800'}},
        {value: [112.549248, 37.857014], itemStyle:{color: '#c59800'}},
        {value: [115.892151, 28.676493], itemStyle:{color: '#c59800'}},
        {value: [113.280637, 23.125178], itemStyle:{color: '#c59800'}}
      ]
      var options = {
        backgroundColor: "rgb(121,145,209)",
        geo: {
          map: "china",
          aspectScale: 0.75,
          zoom: 1.1,
          itemStyle: {
            //地图区域多边形样式
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c", //0%
                  },
                  {
                    offset: 1,
                    color: "#274d68", //100%
                  },
                ],
                globalCoord: true,
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
          },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              opacity: 0,
            },
          },
        ],
        series: [
          {
            type: "map",
            map: "china",
            // geoIndex: 1,
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#1DE986",
                },
              },
              emphasis: {
                textStyle: {
                  color: "rgb(183,185,14)",
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgb(147,235,248)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c", //0%
                    },
                    {
                      offset: 1,
                      color: "#274d68", //100%
                    },
                  ],
                  globalCoord: true,
                },
              },
              emphasis: {
                areaColor: "rgb(89,128,142)",
                borderWidth: 0.1,
              },
            },
            zoom: 1.1,
          },
          // 散点图
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffection: "render",
            zlevel: 1,
            ripplaceEffect: {
              //涟漪，特效相关
              period: 15,
              scale: 4
            },
            symbolSize: 10,
            data: points
          },
        ],
      };
      mapChart.setOption(options);
    },
    // initWebSocket() {
    //   this.websock = new WebSocket("ws://localhost:8082");
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
    //   console.log(JSON.parse(e.data).data);
    //   this.barData = JSON.parse(e.data).data;
    //   // 重新绘制图
    //   this.drawChart();

    // },
    // websocketclose(e) {
    //     // 关闭连接
    //   console.log("已关闭连接", e);
    // },
    // test() {
    //     this.websock.send("connection");
    // },
  },
  created() {
    this.worker = this.$worker.create([
      {
        message: "hello",
        func: function (e) {
          console.log("hello", e);
          return "hi yiye";
        },
      },
      {
        message: "world",
        func: function (e) {
          console.log("world", e);
          return "hello worker";
        },
      },
      {
        message: "getData",
        func: function (e) {
          console.log(e); //[5, 15, 5, 25, 20, 35]
          let barData = e.map(o => o*2)
          return barData
        },
      },
    ]);
  },
  mounted() {
    // this.drawChart();
    this.drawChart2();
    this.drawChart3();
    this.dramMap();
    // this.initWebSocket();
    // 第一个是调用的事件名称，第二参数是传入的值
    // var _this = this;
    // this.worker
    //   .postMessage("getData", [[5, 15, 5, 25, 20, 35]])
    //   .then(function (e) {
    //     console.log("post", e);
    //     // console.log('bar',this) //undefined

    //     _this.barData = e;
    //     _this.drawChart()
    //   });
    this.worker.postMessage("getData", [this.barData]).then((res) => {
      // this.barData=Array.from(res);\
      this.barData = res
      console.log('res',res);
      return this.drawChart();
    });
  },
  beforeDestroy() {
    // this.websocketclose();
    this.$echarts.dispose(myChart);
    this.$echarts.dispose(PieChart);
    this.$echarts.dispose(lineChart);
    console.log("销毁了chart");
  },
  destroyed() {
    this.worker = null;

    // this.websocketclose()
  },
};
</script>

<style lang="scss" scoped>
</style>