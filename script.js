// 党史时间轴数据 - 严格遵循官方四个历史时期
const timelineData = [
    // 新民主主义革命时期（1921-1949）
    { year: '1921.7', event: '中共一大召开', period: '新民主主义革命时期', importance: 10 },
    { year: '1922.7', event: '中共二大', period: '新民主主义革命时期', importance: 8 },
    { year: '1927.8.1', event: '南昌起义', period: '新民主主义革命时期', importance: 9 },
    { year: '1927.10', event: '井冈山革命根据地', period: '新民主主义革命时期', importance: 9 },
    { year: '1935.1', event: '遵义会议', period: '新民主主义革命时期', importance: 10 },
    { year: '1936.10', event: '长征胜利结束', period: '新民主主义革命时期', importance: 9 },
    { year: '1937.7.7', event: '卢沟桥事变', period: '新民主主义革命时期', importance: 9 },
    { year: '1937.9', event: '国共二次合作', period: '新民主主义革命时期', importance: 9 },
    { year: '1945.8.15', event: '抗日战争胜利', period: '新民主主义革命时期', importance: 10 },
    { year: '1949.10.1', event: '新中国成立', period: '新民主主义革命时期', importance: 10 },
    
    // 社会主义革命和建设时期（1949-1978）
    { year: '1950.10', event: '抗美援朝', period: '社会主义革命和建设时期', importance: 8 },
    { year: '1953', event: '过渡时期总路线', period: '社会主义革命和建设时期', importance: 8 },
    { year: '1954.9', event: '第一届全国人大', period: '社会主义革命和建设时期', importance: 8 },
    { year: '1956', event: '三大改造完成', period: '社会主义革命和建设时期', importance: 9 },
    { year: '1956.9', event: '中共八大', period: '社会主义革命和建设时期', importance: 8 },
    { year: '1964.10.16', event: '第一颗原子弹爆炸', period: '社会主义革命和建设时期', importance: 9 },
    { year: '1970.4.24', event: '东方红一号卫星', period: '社会主义革命和建设时期', importance: 8 },
    { year: '1971.10.25', event: '恢复联合国席位', period: '社会主义革命和建设时期', importance: 9 },
    { year: '1978.5', event: '真理标准大讨论', period: '社会主义革命和建设时期', importance: 8 },
    
    // 改革开放和社会主义现代化建设新时期（1978-2012）
    { year: '1978.12', event: '中共十一届三中全会', period: '改革开放新时期', importance: 10 },
    { year: '1980.8', event: '设立经济特区', period: '改革开放新时期', importance: 8 },
    { year: '1992', event: '邓小平南方谈话', period: '改革开放新时期', importance: 10 },
    { year: '1992.10', event: '中共十四大', period: '改革开放新时期', importance: 8 },
    { year: '1997.7.1', event: '香港回归', period: '改革开放新时期', importance: 9 },
    { year: '1999.12.20', event: '澳门回归', period: '改革开放新时期', importance: 8 },
    { year: '2003.10', event: '神舟五号', period: '改革开放新时期', importance: 8 },
    { year: '2008.8', event: '北京奥运会', period: '改革开放新时期', importance: 8 },
    { year: '2010', event: 'GDP世界第二', period: '改革开放新时期', importance: 9 },
    
    // 中国特色社会主义新时代（2012至今）
    { year: '2012.11', event: '中共十八大', period: '中国特色社会主义新时代', importance: 9 },
    { year: '2012.11', event: '中国梦', period: '中国特色社会主义新时代', importance: 9 },
    { year: '2017.10', event: '中共十九大', period: '中国特色社会主义新时代', importance: 10 },
    { year: '2020', event: '脱贫攻坚全面胜利', period: '中国特色社会主义新时代', importance: 10 },
    { year: '2021.7.1', event: '建党100周年', period: '中国特色社会主义新时代', importance: 10 },
    { year: '2022.10', event: '中共二十大', period: '中国特色社会主义新时代', importance: 10 }
];

