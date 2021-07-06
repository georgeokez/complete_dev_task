import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@material-ui/icons/LineStyle';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <ul className="sidebar-list">
                        <li className="sidebar-listitem">
                            <LineStyleIcon />
                            <span className="sidebar-menu-label">
                                Home
                            </span>                           
                        </li>
                        <li className="sidebar-listitem">
                            <WhatshotIcon />
                            <span className="sidebar-menu-label">
                                Heat map
                            </span>                                              
                        </li>
                        <li className="sidebar-listitem">
                            <DataUsageIcon />
                            <span className="sidebar-menu-label">
                                Emotion data
                            </span>                           
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
