import { Box, Divider, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { HamburgerMenu } from "../icons";
import { useContext } from "react";
import { DrawerContext } from "../providers/DrawerProvider";

function Appbar({ title, children, sx }) {

    const { drawerOpen, setDrawerOpen } = useContext(DrawerContext);
    return (
        <Box className="appbar__container" sx={{
            ...sx, 
            display: 'flex',
            flexDirection: {
                xs:"column",
                md:"row"
            },
            background:'#fff',
            height:{
                xs:"128px",
                md:"68px"
            },
            alignItems:{
                xs:"center",
                md:"center"
            },
            padding:'0px 24px',
            borderRadius:'12px 12px 0 0',
            borderBottom: '1px solid #DDE5EA',
            gap: {xs:0, md:'20px'},

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: {
                    xs:'100%',
                    md:'auto'
                },
                padding:{
                    xs:'20px 0px 0px 0px',
                    md:0
                }
                
            }}>
                {/* hamburger */}
                <IconButton  sx={{ display: { xs: 'block', md: 'none'}, marginRight:"15px" }} onClick={()=>{
                    setDrawerOpen(!drawerOpen)
                }}>
                    <HamburgerMenu/>
                </IconButton>            

                <Typography variant="h4" className="title" sx={{fontWeight:600}}>
                    {title}
                </Typography>
            </Box>
        
            {/* '& .title': {
                borderRight: '1px solid #DADCE0',
                paddingRight: '20px',
            } */}

            <Divider orientation="vertical" variant="inset" 
                sx={{ 
                    color: '#DADCE0', height: '40px', margin: '0 20px', borderStyle:"solid",
                    display: {
                        xs:'none',
                        md:'block'
                    }
                }} 
            />
            {/* adding a divider between */}
            <Box className="appbar__items" sx={{
                display: 'flex',
                
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default Appbar;

