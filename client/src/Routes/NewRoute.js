import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Coursespage from "../views/Coursespage/Coursespage";
import Overview from "../views/Overview/Overview";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

import ViewLecture from "../Common/ViewLecture/ViewLecture";
import ProtectedRoutes from "../Provider/ProtectedRoutes";
import { ProtectedAdminRoute } from "../Provider/ProtectecAdminRoutes";
import AdminRoute from "./AdminRoute";

function NewRoute() {
  return (
    <div>
      <Routes>
      
        <Route path="/courses" element={<Coursespage />} />
        <Route path="/overview/:courseCode" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path={`/viewLecture`} element={<ViewLecture />} />
        <Route path={`/viewLecture/id`} element={<ViewLecture />} />


        {/* <Route element={<ProtectedRoutes />}>

        {/**** */}
        <Route element={<ProtectedRoutes />}>

          <Route path="/students" element={<ViewLecture />} />
        </Route>

        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<AdminRoute />} />

        </Route> */}
          
        </Route>
        <Route path="/admin" element={<AdminRoute />} />

      </Routes>
    </div>
  );
}

export default NewRoute;
