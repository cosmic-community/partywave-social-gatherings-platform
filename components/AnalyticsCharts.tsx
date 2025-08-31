'use client'

import { useEffect, useRef } from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { AnalyticsData } from '@/types'

ChartJS.register(...registerables)

interface AnalyticsChartsProps {
  data: AnalyticsData
}

export default function AnalyticsCharts({ data }: AnalyticsChartsProps) {
  const categoryChartRef = useRef<HTMLCanvasElement>(null)
  const revenueChartRef = useRef<HTMLCanvasElement>(null)
  const timeChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const categoryCtx = categoryChartRef.current?.getContext('2d')
    const revenueCtx = revenueChartRef.current?.getContext('2d')
    const timeCtx = timeChartRef.current?.getContext('2d')

    let categoryChart: ChartJS | undefined
    let revenueChart: ChartJS | undefined  
    let timeChart: ChartJS | undefined

    if (categoryCtx) {
      categoryChart = new ChartJS(categoryCtx, {
        type: 'doughnut',
        data: data.categoryBreakdown,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom' as const,
              labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                  size: 12
                }
              }
            }
          }
        }
      })
    }

    if (revenueCtx) {
      revenueChart = new ChartJS(revenueCtx, {
        type: 'line',
        data: data.revenueOverTime,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '$' + value
                }
              }
            }
          },
          elements: {
            line: {
              tension: 0.4
            },
            point: {
              radius: 6,
              hoverRadius: 8
            }
          }
        }
      })
    }

    if (timeCtx) {
      timeChart = new ChartJS(timeCtx, {
        type: 'bar',
        data: data.popularTimes,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      })
    }

    return () => {
      categoryChart?.destroy()
      revenueChart?.destroy()
      timeChart?.destroy()
    }
  }, [data])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {/* Category Breakdown */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Events by Category</h3>
        <div className="h-64">
          <canvas ref={categoryChartRef}></canvas>
        </div>
      </div>

      {/* Revenue Over Time */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
        <div className="h-64">
          <canvas ref={revenueChartRef}></canvas>
        </div>
      </div>

      {/* Popular Times */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Times</h3>
        <div className="h-64">
          <canvas ref={timeChartRef}></canvas>
        </div>
      </div>
    </div>
  )
}