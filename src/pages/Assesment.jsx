import Box from '@mui/material/Box';
import AssestmentOverview from '../components/AssestmentOveriew'
import MyAssessments from '../components/MyAssessments'
import Appbar from '../components/Appbar'
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';


function Assesment() {
  const [showOverView, setShowOverView] = useState(true);

  function handleOverview() {
    setShowOverView(!showOverView)
  }

  console.log(showOverView)

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Appbar
        title={'Assesment'}
      >
        <Tabs value={0}
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#0073E6',
              minWidth: {
                xs: "50%",
                md: "fit-content"
              },

              width: {
                xs: "100%",
                md: 'fit-content'
              },
            }
          }}
          sx={{
            '& .MuiTab-root': {
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: {
                xs: "2.25",
                md: '3.25'
              },
              textTransform: 'none',

              '&.Mui-selected': {
                color: '#0073E6',
              }

            },

          }} >
          <Tab label="My Assesment" />
          <Tab label="Unstop Assesment" />
        </Tabs>
      </Appbar>
      <Box sx={{ background: '#fff', padding: '18px 20px 150px', borderRadius: '0px  0px 12px 12px' }}>
        {showOverView && <AssestmentOverview />}
        <MyAssessments handleOverview={handleOverview} />
      </Box>
    </Box>
  )
}

export default Assesment;