// 四个时期量化数据
const periodStats = [
    {
        period: '新民主主义革命时期', 
        events: 30,
        partyMembers: 448.8,
        achievements: '完成新民主主义革命，建立中华人民共和国，彻底结束旧中国半殖民地半封建社会历史',
        color: '#e74c3c',
        startYear: 1921,
        endYear: 1949
    },
    {
        period: '社会主义革命和建设时期', 
        events: 25,
        partyMembers: 3698.1,
        achievements: '完成社会主义革命，确立社会主义基本制度，奠定工业化和国防现代化基础',
        color: '#8e44ad',
        startYear: 1949,
        endYear: 1978
    },
    {
        period: '改革开放新时期', 
        events: 40,
        partyMembers: 8512.7,
        achievements: '开创中国特色社会主义，实现人民生活从温饱不足到总体小康、奔向全面小康的历史性跨越',
        color: '#3498db',
        startYear: 1978,
        endYear: 2012
    },
    {
        period: '中国特色社会主义新时代', 
        events: 50,
        partyMembers: 9800,
        achievements: '全面建成小康社会，实现第一个百年奋斗目标，推动党和国家事业取得历史性成就、发生历史性变革',
        color: '#27ae60',
        startYear: 2012,
        endYear: 2026
    }
];

// 重要成就统计数据
const achievementsData = [
    { category: '政治建设', value: 92 },
    { category: '经济建设', value: 95 },
    { category: '文化建设', value: 88 },
    { category: '社会建设', value: 90 },
    { category: '生态文明建设', value: 85 },
    { category: '国防建设', value: 88 },
    { category: '外交建设', value: 92 }
];

// 党史关键词数据
const keywordsData = [
    { text: '中国共产党', value: 100 },
    { text: '初心使命', value: 95 },
    { text: '中华民族伟大复兴', value: 90 },
    { text: '人民至上', value: 88 },
    { text: '中国特色社会主义', value: 85 },
    { text: '改革开放', value: 80 },
    { text: '全面建成小康社会', value: 78 },
    { text: '脱贫攻坚', value: 75 },
    { text: '中国式现代化', value: 72 },
    { text: '高质量发展', value: 68 },
    { text: '新时代', value: 65 },
    { text: '全面深化改革', value: 62 },
    { text: '依法治国', value: 58 },
    { text: '全面从严治党', value: 55 },
    { text: '一带一路', value: 52 },
    { text: '人类命运共同体', value: 48 },
    { text: '科技创新', value: 45 },
    { text: '国防和军队现代化', value: 42 },
    { text: '生态文明', value: 38 },
    { text: '共同富裕', value: 35 }
];

// 党的发展历程数据
const developmentData = {
    years: ['1921', '1930', '1940', '1949', '1960', '1970', '1980', '1990', '2000', '2010', '2021'],
    partyMembers: [50, 120000, 800000, 4400000, 17000000, 28000000, 39000000, 51000000, 64000000, 80000000, 95000000],
    achievements: [5, 15, 30, 55, 60, 62, 70, 78, 85, 92, 98]
};

