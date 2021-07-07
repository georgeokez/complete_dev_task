import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TableChartIcon from '@material-ui/icons/TableChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <ul className="sidebar-list">
                        <li>
                            <Link to='/' className="sidebar-listitem">
                                <LineStyleIcon />
                                <span className="sidebar-menu-label">
                                    Home
                                </span>      
                            </Link>                     
                        </li>
                        <li>
                            <Link to='/line-chart' className="sidebar-listitem">
                                <TimelineIcon />
                                <span className="sidebar-menu-label">
                                    Line Chart
                                </span>
                            </Link>                                           
                        </li>
                        <li>
                            <Link to='/bar-chart' className="sidebar-listitem">
                                <AssessmentIcon />
                                <span className="sidebar-menu-label">
                                    Bar Chart
                                </span>
                            </Link>                                           
                        </li>
                        <li>
                            <Link to='/heat-map' className="sidebar-listitem">
                                <BubbleChartIcon />
                                <span className="sidebar-menu-label">
                                    Heat map
                                </span>
                            </Link>                                           
                        </li>
                        <li>
                            <Link to='/emotion-data' className="sidebar-listitem">
                                <TableChartIcon />
                                <span className="sidebar-menu-label">
                                    Emotion data
                                </span>                           
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
