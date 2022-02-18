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
import XpProtocolsCoursePage from './pages/XpProtocolsCoursePage/XpProtocolsCoursePage';
import PartnershipsCoursePage from './pages/PartnershipsCoursePage/PartnershipsCoursePage';
import PartnershipsUnit1Page from './pages/PartnershipsUnit1Page/PartnershipsUnit1Page';
import PartnershipsUnit2Page from './pages/PartnershipsUnit2Page/PartnershipsUnit2Page';
import PartnershipsUnit3Page from './pages/PartnershipsUnit3Page/PartnershipsUnit3Page';
import PBL201CoursePage from './pages/PBL201CoursePage/PBL201CoursePage';
import PBL201Session1Page from './pages/PBL201Session1Page/PBL201Session1Page';
import OurTownCoursePage from './pages/OurTownCoursePage/OurTownCoursePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/courses/pblcourse" element={<PBLCoursePage/>} />
          <Route path="/courses/pblcourse/pblunit1" element={<PBLUnitPage1/>} />
          <Route path="/courses/pblcourse/pblunit2" element={<PBLUnitPage2/>} />
          <Route path="/courses/pblcourse/pblunit3" element={<PBLUnitPage3/>} />
          <Route path="/courses/pblcourse/pblunit4" element={<PBLUnitPage4/>} />
          <Route path="/resources/pbl-evidence-resource" element={<PBLEvidenceResource/>} />
          <Route path="/resources" element={<ResourcesPage/>} />
          <Route path="/courses/anothercourse" element={<AnotherCoursePage/>} />
          <Route path="/courses/xpprotocolscourse" element={<XpProtocolsCoursePage/>} />
          <Route path="/courses/partnershipscourse" element={<PartnershipsCoursePage/>} />
          <Route path="/courses/partnershipscourse/unit1" element={<PartnershipsUnit1Page/>} />
          <Route path="/courses/partnershipscourse/unit2" element={<PartnershipsUnit2Page/>} />
          <Route path="/courses/partnershipscourse/unit3" element={<PartnershipsUnit3Page/>} />
          <Route path="/courses/pbl201course" element={<PBL201CoursePage/>} />
          <Route path="/courses/pbl201course/session1" element={<PBL201Session1Page/>} />
          <Route path="/courses/ourtowncourse" element={<OurTownCoursePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