// 初始化时间轴图表 - 使用散点图展示四个时期
function initTimelineChart() {
    const chart = echarts.init(document.getElementById('timeline-chart'));
    
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const data = timelineData[params.dataIndex];
                return `<strong style="color: #e74c3c;">${data.year}</strong><br/>${data.event}<br/><span style="color: #e74c3c;">时期: ${data.period}</span>`;
            },
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#e74c3c',
            textStyle: { color: '#fff' },
            extraCssText: isMobile ? 'max-width: 200px;' : ''
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: isMobile ? '20%' : '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: timelineData.map(item => item.year),
            axisLabel: {
                interval: isMobile ? 2 : 0,
                rotate: isMobile ? 60 : 45,
                fontSize: isMobile ? 8 : 10,
                color: '#ccc'
            },
            axisLine: {
                lineStyle: { color: '#555' }
            },
            axisTick: {
                lineStyle: { color: '#555' }
            }
        },
        yAxis: {
            type: 'value',
            name: '重要性',
            max: 10,
            axisLabel: {
                formatter: '{value}',
                color: '#ccc',
                fontSize: isMobile ? 8 : 10
            },
            axisLine: {
                lineStyle: { color: '#555' }
            },
            axisTick: {
                lineStyle: { color: '#555' }
            },
            splitLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        },
        dataZoom: [{
            type: 'slider',
            start: 0,
            end: isMobile ? 30 : 50,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: '#e74c3c',
            fillerColor: 'rgba(231, 76, 60, 0.2)',
            textStyle: { color: '#ccc' }
        }, {
            type: 'inside'
        }],
        series: [{
            name: '党史事件',
            type: 'scatter',
            symbolSize: function(val, params) {
                return val[1] * (isMobile ? 3 : 4);
            },
            data: timelineData.map((item, index) => {
                let color;
                if (item.period === '新民主主义革命时期') color = '#e74c3c';
                else if (item.period === '社会主义革命和建设时期') color = '#8e44ad';
                else if (item.period === '改革开放新时期') color = '#3498db';
                else color = '#27ae60';
                
                return {
                    value: [index, item.importance],
                    itemStyle: { 
                        color: color,
                        shadowColor: color,
                        shadowBlur: 10
                    }
                };
            }),
            label: {
                show: !isMobile,
                position: 'top',
                formatter: function(params) {
                    return timelineData[params.dataIndex].event;
                },
                fontSize: 9,
                color: '#ccc',
                overflow: 'truncate',
                maxWidth: 60
            }
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 初始化四个时期统计图表 - 使用柱状图展示量化数据
function initPeriodsChart() {
    const chart = echarts.init(document.getElementById('events-chart'));
    
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const dataIndex = params[0].dataIndex;
                const periodData = periodStats[dataIndex];
                let result = `<strong style="color: ${periodData.color};">${periodData.period}</strong><br/>`;
                result += `时间范围: ${periodData.startYear}-${periodData.endYear}<br/>`;
                params.forEach(param => {
                    if (param.seriesName === '核心事件数') {
                        result += `<span style="color: ${param.color};">${param.seriesName}: ${param.value}+件</span><br/>`;
                    } else {
                        result += `<span style="color: ${param.color};">${param.seriesName}: ${param.value}万人</span><br/>`;
                    }
                });
                result += `<span style="color: #e74c3c;">核心成就: ${periodData.achievements}</span>`;
                return result;
            },
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#e74c3c',
            textStyle: { color: '#fff' },
            extraCssText: isMobile ? 'max-width: 200px;' : 'max-width: 300px;'
        },
        legend: {
            data: ['核心事件数', '党员规模'],
            textStyle: { color: '#ccc', fontSize: isMobile ? 10 : 12 },
            top: '5%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: isMobile ? '15%' : '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: periodStats.map(item => item.period),
            axisLabel: {
                color: '#ccc',
                fontSize: isMobile ? 8 : 10,
                rotate: isMobile ? 60 : 45
            },
            axisLine: {
                lineStyle: { color: '#555' }
            },
            axisTick: {
                lineStyle: { color: '#555' }
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '核心事件数',
                min: 0,
                max: 60,
                axisLabel: {
                    formatter: '{value}',
                    color: '#ccc',
                    fontSize: isMobile ? 8 : 10
                },
                axisLine: {
                    lineStyle: { color: '#e74c3c' }
                },
                axisTick: {
                    lineStyle: { color: '#e74c3c' }
                },
                splitLine: {
                    lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            },
            {
                type: 'value',
                name: '党员规模（万人）',
                min: 0,
                max: 10000,
                axisLabel: {
                    formatter: '{value}',
                    color: '#ccc',
                    fontSize: isMobile ? 8 : 10
                },
                axisLine: {
                    lineStyle: { color: '#3498db' }
                },
                axisTick: {
                    lineStyle: { color: '#3498db' }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '核心事件数',
                type: 'bar',
                data: periodStats.map(item => item.events),
                itemStyle: {
                    color: function(params) {
                        return periodStats[params.dataIndex].color;
                    },
                    borderRadius: [4, 4, 0, 0]
                },
                label: {
                    show: !isMobile,
                    position: 'top',
                    color: '#ccc',
                    formatter: '{c}+'
                }
            },
            {
                name: '党员规模',
                type: 'bar',
                yAxisIndex: 1,
                data: periodStats.map(item => item.partyMembers),
                itemStyle: {
                    color: function(params) {
                        const baseColor = periodStats[params.dataIndex].color;
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: baseColor },
                            { offset: 1, color: baseColor + '80' }
                        ]);
                    },
                    borderRadius: [4, 4, 0, 0]
                },
                label: {
                    show: !isMobile,
                    position: 'top',
                    color: '#ccc',
                    formatter: '{c}'
                }
            }
        ]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 初始化成就雷达图
