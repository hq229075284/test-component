var itemStyle = {
    barBorderRadius: 10
}

option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'green'
        },
        data: ['2012', '2013', '2014', '2015', '2016']
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'red'
        },
        splitLine: {
            lineStyle: {
                color: ['red']
            }
        }
    }],
    series: [{
            name: 'Forest',
            type: 'bar',
            barGap: 0.5,
            barCategoryGap: '10%',
            data: [320, 332, 301, 334, 390],
            itemStyle: itemStyle
        },
        {
            name: 'Steppe',
            type: 'bar',
            data: [220, 182, 191, 234, 290],
            itemStyle: itemStyle
        },
        {
            name: 'Desert',
            type: 'bar',
            data: [150, 232, 201, 154, 190],
            itemStyle: itemStyle
        },
        {
            name: 'Wetland',
            type: 'bar',
            data: [98, 77, 101, 99, 40],
            itemStyle: itemStyle
        }
    ]
};