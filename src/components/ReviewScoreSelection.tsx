import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import qs from "query-string";
import { useQueryParams } from '../hooks/useQueryParams';

export const ReviewScoreSelection: React.FC = () => {
  const { navigation, queryParams } = useQueryParams();

  const handleChange = (event: SelectChangeEvent) => {
    const newQuery = qs.stringify({ ...queryParams, score: event.target.value })
    navigation(`?${newQuery}`)
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="score-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="score-select"
        value={queryParams.score}
        label="Score"
        onChange={handleChange}
      >
        <MenuItem key="1" value="1">
          1
        </MenuItem>
        <MenuItem key="2" value="2">
          2
        </MenuItem>
        <MenuItem key="3" value="3">
          3
        </MenuItem>
        <MenuItem key="4" value="4">
          4
        </MenuItem>
        <MenuItem key="5" value="5">
          5
        </MenuItem>
      </Select>
    </FormControl>
  )
}
