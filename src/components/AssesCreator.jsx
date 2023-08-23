import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AddIcon }from '../icons';
import NewAssessmentDialog from './NewAssessment';
import { useState } from 'react';

const card = (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding: '30px'}}>
            <IconButton sx={{padding:0}}>
                <AddIcon/>
            </IconButton>
            <Typography variant='h5' sx={{ mt:'10px' }}>
                New Assessment            
            </Typography>
            <Typography sx={{ textAlign: 'center', pt:'12px' }}>
                From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
            </Typography>
        </Box>
);

export default function AssesCreator() {

    const [dialogOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Box sx={{ width: { xs:'100%', sm:'45%', m:'31.5%' ,lg:'31.5%'} }} onClick={handleOpen}>
                <Card variant="outlined" sx={{border:'1px dashed #DADCE0',borderRadius: '12px', background: '#F6F8FA'}}>{card}</Card>
            </Box>
            <NewAssessmentDialog open={dialogOpen} onClose={handleClose}/>
        </>
    );
}
