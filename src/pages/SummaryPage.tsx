import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import React, { memo, useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import { useReviews } from '../hooks/useReviews'
import Container from '@mui/material/Container'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { mapReviewByHotel } from '../utils/utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


export const SummaryPage: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useReviews()
  const options = useMemo(() => ({
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Summary reviews',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }), [])
  const labels = useMemo(() => ['1', '2', '3', '4', '5'], [])
  const chartData = useMemo(() => {
    const summaryData = mapReviewByHotel(data)
    return {
      labels,
      datasets: isSuccess ? Object.keys(summaryData).map((hotelName) => {
        return {
          label: hotelName,
          data: labels.map((label) => {
            return isSuccess ? summaryData?.[hotelName]?.[label]?.length : 0
          }),
          backgroundColor: `rgba(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, 0.5)`,
        }
      }) : [],
    }
  }, [data, isSuccess, labels])

  if (isLoading) {
    return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
  }
  if (isError) {
    return <Alert severity="error">{error as string}</Alert>
  }
  return (
    <Container maxWidth="lg">
      <Bar options={options} data={chartData} />
    </Container>
  )
}

export default memo(SummaryPage)
