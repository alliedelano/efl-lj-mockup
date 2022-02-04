import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import PBLCoursePage from './pages/PBLCoursePage/PBLCoursePage';
import PBLUnitPage1 from './pages/PBLUnitPage1/PBLUnitPage1';
import PBLUnitPage2 from './pages/PBLUnitPage2/PBLUnitPage2';
import PBLUnitPage3 from './pages/PBLUnitPage3/PBLUnitPage3';
import PBLUnitPage4 from './pages/PBLUnitPage4/PBLUnitPage4';
import PBLEvidenceResource from './pages/PBLEvidenceResource/PBLEvidenceResource';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import AnotherCoursePage from './pages/AnotherCoursePage/AnotherCoursePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/pblcourse" element={<PBLCoursePage/>} />
          <Route path="/pblunit1" element={<PBLUnitPage1/>} />
          <Route path="/pblunit2" element={<PBLUnitPage2/>} />
          <Route path="/pblunit3" element={<PBLUnitPage3/>} />
          <Route path="/pblunit4" element={<PBLUnitPage4/>} />
          <Route path="/pbl-evidence-resource" element={<PBLEvidenceResource/>} />
          <Route path="/resources" element={<ResourcesPage/>} />
          <Route path="/anothercourse" element={<AnotherCoursePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
