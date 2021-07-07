import React from 'react';
import './emotiontable.css';
import { DataGrid } from '@material-ui/data-grid';
import {data} from '../../data/DataUtils';

const columns = [
    { field: 'id', headerName: 'S/N', width: 150 },
    { field: 'emotion_id', headerName: 'Emotion ID', width: 250 },
    { field: 'emotion', headerName: 'Emotion', width: 250 },
    { field: 'X', headerName: 'X', width: 150, type: 'number' },
    { field: 'Y', headerName: 'Y', width: 150, type: 'number' },
    { field: 'count', headerName: 'Count', width: 150, type: 'number' },
  ];


const rowData = [...data]

rowData.forEach((item, i) => {
                item.id = i + 1;
            });;

function EmotionDataTable() {
    return (
        <div className='data-table'>
            <DataGrid rows={rowData} columns={columns} pageSize={8} checkboxSelection />
      </div>
    )
}

export default EmotionDataTable
