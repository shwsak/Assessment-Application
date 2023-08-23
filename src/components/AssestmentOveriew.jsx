import { Box, Grow, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { AgendaIcon, CandidatesIcon, HorizontalLinkIcon, WorldIcon, TotalAssesmentsIcon } from "../icons"



function AssestmentOverview() {

    const theme = useTheme();
    const ItemTypeBasic = ({ title, icon, baseNumber, divider }) => {
        return (
            <Box sx={{
                display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', padding: "16px 20px",
                borderRight: divider ? "1px solid #DADCE0" : "none",
                alignItems: "flex-start",
                flexGrow: '1'
            }}>
                <Typography variant="h6" component="h6" marginBottom={"16px"}>
                    {title}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: 'background.paper', alignItems: "center", gap: "10px" }}>
                    {icon}
                    <Typography variant="h4" component="h4">
                        {baseNumber}
                    </Typography>
                </Box>

            </Box>
        );
    }

    const ItemTypeMultiValues = ({ title, icon, divider, data }) => {
        return (
            <Box sx={{
                display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', padding: "16px 20px",
                borderRight: { xs: 'none', sm: divider ? `1px solid ${theme.palette.divider}` : "none" },
                borderTop: { xs: '1px solid #DADCE0', sm: '1px solid #DADCE0', md: 'none' },
                alignItems: "flex-start",
                flexGrow: '1.2',
                order: { xs: 1, md: 0 }
            }}>
                <Typography variant="h6" component="h6" marginBottom={"16px"}>
                    {title}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: 'background.paper', alignItems: "center", gap: "20px" }}>
                    <Box>
                        {icon}
                    </Box>
                    <Box sx={{
                        // add border right to child Box exepct last child
                        display: "flex",
                        "& > div:not(:last-child)": {
                            borderRight: `1px solid ${theme.palette.divider}`,
                            paddingRight: "20px",
                            marginRight: "20px",
                        }
                    }}>
                        {
                            data.map((item, index) =>
                                <Box key={`aso-${index}`} display={"flex"} flexDirection={"column"} gap={"1px"}>
                                    <Box display={"flex"} gap={"4px"} alignItems={"center"} >
                                        {/* value */}
                                        <Typography variant="h4" component="h4" >
                                            {item.value}
                                        </Typography>

                                        {/* value extra */}
                                        <Typography variant="body2" component="span" color={theme.palette.success.main}>
                                            {item.valueExtra}
                                        </Typography>
                                    </Box>
                                    {/* label */}
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>
                                </Box>
                            )}

                    </Box>
                </Box>

            </Box>
        )
    }

    /**
     * Define the prop types
     */
    ItemTypeBasic.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        baseNumber: PropTypes.number.isRequired,
        divider: PropTypes.bool,
    }

    ItemTypeMultiValues.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        // shape array of objects
        data: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            valueExtra: PropTypes.string,
        })).isRequired,
        divider: PropTypes.bool,
    }


    return (
        <Box sx={{ marginBottom: '24px', marginTop: { xs: '20px' } }}>
            <Typography variant="h5" component="h5" marginBottom={"16px"}>
                Assestment Overview
            </Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                overflow: 'hidden',
                bgcolor: 'background.paper',
                borderRadius: "12px",
                border: "1px solid #DADCE0",
            }}>

                <ItemTypeBasic title="Total Assestments" icon={<TotalAssesmentsIcon />} baseNumber={34} divider={true} />
                <ItemTypeMultiValues title="Candidates" icon={<CandidatesIcon />} data={[
                    { title: "Total Canditate", value: "11,145", valueExtra: "+89" },
                    { title: "Who Attempted", value: "114", valueExtra: "+89" },
                ]} divider={true} />
                <ItemTypeMultiValues title="Candidates Source" icon={<WorldIcon />} data={[
                    { title: "E-mail", value: "11,000", valueExtra: "+89" },
                    { title: "Social Share", value: "145", valueExtra: "+89" },
                    { title: "Unique Link", value: "145", valueExtra: "+89" },
                ]} divider={true} />
                <ItemTypeBasic title="Total Purpose" icon={<HorizontalLinkIcon />} baseNumber={11} />

            </Box>

        </Box>


    );
}

export default AssestmentOverview;