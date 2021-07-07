import './App.css';
import MenuBarTop from './components/menubar/MenuBarTop';
import Sidebar from './components/sidebar/Sidebar';
import DashboardContent from './pages/dashbaord/DashboardContent';
import HeatMapPage from './pages/heatmap/HeatMapPage';
import EmotionDataPage from './pages/emotiondata/EmotionDataPage';
import LineChartPg from './pages/linechartpg/LineChartPg';
import BarChartPg from './pages/barchartpg/BarChartPg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <MenuBarTop />
        <div className="dashboard-container">
            <Sidebar />
            <Switch>
                <Route exact path='/'>
                  <DashboardContent />  
                </Route>
                <Route path='/line-chart'>
                  <LineChartPg />  
                </Route>
                <Route path='/bar-chart'>
                  <BarChartPg />  
                </Route>
                <Route path='/heat-map'>
                  <HeatMapPage />  
                </Route>
                <Route path='/emotion-data'>
                  <EmotionDataPage />  
                </Route>          
            </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