function initAchievementsChart() {
    const chart = echarts.init(document.getElementById('achievements-chart'));
    
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#e74c3c',
            textStyle: { color: '#fff' },
            extraCssText: isMobile ? 'max-width: 200px;' : ''
        },
        radar: {
            indicator: achievementsData.map(item => ({
                name: item.category,
                max: 100
            })),
            radius: isMobile ? '55%' : '65%',
            shape: 'polygon',
            splitNumber: 5,
            axisName: {
                color: '#ccc',
                fontSize: isMobile ? 10 : 12
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.2)'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(231, 76, 60, 0.05)', 'rgba(231, 76, 60, 0.1)']
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(231, 76, 60, 0.3)'
                }
            }
        },
        series: [{
            name: '成就指数',
            type: 'radar',
            data: [{
                value: achievementsData.map(item => item.value),
                name: '建设成就指数',
                areaStyle: {
                    color: 'rgba(231, 76, 60, 0.3)'
                },
                lineStyle: {
                    color: '#e74c3c',
                    width: isMobile ? 1.5 : 2
                },
                itemStyle: {
                    color: '#e74c3c',
                    borderColor: '#fff',
                    borderWidth: isMobile ? 1 : 2
                }
            }]
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 初始化党的发展历程图表
function initDevelopmentChart() {
    const chart = echarts.init(document.getElementById('development-chart'));
    
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                let result = `<strong style="color: #e74c3c;">${params[0].axisValue}年</strong><br/>`;
                params.forEach(param => {
                    if (param.seriesName === '党员数量') {
                        result += `<span style="color: ${param.color};">${param.seriesName}: ${param.value}万人</span><br/>`;
                    } else {
                        result += `<span style="color: ${param.color};">${param.seriesName}: ${param.value}%</span><br/>`;
                    }
                });
                return result;
            },
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#e74c3c',
            textStyle: { color: '#fff' },
            extraCssText: isMobile ? 'max-width: 200px;' : ''
        },
        legend: {
            data: ['党员数量', '发展成就指数'],
            textStyle: { color: '#ccc', fontSize: isMobile ? 10 : 12 }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: isMobile ? '10%' : '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: developmentData.years,
            axisLabel: {
                formatter: '{value}',
                color: '#ccc',
                fontSize: isMobile ? 8 : 10
            },
            axisLine: {
                lineStyle: { color: '#555' }
            },
            axisTick: {
                lineStyle: { color: '#555' }
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '党员数量（万人）',
                position: 'left',
                axisLabel: {
                    formatter: '{value}',
                    color: '#ccc',
                    fontSize: isMobile ? 8 : 10
                },
                axisLine: {
                    lineStyle: { color: '#e74c3c' }
                },
                axisTick: {
                    lineStyle: { color: '#e74c3c' }
                },
                splitLine: {
                    lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            },
            {
                type: 'value',
                name: '成就指数（%）',
                position: 'right',
                max: 100,
                axisLabel: {
                    formatter: '{value}%',
                    color: '#ccc',
                    fontSize: isMobile ? 8 : 10
                },
                axisLine: {
                    lineStyle: { color: '#3498db' }
                },
                axisTick: {
                    lineStyle: { color: '#3498db' }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '党员数量',
                type: 'line',
                smooth: true,
                data: developmentData.partyMembers.map(member => member / 10000),
                itemStyle: {
                    color: '#e74c3c'
                },
                lineStyle: {
                    width: isMobile ? 2 : 3,
                    shadowBlur: 10,
                    shadowColor: 'rgba(231, 76, 60, 0.5)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(231, 76, 60, 0.5)' },
                        { offset: 1, color: 'rgba(231, 76, 60, 0.1)' }
                    ])
                }
            },
            {
                name: '发展成就指数',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: developmentData.achievements,
                itemStyle: {
                    color: '#3498db'
                },
                lineStyle: {
                    width: isMobile ? 2 : 3,
                    shadowBlur: 10,
                    shadowColor: 'rgba(52, 152, 219, 0.5)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(52, 152, 219, 0.4)' },
                        { offset: 1, color: 'rgba(52, 152, 219, 0.1)' }
                    ])
                }
            }
        ]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 初始化关键词云
