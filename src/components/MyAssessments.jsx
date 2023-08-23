import { Box } from "@mui/material"
import AssesCreator from './AssesCreator'
import AssessmentTile from "./AssessmentTile"
import Typography from "@mui/material/Typography"
import IconButton from '@mui/material/IconButton';
import { SearchIcon, FilterListIcon, BarChartIcon } from '../icons'


function MyAssessments({ handleOverview }) {
  return (
    <Box sx={{ background: '#fff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',mb:'16px' }}>
        <Typography variant="h5" component="h5" marginBottom={"16px"}>
          My Assessment
        </Typography>
        <Box sx={{ display:{ md:'none',lg:'none'} }}>
          <IconButton sx={{p:'8px'}}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{p:'8px'}}>
            <FilterListIcon />
          </IconButton>
          <IconButton sx={{p:'8px'}}  onClick={handleOverview}>
            <BarChartIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <AssesCreator />
        <AssessmentTile />
        <AssessmentTile />
      </Box>
    </Box>
  )
}

export default MyAssessments