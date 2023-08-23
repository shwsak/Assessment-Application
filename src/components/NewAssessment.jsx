import { useState } from 'react';
import { Box, TextField, Select, MenuItem, Chip, InputLabel, FormControl, FormHelperText, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Fullscreen, Label } from '@mui/icons-material';
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

  const handleSave = () => {
    // TODO: Save assessment data
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  


  return (
    <Dialog open={open} onClose={onClose} className='dialog__wrapper' >
      <DialogTitle sx={{ padding: '16px 44px', borderBottom:'1px solid #DADCE0' }}>Create new assessment</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>

          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Name of Assessment</InputLabel>
          <TextField
            placeholder="Type Here"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            sx={{ width: '100%', marginBottom: '20px', borderRadius: '12px' }}
          />

          <FormControl variant="outlined" sx={{ width: '100%', marginBottom: '20px', borderRadius: '12px' }}>
            <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Purpose of the test is</InputLabel>
            <Select
              labelId="purpose-label"
              id="purpose"
              value={purpose}
              onChange={handlePurposeChange}
              label="Purpose"
            >
              <MenuItem value="">
              </MenuItem>
              <MenuItem value="assessment">Assessment</MenuItem>
              <MenuItem value="evaluation">Evaluation</MenuItem>
            </Select>
          </FormControl>

          <InputLabel sx={{width: '100%', fontWeight:500, fontSize: '16px', mb:'10px'}}>Description</InputLabel>
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter assessment description"
            sx={{ width: '100%', marginBottom: '20px', borderRadius: '12px' }}
          />

          <FormControl variant="outlined" sx={{ width: '100%', marginBottom: '20px', borderRadius: '12px' }}>
            <InputLabel id="skills-label">Skills</InputLabel>
            <Select
              labelId="skills-label"
              id="skills"
              multiple
              value={skills}
              onChange={handleSkillsChange}
              label="Skills"
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="React">React</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="HTML">HTML</MenuItem>
              <MenuItem value="CSS">CSS</MenuItem>
            </Select>
            <FormHelperText>Select the skills required for the assessment</FormHelperText>
          </FormControl>

          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter assessment description"
            sx={{ width: '100%', marginBottom: '20px', borderRadius: '12px' }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewAssessmentDialog;