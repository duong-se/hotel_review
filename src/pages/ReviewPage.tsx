import { Alert, Container, Grid } from '@mui/material';
import { useMemo } from 'react';
import { HotelReviewSummaryTable } from '../components/HotelReviewSummaryTable';
import { HotelReviewTable } from '../components/HotelReviewTable';
import { ReviewCategorySelection } from '../components/ReviewCategorySelection';
import { TypeSelection } from '../components/TypeSelection';
import { useReviews } from '../hooks/useReviews';
import { DisplayType } from '../typings/types';
import { ReviewScoreSelection } from '../components/ReviewScoreSelection';
import { parseHotelReview } from '../utils/utils';
import { useQueryParams } from '../hooks/useQueryParams';

export const ReviewPage: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useReviews()
  const { queryParams } = useQueryParams()

  const hotelNumberReviewTables = useMemo(() => Object.keys(data?.[queryParams.category] ?? {}).map((ele) => {
    return { name: ele, numberOfReviews: data?.[queryParams.category]?.[ele]?.length ?? 0 }
  }), [data, queryParams.category])

  const hotelsByScrore = useMemo(() => {
    return parseHotelReview(data)
  }, [data])
  if (isLoading) {
    return <div>Loading...</div>
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

export default ReviewPage;
