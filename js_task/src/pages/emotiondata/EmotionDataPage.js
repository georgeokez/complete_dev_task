import React from 'react';
import "./emotiondata.css";
import EmotionDataTable from '../../components/tables/EmotionDataTable';

function EmotionDataPage() {
    return (
        <div className='content-container'>
            <h1>Emotion Data</h1>
            <EmotionDataTable />
        </div>
    )
}

export default EmotionDataPage
