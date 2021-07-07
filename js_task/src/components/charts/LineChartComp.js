import {React, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import LaunchIcon from '@material-ui/icons/Launch';
import "./chart.css";
import {data} from '../../data/DataUtils';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {Link} from 'react-router-dom';

//const chartData = [...data]

function LineChartComp() {

    const [dataSize, setDataSize] = useState(10);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setDataSize(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    let chartData = [...data]
    chartData = chartData.slice(0,dataSize);

    return (
        <div className="chart">
            <div className="chart-title-panel">
                <h3 className='chart-title' style={{margin: '0'}}>Emotions by Count({dataSize})</h3>
                

                <div className='panel-controls'>              
                    <FormControl className='form-control'>
                        <div className='form-content'>
                            <lable className='form-label'>Select Size</lable>
                                {/* <InputLabel id="demo-controlled-open-select-label">Select Size</InputLabel> */}
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={dataSize}
                                onChange={handleChange}
                                >
                                Select Size 
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                                <MenuItem value={data.length}>Max</MenuItem>

                            </Select>
                        </div>      
                    </FormControl>
                    <Link to='/line-chart'>
                        <LaunchIcon className='expand-panel' />
                    </Link>
                </div>  
            </div>
            
            <ResponsiveContainer width="100%" aspect={3/1}>
                <LineChart
                data={chartData}
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
                <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

export default LineChartComp
