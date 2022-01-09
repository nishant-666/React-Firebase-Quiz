import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({
    quizType,
    handleChange
}) {
    return (
        <Box sx={{ minWidth: 220 }} style={{marginTop: 20}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quiz Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quizType}
                    label="Quiz Category"
                    onChange={handleChange}
                >
                    <MenuItem value={9}>General Knowledge</MenuItem>
                    <MenuItem value={10}>Entertainment: Books</MenuItem>
                    <MenuItem value={11}>Entertainment: Film</MenuItem>
                    <MenuItem value={12}>Entertainment: Music</MenuItem>
                    <MenuItem value={13}>Entertainment: Musical and Theatres</MenuItem>
                    <MenuItem value={14}>Entertainment: Television</MenuItem>
                    <MenuItem value={15}>Entertainment: Board Games</MenuItem>
                    <MenuItem value={29}>Entertainment: Japanese Anime and Mange</MenuItem>
                    <MenuItem value={31}>Entertainment: Cartoon and Animations</MenuItem>
                    <MenuItem value={32}>Entertainment: Comics</MenuItem>
                    <MenuItem value={17}>Science and Nature</MenuItem>
                    <MenuItem value={18}>Science: Computers</MenuItem>
                    <MenuItem value={19}>Science: Mathemetics</MenuItem>
                    <MenuItem value={30}>Science: Gadgets</MenuItem>
                    <MenuItem value={20}>Mythology</MenuItem>
                    <MenuItem value={21}>Sports</MenuItem>
                    <MenuItem value={22}>Geography</MenuItem>
                    <MenuItem value={23}>History</MenuItem>
                    <MenuItem value={24}>Politics</MenuItem>
                    <MenuItem value={25}>Art</MenuItem>
                    <MenuItem value={26}>Celebrities</MenuItem>
                    <MenuItem value={27}>Animals</MenuItem>
                    <MenuItem value={28}>Vehicles</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
