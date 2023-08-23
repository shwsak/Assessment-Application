import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { DashboardIcon, AssessmentIcon, LibraryIcon, StatusIcon, CloseIcon } from '../icons';
import Assessment from '../pages/Assesment';
import Appbar from './Appbar'
import { DrawerContext } from '../providers/DrawerProvider';

const drawerWidth = 140;
const mobileDrawerWidth = 315;


function ResponsiveDrawer(props) {
  const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  const { drawerOpen, setDrawerOpen } = React.useContext(DrawerContext); 

  const theme = useTheme();

  const handleDrawerToggle = () => {
    // setMobileOpen(!mobileOpen);
    setDrawerOpen(!drawerOpen);
  };


  const drawerItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard"
    },
    {

      label: "Assessments",
      icon: <AssessmentIcon />,
      path: "/assessments",
      active: true
    },
    {
      label: "My Library",
      icon: <LibraryIcon />,
      path: "/library"
    },
    {
      label: "Round Status",
      icon: <StatusIcon />,
      path: "/round-status",
      divider: true,
      badgeLabel: "Admin"
    },
  ]

  const drawer = (
    <Box className="drawer-items__wrapper" bgcolor={theme.palette.background}>
      {
        drawerItems.map((item, index) => {
          return (
            <Box key={index} sx={{
              ...item.active && {
                borderRadius: '8px',
                border: '1px solid #0073E6',
                background: '#E5F1FC',
                '& .label':{
                  color: '#0073E6' 
                },
                '& svg':{
                  color: '#0073E6',
                  fill: '#0073E6'  
                },
              }
            }}>
              {item.divider && <Divider sx={{ borderStyle: 'dashed' }} />}
              <Box key={`drawer-item-${index}`} className="drawer-items">
                {item.badgeLabel && <Button variant='secondary'>{item.badgeLabel}</Button>}
                {item.icon}
                <Typography className='label' variant={"body1"}>
                  {item.label}
                </Typography>

              </Box>
            </Box>
          )
        })}
    </Box>
  );

  const mobileDrawerTitle = (
    <Box className="mobile-drawer__title">
      <Typography variant='h6'>Menu</Typography>
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon/>
      </IconButton>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:'cyan'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: mobileDrawerWidth },
            background:"#F2F8FE"
          }}
        > 
          {mobileDrawerTitle}
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1,
          pl:{
            sm:0,
            md:3
          },
          pr:{
            sm:0,
            md:3
          },
          width: { xs:"100%",md: `calc(100% - ${drawerWidth}px)`, background:'#F6F8FA', height:'100vh'} 
        }}
      >
        <Assessment/>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
