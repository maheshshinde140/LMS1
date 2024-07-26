import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./teacherProfile.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const TeacherProfile = () => {
  const loginUser = "teacher";

  const [profile, setProfile] = useState({
    teacherFullName: "",
    teacherEmail: "",
    teacherPhone: "",
    teacherAddress: "",
    teacherAge: "",
    teacherGender: "",
    profilePicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      teacherFullName: profile.teacherFullName,
      teacherEmail: profile.teacherEmail,
      teacherPhone: profile.teacherPhone,
      teacherGender: profile.teacherGender,
      teacherAge: profile.teacherAge,
      teacherAddress: profile.teacherAddress,
      profilePicture: profile.profilePicture,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.put(`/api/teacher/update`, body, config);
      console.log("response =>", response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`/api/teacher/getProfile/`);
      console.log("get profile response =>", response);
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
              <h2>Teacher Profile</h2>
            </div>
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="teacherFullName"
                    value={profile.teacherFullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="teacherEmail"
                    value={profile.teacherEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Mobile No *</label>
                  <input
                    type="tel"
                    name="teacherPhone"
                    value={profile.teacherPhone}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="teacherGender"
                    value={profile.teacherGender}
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
                    name="teacherAge"
                    value={profile.teacherAge}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="teacherAddress"
                    value={profile.teacherAddress}
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

export default TeacherProfile;
