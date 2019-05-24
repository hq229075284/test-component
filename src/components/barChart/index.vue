<template>
  <div class="bar-chart component" ref="dom"></div>
</template>

<script>
import echarts from "echarts";

function getChartOption(params) {
  const { xData = [], seriesData = [], barColor = "red" } = params;
  const gray = "#ccc";
  return {
    color: [barColor],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    xAxis: [
      {
        type: "category",
        axisLine:{show:false},
        axisTick: {
          show: false
        },
        axisLabel: {
          color: gray
        },
        data:
          new Array(6).fill(undefined).map(function(v, i) {
            return "9月" + (i + 1) + "日";
          }) || xData
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: gray
        },
        splitLine: {
          lineStyle: {
            color: [gray]
          }
        }
      }
    ],
    series: new Array(seriesData.length || 4).fill().map((v, i) => ({
      type: "bar",
      barGap: 0.5,
      barCategoryGap: "10%",
      data:
        new Array(6).fill(undefined).map(function() {
          return Math.random() * 30|0;
        }) || seriesData[i],
      itemStyle: {
        barBorderRadius: 3
      }
    }))
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
.bar-chart.component {
  width: 100%;
  height: 100%;
}
</style>
