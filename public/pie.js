option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:'40%',
        itemWidth:14,
        data: [{name:'直接访问',icon:'rect',textStyle:{color:'orange'}},{name:'邮件营销',icon:'rect'}]
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            hoverAnimation:false,
            label:{
                color:'#000'
            },
            data:[
                {
                    value:335, name:'直接访问',
                    itemStyle:{color:'orange'},
                    axisLine:{color:'orange'}
                    
                },
                {value:31, name:'邮件营销',itemStyle:{color:'#ccc'},
                    labelLine:{
                        lineStyle:{
                        color:'orange'
                        }
                        
                    }
                },
            ]
        }
    ]
};
