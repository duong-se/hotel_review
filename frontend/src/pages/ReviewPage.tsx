import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { memo, useMemo } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { HotelReviewSummaryTable } from '../components/HotelReviewSummaryTable'
import { HotelReviewTable } from '../components/HotelReviewTable'
import { ReviewCategorySelection } from '../components/ReviewCategorySelection'
import { TypeSelection } from '../components/TypeSelection'
import { useReviews } from '../hooks/useReviews'
import { DisplayType } from '../typings/types'
import { ReviewScoreSelection } from '../components/ReviewScoreSelection'
import { parseReviewByScore } from '../utils/utils'
import { useQueryParams } from '../hooks/useQueryParams'
import React from 'react'

export const ReviewPage: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useReviews()
  const { queryParams } = useQueryParams()

  const hotelNumberReviewTables = useMemo(() => Object.keys(data?.[queryParams.category] ?? {}).map((hotelName) => {
    return { name: hotelName, numberOfReviews: data?.[queryParams.category]?.[hotelName]?.length ?? 0 }
  }), [data, queryParams.category])

  const hotelsByScrore = useMemo(() => {
    return parseReviewByScore(data)
  }, [data])
  if (isLoading) {
    return <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
  }
  if (isError) {
    return <Alert severity="error">{error as string}</Alert>
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TypeSelection />
        </Grid>
        <Grid item xs={8}>
          {queryParams.displayType === DisplayType.CATEGORY ? <ReviewCategorySelection /> : <ReviewScoreSelection />}
        </Grid>
        <Grid item xs={12}>
          {
            queryParams.displayType === DisplayType.CATEGORY ?
              <HotelReviewSummaryTable rows={hotelNumberReviewTables} /> :
              <HotelReviewTable rows={hotelsByScrore[queryParams.score]} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default memo(ReviewPage)