function initWordcloud() {
    const width = document.getElementById('wordcloud-chart').clientWidth;
    const height = document.getElementById('wordcloud-chart').clientHeight;
    
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;
    
    d3.select('#wordcloud-chart').selectAll('*').remove();
    
    const svg = d3.select('#wordcloud-chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`);
    
    const layout = d3.layout.cloud()
        .size([width, height])
        .words(keywordsData.map(d => ({text: d.text, size: d.value})))
        .padding(isMobile ? 5 : 8)
        .rotate(() => (~~(Math.random() * 2)) * 90)
        .font('Microsoft YaHei')
        .fontSize(d => d.size / (isMobile ? 3 : 2.5))
        .on('end', draw);
    
    layout.start();
    
    function draw(words) {
        svg.append('g')
            .selectAll('text')
            .data(words)
            .enter()
            .append('text')
            .style('font-size', d => d.size + 'px')
            .style('fill', (d, i) => {
                const colors = ['#e74c3c', '#c0392b', '#3498db', '#27ae60', '#f39c12', '#8e44ad'];
                return colors[i % colors.length];
            })
            .style('font-weight', 'bold')
            .style('text-shadow', '0 2px 4px rgba(0,0,0,0.3)')
            .attr('text-anchor', 'middle')
            .attr('transform', d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
            .text(d => d.text)
            .style('cursor', 'pointer')
            .on('mouseover', function() {
                d3.select(this)
                    .style('opacity', 0.8)
                    .style('font-size', d => (d.size + (isMobile ? 1 : 2)) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .style('opacity', 1)
                    .style('font-size', d => d.size + 'px');
            });
    }
}

// 添加加载动画
function addLoadingClass() {
    document.querySelectorAll('.chart-card').forEach(card => {
        card.classList.add('loading');
    });
}

// 移除加载动画
function removeLoadingClass() {
    setTimeout(() => {
        document.querySelectorAll('.chart-card').forEach(card => {
            card.classList.remove('loading');
        });
    }, 500);
}

// 页面加载完成后初始化图表
window.onload = function() {
    addLoadingClass();
    
    // 按顺序初始化图表，添加延迟以创建动画效果
    setTimeout(() => {
        initTimelineChart();
        setTimeout(() => {
            initPeriodsChart();
            setTimeout(() => {
                initAchievementsChart();
                setTimeout(() => {
                    initWordcloud();
                    setTimeout(() => {
                        initDevelopmentChart();
                        removeLoadingClass();
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 300);
};

window.addEventListener('resize', function() {
    addLoadingClass();
    setTimeout(() => {
        initTimelineChart();
        initPeriodsChart();
        initAchievementsChart();
        initWordcloud();
        initDevelopmentChart();
        removeLoadingClass();
    }, 300);
});