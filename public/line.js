option = {
    // grid: {
    //     top: "25%",
    //     bottom: "10%"
    // },
    backgroundColor: '#fff',
    tooltip: {
        // trigger: "axis",
        // axisPointer: {
        //     type: "shadow",
        //     label: {
        //         show: true
        //     }
        // }
    },
    // legend: {
    //     data: ["销售水量", "主营业务"],
    //     top: "15%",
    //     textStyle: {
    //         // color: "#ffffff"
    //     }
    // },
    xAxis: {
        boundaryGap: false,
        data: new Array(30).fill(undefined).map(function(v, i) {
            return '9月' + (i + 1) + '日'
        }),
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
        },
    },
    yAxis: {
        type: "value",
        // name: "亿元",
        // nameTextStyle: {
        //     color: "#ebf8ac"
        // },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc'
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
        },
    },
    series: [{
            name: "销售水量",
            type: "line",
            // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "green"
            },
            areaStyle: {
                origin: 'start',
                opacity: .5,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(23, 255, 243, .3)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        // color: 'rgba(255,255,255,.2)' // 100% 处的颜色
                        color: 'transparent' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            lineStyle: {
                color: "green"
            },
            data: new Array(30).fill(undefined).map(function() {
                return Math.random() * 30
            })
        },

    ]
};