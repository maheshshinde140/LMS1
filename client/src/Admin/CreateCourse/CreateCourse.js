import React, { useEffect, useState } from 'react';
import axios from "axios"


// 


function CreateCourse() {

    const [teachers,setTeachers] = useState(null)

    const [courseData,setCourseData] =useState({
        courseName:"",
        courseCode:"",
        courseDescription:"",
        coursePrice:"",
        courseDuration:"",
        courseStartDate:null,
        courseEndDate:null,
        courseTeacher:"",
        courseThumbnail:null
    })

    useEffect(() => {
         axios.get('/api/admin/getTeachers').then(res => setTeachers(res.data.data))
    },[])



    const handleOnSubmit = async(e) => {
        e.preventDefault();
        courseData.courseStartDate = new Date(courseData.courseStartDate).toDateString();
        courseData.courseEndDate = new Date(courseData.courseEndDate).toDateString();
        const res = await axios.post('/api/course/createCourse',courseData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        console.log(res);
    }


    

    return (
        <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-6 bg-white border border-black-300 rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">Create New Course</h2>
                <p className="text-center mb-6">Kindly fill this form to create a new course</p>
                <form onSubmit={handleOnSubmit}  method="POST" enctype="multipart/form-data">
                    {/* Course Name */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseName">Course Name</label>
                        <select 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseName" onClick={(e) => setCourseData({...courseData,courseName:e.target.value})}
                        >
                            <option value="">Select Course</option>
                            <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                            <option value="Python with Django">Python with Django</option>
                            <option value="Full Stack Development">Full Stack Development</option>
                        </select>
                    </div>

                    {/* Course Code */}

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseCode">Course Code</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="courseCode"
                            placeholder="Enter course price"
                            onChange={(e) => setCourseData({...courseData,courseCode:e.target.value})}
                        />
                    </div>

                    {/* Course Description */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseDescription">Course Description</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="courseDescription"
                            placeholder="Enter course description"
                            rows="4"
                            onChange={(e) => setCourseData({...courseData,courseDescription:e.target.value})}
                        ></textarea>
                    </div>

                    {/* Course Price */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="coursePrice">Course Price</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="coursePrice"
                            placeholder="Enter course price"
                            onChange={(e) => setCourseData({...courseData,coursePrice:e.target.value})}
                        />
                    </div>

                    {/* Course Duration */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseDuration">Course Duration (minutes)</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            id="courseDuration"
                            placeholder="Enter course duration in minutes"
                            onChange={(e) => setCourseData({...courseData,courseDuration:e.target.value})}
                        />
                    </div>

                    {/* Course Start Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startDate">Course Start Date</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="startDate"
                            onChange={(e) => setCourseData({...courseData,courseStartDate:e.target.value})}
                        />
                    </div>

                    {/* Course End Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="endDate">Course End Date</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            id="endDate"
                            onChange={(e) => setCourseData({...courseData,courseEndDate:(e.target.value)})}
                        />
                    </div>

                    {/* Course Teacher */}
                    {teachers !== null  && <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseTeacher">Course Teacher</label>
                        <select 
                            className="w-full text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            id="courseTeacher"
                            onChange={(e) => setCourseData({...courseData,courseTeacher:e.target.value})}
                        >
                            <option value="">Select Teacher</option>
                            {teachers.length > 1 ? teachers.map((teacher) => {
                                return <option value={teacher.teacherEmail}>{teacher.teacherEmail.split("@")[0]}</option>
                            }):<option value={teachers[0].teacherEmail}>{teachers[0].teacherEmail.split("@")[0]}</option>}
                    
                        </select>
                    </div>}

                    {/* Course Thumbnail */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="courseThumbnail">Course Thumbnail</label>
                        <input type='file'   accept='image/png, image/jpeg' onChange={(e) => setCourseData({...courseData,courseThumbnail:e.target.files[0]})}/>
                    </div>

                    {/* Submit Button */}
                    <button 
                        className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateCourse;
