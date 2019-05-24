<template>
  <div class="line-chart component" ref="dom"></div>
</template>

<script>
import echarts from 'echarts'

function getChartOption(params) {
  const { xData = [], seriesData = [], lineColor = "red" } = params;
  return {
    xAxis: {
      boundaryGap: false,
      data:
        new Array(30).fill(undefined).map(function(v, i) {
          return "9月" + (i + 1) + "日";
        }) || xData,
      axisLine: {
        show: false //隐藏X轴轴线
      },
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        margin: 30,
        textStyle: {
          color: "#ccc" //X轴文字颜色
        }
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "#ccc"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 30,
        textStyle: {
          color: "#ccc"
        }
      }
    },
    series: [
      {
        name: "",
        type: "line",
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 8, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: lineColor
        },
        areaStyle: {
          origin: "start",
          opacity: 0.2,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: lineColor // 0% 处的颜色
              },
              {
                offset: 1,
                // color: 'rgba(255,255,255,.2)' // 100% 处的颜色
                color: "transparent" // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        lineStyle: {
          color: lineColor
        },
        data:
          new Array(30).fill(undefined).map(function() {
            return Math.random() * 30;
          }) || seriesData
      }
    ]
  };
}

export default {
  mounted() {
    this.chartInstance = new echarts.init(this.$refs.dom);
    const options = getChartOption({});
    this.chartInstance.setOption(options);
  },
  data: () => ({
    chartInstance: null
  }),
  watch: {
    loading(newLoadingStatus) {},
    dataSource(newDataSource) {
      const options = getChartOption({});
      this.chartInstance.setOption(options);
    }
  }
};
</script>

<style lang="css">
.line-chart.component {
  width: 100%;
  height: 100%;
}
</style>
