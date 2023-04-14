<template>
  <el-row :gutter="16">
    <el-col :xs="24" :sm="12" :md="12">
      <el-card shadow="never">
        <div ref="Bar" class="echart-bar"></div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12">
      <el-card shadow="never">
        <div ref="Line" class="echart-line"></div>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-card shadow="never">
        <div class="details">
          <span>技术栈：</span>
          vue3.x + vite2.x + vuex4.x + vue-router4.x + element Plus1.x
        </div>
        <div class="details">
          <span>特 点：</span>
          一键换肤，自定义颜色换肤，多种布局方式，图表制作
        </div>
        <div class="details">
          <span>作 者：</span>
          娄方金
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TitleComponent
} from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import fetchChart from '@/utils/fetchChart'

const Bar = ref(null)
const Line = ref(null)
const jsonChartList = {
  barListInfo: {},
  lintListInfo: {}
}
echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  UniversalTransition,
  CanvasRenderer,
  TitleComponent
])
const filterList = (list = []) => {
  return fetchChart.filter((item) => {
    return list.includes(item['部门'])
  })
}
const getFormat = (list = []) => {
  let res = {
    title: [],
    data: []
  }
  list.map((item) => {
    let list = []
    let titleList = []
    Object.entries(item).map(([key, val]) => {
      list.push(val)
      titleList.push(key)
    })
    res.data.push(list)
    res.title.length === 0 && res.title.push(titleList)
  })
  console.log(res)
  return res
}
const initList = () => {
  const barList = filterList(['计划人数', '应聘人数', '面试人数'])
  const lintList = filterList(['到岗率'])
  const proxyBarList = getFormat(barList)
  const proxyLinList = getFormat(lintList)
  jsonChartList.barListInfo = {
    ...proxyBarList
  }
  jsonChartList.lintListInfo = {
    title: proxyLinList.title[0].slice(1),
    data: proxyLinList.data[0].slice(1).map((item) => (item * 100).toFixed(2))
  }
}
const initEchartsBar = (curDOM) => {
  const myChart = echarts.init(curDOM)
  let option
  option = {
    legend: {},
    tooltip: {},
    dataset: {
      // source: [
      //   // ['部门', '市场部', '工程部', '财务部'],
      //   // ['计划人数', 41.1, 30.4, 65.1],
      //   // ['录用人数', 86.5, 92.1, 85.7],
      //   // ['到岗人数', 24.1, 67.2, 79.5]
      // ]
      source: [...jsonChartList.barListInfo.title, ...jsonChartList.barListInfo.data]
    },
    xAxis: [{ type: 'category', gridIndex: 0 }],
    yAxis: [{ gridIndex: 0 }],
    // grid: [],
    series: [
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        label: {
          position: 'top',
          show: true
        }
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        label: {
          position: 'top',
          show: true
        }
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        label: {
          position: 'top',
          show: true
        }
      }
    ]
  }
  option && myChart.setOption(option)
}
const initEchartsLine = (curDOM) => {
  let myChart = echarts.init(curDOM)
  let option

  option = {
    color: ['#FFBF00'],
    title: {
      text: '到岗率',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: jsonChartList.lintListInfo.title
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %' //纵坐标百分比
      }
    },
    series: [
      {
        // data: [10, 20, 24],
        data: jsonChartList.lintListInfo.data,
        type: 'line',
        label: {
          normal: {
            show: true,
            formatter: '{c}%'
          }
        }
      }
    ]
  }

  option && myChart.setOption(option)
}
onMounted(() => {
  initList()
  Bar?.value && initEchartsBar(Bar?.value)
  Line?.value && initEchartsLine(Line?.value)
})
</script>
<style lang="scss" scoped>
.el-row {
  .el-col {
    margin-bottom: 1rem;
  }
}
.card-header-label {
  font-size: 12px;
  padding: 2px 7px;
  border: 1px solid #eee;
  &.green {
    color: #389e0d;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  &.blue {
    color: #096dd9;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  &.orange {
    color: #d46b08;
    background: #fff7e6;
    border-color: #ffd591;
  }
  &.purple {
    color: #531dab;
    background: #f9f0ff;
    border-color: #d3adf7;
  }
}
.card-body {
  padding: 0.5rem 1rem;
  .num {
    display: inline-block;
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  .bottom {
    font-size: 0.875rem;
  }
}
.details {
  padding: 0.5rem 1rem;
  > span {
    color: #999;
  }
}
.echart-bar {
  height: 50vh;
  max-height: 100vh;
  flex: 1;
}
.echart-line {
  max-height: 100vh;
  height: 50vh;
  flex: 1;
}
</style>
