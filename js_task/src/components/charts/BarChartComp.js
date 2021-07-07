import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LaunchIcon from '@material-ui/icons/Launch';
import "./chart.css";
import {sortedData} from '../../data/DataUtils';


function BarChartComp() {
    return (
        <div className="chart">
            <div className="chart-title-panel">
                <h3 className='chart-title' style={{margin: '0'}}>Top 10 Emotions</h3>
                <LaunchIcon className='expand-panel' />
            </div>
            <ResponsiveContainer width="100%" aspect={3/1}>
                <BarChart
                    data={sortedData.slice(0, 10)}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="emotion" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
             </ResponsiveContainer>
        </div>
    )
}

export default BarChartComp
