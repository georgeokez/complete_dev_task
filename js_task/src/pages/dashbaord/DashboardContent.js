import React from 'react'
import './dashboardContent.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BubbleChart from '../../components/charts/BubbleChart';
import LineChartComp from '../../components/charts/LineChartComp';
import BarChartComp from '../../components/charts/BarChartComp';
import ScatterChartComp from '../../components/charts/ScatterChartComp';
import EmotionTable from '../../components/tables/EmotionTable';

function DashboardContent() {
    return (
        <div className="content-container">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper className='charts'>
                        <LineChartComp />
                    </Paper>                  
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className='charts'>
                        <BarChartComp />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className='list-view'>
                        <EmotionTable />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Paper className='heat-map'>
                        <ScatterChartComp />
                        {/* <BubbleChart /> */}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardContent
