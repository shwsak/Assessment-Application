import { useState } from 'react';
import { Autocomplete,Box, TextField, Select, MenuItem, Chip, InputLabel, FormControl, FormHelperText, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Fullscreen, Label, CloseOutlined } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


function NewAssessmentDialog({ open, onClose }) {
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleSave = (e) => {
    // TODO: Save assessment data
    onClose(e);
  };

  const handleClose = (e) => {
    onClose(e);
  };


  const TextFieldStyled = styled(TextField)(({ theme }) => ({
    width: '100%', marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
    // placeholder
    '& .MuiOutlinedInput-input': {
      color:"#1C4980",
      fontSize: '14px',

    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: "#1C4980",
    },

  }));

  const availableSkills = [
    "UI/UX and Design",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
  ]
  return (
    <Dialog open={open} onClose={handleClose} className='dialog__wrapper' >
      <DialogTitle sx={{ padding: '16px 44px', borderBottom:'1px solid #DADCE0', fontSize:"20px" }}>Create new assessment</DialogTitle>
      {/* close icon on left */}
      <Box sx={{ position: 'absolute', top: '16px', right: '16px', cursor: 'pointer' }} onClick={handleClose}>
        <CloseOutlined/>
      </Box>
        
      <DialogContent sx={{overflowY:"hidden"}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>

          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Name of Assessment</InputLabel>
          <TextFieldStyled
            placeholder="Type Here"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />

          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Purpose of the test is</InputLabel>
          <FormControl variant="outlined" sx={{ width: '100%', marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            }
        }}>
            <InputLabel id="purpose-label" sx={{
              '&.MuiInputLabel-shrink': {
                display: 'none'
              },
              fontSize: '14px',
            }}>Select</InputLabel>
            
            <Select
              labelId="purpose-label"
              id="purpose"
              value={purpose}
              onChange={handlePurposeChange}
              placeholder='Select an option'
              // label="Purpose"
            >

              <MenuItem value="assessment">Assessment</MenuItem>
              <MenuItem value="evaluation">Evaluation</MenuItem>
            </Select>
          </FormControl>

          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Description</InputLabel>
          <TextFieldStyled
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter assessment description"
          />
          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Skills</InputLabel>

          <FormControl variant="outlined" sx={{ width: '100%', marginBottom: '20px', borderRadius: '12px' }}>
              <Autocomplete
                sx={{
                  // chip color
                  '& .MuiChip-root': {
                    background: '#DDEDFF',
                    color: '#1C4980',
                  },
                  // chip delete icon color
                  '& .MuiChip-deleteIcon': {
                    color: '#1C4980',
                  },
                }}
                multiple
                id="skills-tags"
                options={availableSkills}
                getOptionLabel={(option) => option}
                defaultValue={availableSkills.slice(0, availableSkills.length - 4)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      key={index}
                      label={option}
                      deleteIcon={<CloseOutlined />}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    // label="Multiple values"
                    placeholder="Add skills"
                  />
                )}
              />
          </FormControl>
          
          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Duration of assessment</InputLabel>
          <TextFieldStyled
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="HH:MM:SS"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{padding:'20px 44px', boxShadow: '0px -4px 50px 0px rgba(0, 0, 0, 0.09)'}}>
        <Button sx={{width:'100%', background:'#0073E6',hover:'#0073E6', color:'#fff', textTransform:'none'}} onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewAssessmentDialog;