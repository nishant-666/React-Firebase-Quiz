import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ leaderBoardData }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {leaderBoardData.length > 0 ? (
                    <TableHead>
                        <TableRow>
                            <TableCell>Player Name</TableCell>
                            <TableCell>Date and Time</TableCell>
                            <TableCell>Difficulty</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Final Score</TableCell>
                        </TableRow>
                    </TableHead>
                ) : (
                    <></>
                )}
                {leaderBoardData.length > 0 ? (
                    leaderBoardData.map((person) => {
                        return (
                            <TableBody>
                                <TableRow
                                    key={person.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {person.playerName}
                                    </TableCell>
                                    <TableCell className="table-cell">{person.timeStamp}</TableCell>
                                    <TableCell className="table-cell">{person.difficulty}</TableCell>
                                    <TableCell>{person.category}</TableCell>
                                    <TableCell>{person.finalScore}</TableCell>
                                </TableRow>

                            </TableBody>
                        )
                    })
                ) : (
                    <div className='no-data'>
                        <p>No Data to Show</p>
                    </div>
                )}
            </Table>
        </TableContainer>
    );
}
