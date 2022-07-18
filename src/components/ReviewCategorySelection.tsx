import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import qs from "query-string";
import { useQueryParams } from '../hooks/useQueryParams';


export const ReviewCategorySelection: React.FC = () => {
  const { navigation, queryParams } = useQueryParams();

  const handleChange = (event: SelectChangeEvent) => {
    const newQuery = qs.stringify({ ...queryParams, category: event.target.value })
    navigation(`?${newQuery}`)
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={queryParams.category}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem key="country" value="country">
          Country
        </MenuItem>
        <MenuItem key="city" value="city">
          City
        </MenuItem>
        <MenuItem key="hotel" value="hotel">
          Hotel
        </MenuItem>
        <MenuItem key="visit_type" value="visit_type">
          Visit Type
        </MenuItem>
      </Select>
    </FormControl>
  )
}
