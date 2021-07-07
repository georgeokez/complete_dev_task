import {React, useState} from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    LabelList,
    ResponsiveContainer,
    Cell
  } from 'recharts';

  import InputLabel from '@material-ui/core/InputLabel';
  import MenuItem from '@material-ui/core/MenuItem';
  import FormControl from '@material-ui/core/FormControl';
  import Select from '@material-ui/core/Select';
  import Button from '@material-ui/core/Button';
  
  import LaunchIcon from '@material-ui/icons/Launch';

  import {data} from '../../data/DataUtils';
  import {sortedData} from '../../data/DataUtils';

  import { scaleOrdinal } from 'd3-scale';
  import { schemeCategory10 } from 'd3-scale-chromatic';

  import "./chart.css";

  const colors = scaleOrdinal(schemeCategory10).range();
 
function ScatterChartComp() {

    const [dataSize, setDataSize] = useState(20);
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

    return (
        <div className="chart">
            <div className="chart-title-panel">
                <h3 className='chart-title' style={{margin: '0'}}>Heat Map (Size {dataSize})</h3>
                
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
                  <LaunchIcon className='expand-panel' />
                </div>            
            </div>
          <ResponsiveContainer width="100%" aspect={2/1} >
            <ScatterChart width={730} height={300}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="X" name="X" unit="" />
                <YAxis dataKey="Y" name="Y" unit="" />
                <ZAxis dataKey="count" range={[1000, 5000]} name="count" unit="" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Heat Map Emotions" data={data.slice(0,dataSize)} fill="#8884d8" >
                <LabelList dataKey="emotion" position='top' offset={2}/>
                    {
                        data.slice(0,dataSize).map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                    }  
                </Scatter>

            </ScatterChart>
          </ResponsiveContainer>
        </div>
    )
}

export default ScatterChartComp
