import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import StudentSidebar from './components/sidebar/StudentSidebar';
import './App.css';
import SubscriptionsPage from './components/pages/subscription/Subscription';
import HomePage from './components/pages/home/StudentHome';
import History from './components/pages/history/History';
import LikedVideo from './components/pages/likedVideo/LikedVideo';
import StudentProfile from './components/pages/profile/StudentProfile';

// import TeacherSidebar from './components/sidebar/TeacherSidebar';
// import TeacherDashboard from './components/pages/home/TeacherHome';
// import UploadVideo from './components/pages/uploadVideo/UploadVideo';
// import TeacherProfile from './components/pages/profile/TeacherProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <StudentSidebar />
        <Routes>
          <Route path="/student/home" element={<HomePage />} />
          <Route path="/student/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/student/history" element={<History />} />
          <Route path="/student/likedvideos" element={<LikedVideo/>}/>
          <Route path="/student/profile" element={<StudentProfile/>}/>
        </Routes>
        <StudentSidebar />
        {/*<TeacherSidebar/>
        <Routes>
          <Route path="/teacher/home" element={<TeacherDashboard/>}/>
          <Route path="/teacher/upload" element={<UploadVideo/>} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />
        </Routes>*/}
      </div>
    </Router>
  );
}



export default App;