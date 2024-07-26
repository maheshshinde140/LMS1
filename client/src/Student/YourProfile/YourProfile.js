import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./YourProfile.css";

import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const YourProfile = () => {
  const loginUser = "student";

  const [profile, setProfile] = useState({
    studentFullName: "Anuruddh Singh",
    studentEmail: "anuruddh7234@gmail.com",
    studentMobileNo: "8795734013",
    studentGender: "Male",
    studentAge: "20",
    studentAddress: "Lucknow, Uttar Pradesh",
    studentProfilePicture: "path-to-profile-picture.jpg",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    const body = {
      studentFullName: profile.studentFullName,
      studentEmail: profile.studentEmail,
      studentMobileNo: profile.studentMobileNo,
      studentGender: profile.studentGender,
      studentAge: profile.studentAge,
      studentAddress: profile.studentAddress,
      studentProfilePicture: profile.studentProfilePicture,
    }

    const config = {

      headers: {
        "content": "multipart/form-data",
  
      },

      withCredentials: true,   /// this is for reading the cookie from the server side
    }

    const response = await axios.post(`api/student/profile/${loginUser}`, body, config);

    console.log("response =>", response);


  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`api/student/profile/${loginUser}`);
      console.log("get all courses response=>", response);
      console.log("response.data =>", response.data);
      console.log("response.data.data =>", response.data.data);
      setProfile(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    fetchProfile();

  }, []);

  return (
    <div className="maincontainer">
      <Navbar />
      <div className="profile-page">
        <main className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar-container">
                <Avatar
                  src={profile.profilePicture}
                  alt="Profile"
                  className="avatar"
                  onClick={() => document.getElementById("avatarInput").click()}
                />

                <input
                  type="file"
                  id="avatarInput"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>
              <h2>My Profile</h2>
            </div>

    
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profile.studentFullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Mobile No *</label>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={profile.mobileNo}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="save-changes">
                Save changes
              </button>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourProfile;
