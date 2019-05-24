option = {
    // title: {
    //     text: "药占比",
    //     x: "center",
    //     top: 10
    // },
    // tooltip: {
    //     formatter: "{a} <br/>{b} : {c}%"
    // },
    series: [{
        name: "药占比",
        type: "gauge",
        startAngle: 225,
        endAngle: -45,
        center: ["50%", "50%"],
        axisLine: {
            lineStyle: {
                width: 30,
                color:[[.33,'red'],[.66,'green'],[1,'blue']],
                // color: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0,
                //         color: 'red' // 0% 处的颜色
                //     }, {
                //         offset: 1,
                //         color: 'blue' // 100% 处的颜色
                //     }],
                //     global: false // 缺省为 false
                // }
            }
        },
        splitNumber: 12,
        splitLine: {
            show:false,
            length: 30,
            lineStyle: {
                color: '#000'
            }
        },
        axisTick: {
            show: false,
            length: 80,
            splitNumber: 1,
            // lineStyle:{
            //     color:'auto'
            // }
            // color:'blue',
            // color:'auto'
        },
        axisLabel: {
            distance: 20,
            formatter: function (e) {
                switch (e|0) {
                    case 16:
                        return "低";
                    case 50:
                        return "中";
                    case 83:
                        return "警报";
                    default:
                        return  ''
                }
            },
            textStyle: {
                color: "#000",
                fontSize: 15,
                fontWeight: "bolder"
            }
        },
        pointer: {
            // width: "10%",
            color: "black"
        },
        itemStyle: {
            normal: {
                color: "rgba(255, 255, 255, 0.8)",
                shadowBlur: 10
            }
        },
        title: {
            show: !0,
            offsetCenter: [-20, "-40%"],
            textStyle: {
                color: "green"
            }
        },
        detail: {
            show: !0,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            borderColor: "#ccc",
            offsetCenter: [0, -20],
            formatter: "{value}%",
            textStyle: {}
        },
        data: [{
            value: 67,
            name: "药占比"
        }]
    }]
};