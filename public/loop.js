app.title = '环形图';

var name1 = '已收款（元）'
var name2 = '未收款（元）'

option = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    legend: {
        show: true,
        orient: 'horizontal',
        itemWidth: 14,
        bottom: 0,
        left: 0,
        itemGap: 500,
        textStyle: {
            lineHeight: 14,
            fontSize: 16,
            color: 'auto',
            padding: [2, 0, 0, 0],
            fontFamily: 'Microsoft YaHei',
        },
        data: [{
            name: name1,
            icon: 'rect'
        }, {
            name: name2,
            icon: 'rect'
        }]
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '80%'],
        hoverAnimation: false,
        // avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'center',
            formatter: '{c}%\n{arrow|}',
            fontSize: 22,
            color: '#000',
            lineHeight: 30,
            rich: {
                arrow: {
                    height: 30,
                    backgroundColor: {
                        image: 'https://www.echartsjs.com/gallery/data/asset/img/weather/sunny_128.png'
                    }
                }
            }
        },
        emphasis: {
            //   label: {

            //     show: false
            //   }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        silent: true,
        data: [{
                value: 335,
                name: name1,
                label: {
                    // show: true,
                    // position: 'center',
                    // formatter: '{b}:{c}\n{arrow|}',
                    // fontSize: 22,
                    // color:'#000',
                    // lineHeight:30,
                    // rich: {
                    //     arrow: {
                    //         height: 30,
                    //         backgroundColor: {
                    //             image: 'https://www.echartsjs.com/gallery/data/asset/img/weather/sunny_128.png'
                    //         }
                    //     }
                    // }
                },
                //   emphasis: {
                //     label: {
                //       show: true
                //     }
                //   },
                itemStyle: {
                    color: 'green'
                },

            },
            {
                value: 90,
                name: name2,
                itemStyle: {
                    color: 'gray'
                },
                label: {
                    show: false
                },
                //   emphasis: {
                //     label: {
                //       show: true,
                //       // color: '#000',
                //       // color:'red'
                //     }
                //   }
            },
        ]
    }]
};