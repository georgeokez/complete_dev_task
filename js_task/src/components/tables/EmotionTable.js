import React from 'react'
import "./emotiontable.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {data} from '../../data/DataUtils';

const last7data = data.slice(-7);

const rows = last7data;

function EmotionTable() {
    return (
        <div className="table-container">
             <div className="chart-title-panel">
                <h3 className='chart-title' style={{margin: '0'}}>Newly Added Emotions</h3>
            </div>
             <TableContainer>
                <Table className='table' aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Emotions</TableCell>
                        <TableCell align="left">X</TableCell>
                        <TableCell align="left">Y</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.emotion_id}>
                        <TableCell align="left">{row.emotion_id}</TableCell>
                        <TableCell component="th" scope="row">
                            {row.emotion}
                        </TableCell>
                        <TableCell align="left">{row.X}</TableCell>
                        <TableCell align="left">{row.Y}</TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
             </TableContainer>
        </div>
    )
}

export default EmotionTable
