import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import qs from "query-string";
import { useQueryParams } from "../hooks/useQueryParams";

export const TypeSelection = () => {
  const { navigation, queryParams } = useQueryParams();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    displayType: string,
  ) => {
    const newQuery = qs.stringify({ ...queryParams, displayType })
    navigation(`?${newQuery}`)
  }
  return (
    <ToggleButtonGroup
      color="primary"
      value={queryParams.displayType}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="category">Category</ToggleButton>
      <ToggleButton value="score">Score</ToggleButton>
    </ToggleButtonGroup>
  )
}
