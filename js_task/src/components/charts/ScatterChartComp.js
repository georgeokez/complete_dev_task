import React from 'react'
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

  const data01 = [
    { x: 100, y: 600, z: 350 },
    { x: 110, y: 280, z: 310 },
    { x: 120, y: 100, z: 340 },
    { x: 150, y: 400, z: 700 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 330 },
    
    
  ];

function ScatterChartComp() {
    return (
        <ResponsiveContainer width="100%">
            <ScatterChart width={730} height={250}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" name="stature" unit="cm" />
                <YAxis dataKey="y" name="weight" unit="kg" />
                <ZAxis dataKey="z" range={[0, 10000]} name="score" unit="km" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="A school" data={data01} fill="#8884d8" />

            </ScatterChart>
        </ResponsiveContainer>
    )
}

export default ScatterChartComp
