import './App.css';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import BubbleChart from './components/charts/BubbleChart';
import MenuBarTop from './components/menubar/MenuBarTop';
import Sidebar from './components/sidebar/Sidebar';
import DashboardContent from './pages/dashbaord/DashboardContent';

function App() {
  return (
    <div className="app-container">
      <MenuBarTop />
      <div className="dashboard-container">
          <Sidebar />
          <DashboardContent />  
      </div> 
      {/*   
      <BarChart />
      <LineChart /> 
      <BubbleChart />  
      */}
    </div>
  );
}

export default App;
