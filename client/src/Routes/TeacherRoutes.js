import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UploadVideo from '../Teacher/UploadVideo/UploadVideo';
import ViewLecture from '../Common/ViewLecture/ViewLecture';
import TeacherMycourses from '../Teacher/TeacherMycourses/TeacherMycourses';
import TeacherProfile from '../Teacher/YourProfile/teacherProfile';
function TeacherRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/uploadvideo" element={<UploadVideo/>} />
        <Route path={'/uploadvideo/:courseCode'} element={<UploadVideo/>} />
        <Route path="/teacherProfile" element={<TeacherProfile />} />

        <Route path="/teacher/Mycourses" element={<TeacherMycourses/>} />
        <Route path="/teacher/ViewLecture" element={<ViewLecture/>} />
        <Route path={`/teacher/ViewLecture/:courseCode`} element={<ViewLecture/>} />

      </Routes>
    </div>
  )
}

export default TeacherRoutes
