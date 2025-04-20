import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from "./pages/dashboard/DashboardLayout.tsx";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import AuthPage from "@/pages/auth/Login.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import PersonalInformation from "@/pages/application/PersonalInformation.tsx";
import EducationHistory from "@/pages/application/EducationHistory.tsx";
import WorkExperienceHistory from "@/pages/application/WorkExperienceHistory.tsx";
import DocumentsUpload from "@/pages/application/DocumentsUpload.tsx";
import ProfilePage from "@/pages/profile/Profile.tsx";
import AuthNavigate from "@/functions/authNavigate.tsx";
import CoverLetter from '@/pages/application/CoverLetter';
import ApplicationLayout from './pages/application/ApplicationLayout.tsx';
import ApplicationMain from "@/pages/application/ApplicationMain.tsx";
import CreateUniversity from './pages/university/CreateUniversity.tsx';
import AppliedUniversityList from "@/pages/university/AppliedUniversityList.tsx";
import AllUniversityList from "@/pages/university/AllUniversityList.tsx";
import Messages from './pages/Messages.tsx';
import Notifications from './pages/Notifications.tsx';
import Leaderboard from "@/pages/Leaderboard.tsx";
import Scholarships from './pages/Scholarships.tsx';
import Support from './pages/Support.tsx';
import Feedback from './pages/Feedback.tsx';
import News from './pages/News.tsx';
import Homepage from './pages/Homepage.tsx';

function App() {

    return (
          <>
              <Toaster/>
              <BrowserRouter>
                  <AuthNavigate />
                  <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/login" element={<AuthPage/>} />
                      <Route path="/addnewuni" element={<CreateUniversity/>} />
                      <Route path="/dashboard" element={<DashboardLayout/>}>
                        <Route index element={<Dashboard/>} />
                        <Route path="/dashboard/application" element={<ApplicationLayout/>}>
                            <Route index element={<ApplicationMain/>} />
                            <Route path="/dashboard/application/personal" element={<PersonalInformation/>} />
                            <Route path="/dashboard/application/education" element={<EducationHistory/>} />
                            <Route path="/dashboard/application/experience" element={<WorkExperienceHistory/>} />
                            <Route path="/dashboard/application/documents" element={<DocumentsUpload/>} />
                            <Route path="/dashboard/application/letter" element={<CoverLetter/>} />
                        </Route>
                        <Route path="/dashboard/universities" element={<AllUniversityList/>} />
                        <Route path="/dashboard/universities/applied" element={<AppliedUniversityList/>} />
                        <Route path="/dashboard/messages" element={<Messages/>} />
                        <Route path="/dashboard/notifications" element={<Notifications/>} />
                        <Route path="/dashboard/leaderboard" element={<Leaderboard/>} />
                        <Route path="/dashboard/scholarships" element={<Scholarships/>} />
                        <Route path="/dashboard/news" element={<News/>} />
                        <Route path="/dashboard/support" element={<Support/>} />
                        <Route path="/dashboard/feedback" element={<Feedback/>} />
                        <Route path="/dashboard/profile" element={<ProfilePage/>} />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </>
      )
}

export default App
