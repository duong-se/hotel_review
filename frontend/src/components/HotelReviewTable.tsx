import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Review } from '../typings/types'


export type HotelReviewTableProps = {
  rows: Array<Review>
}

export const HotelReviewTable: React.FC<HotelReviewTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Visit Type</TableCell>
            <TableCell align="right">Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              data-testid="review-row"
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.visitType}</TableCell>
              <TableCell align="right">{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
