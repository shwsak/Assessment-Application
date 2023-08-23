import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { AssessmentTileIcon, CalendarIcon, LinkIcon, VertIcon, VerticalDividerIcon } from '../icons';



export default function AssessmentTile() {

    const CustomButton = () => {
        return (
            <Button variant="outlined" sx={{ display: 'flex' }}>
                <LinkIcon />
                <Typography variant="h6" sx={{ pl: '4px' }}>
                    Share
                </Typography>
            </Button>
        );
    }

    const ShareIcon = () => {
        return(
            <Box>
                shweta sakshi
            </Box>
        );
    }

    return (
        <Box sx={{ width: { xs:'100%', sm:'45%', m:'31.5%' ,lg:'31.5%'}}}>
            <Card variant="outlined" sx={{ borderRadius: '12px' }}>
                <Box sx={{ padding: '18px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <AssessmentTileIcon />
                        <VertIcon />
                    </Box>
                    <Typography variant="h5" sx={{ mt: '10px' }}>
                        Math Assessment
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6">
                            Job
                        </Typography>
                        <VerticalDividerIcon />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarIcon />
                            <Typography variant="body1" sx={{ color: '#8DA4BF', pl: 1 }}>
                                20 Apr 2023
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ pt: '16px', borderStyle: 'dashed' }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '16px' }}>
                        <Box sx={{ display: 'flex', gap: '14px' }}>
                            <Box>
                                <Typography variant="h6">
                                    00
                                </Typography>
                                <Typography variant="body1">
                                    Duration
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">
                                    00
                                </Typography>
                                <Typography variant="body1">
                                    Questions
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <CustomButton />
                        </Box>
                    </Box>
                </Box>

            </Card>
        </Box>
    );
}
