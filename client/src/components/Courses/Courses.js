import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"



function Courses() {

  const [courses, setCourses] = useState([{
    _id: "",
    courseName: "",
    courseDescription: "",   
    courseCode: "",

    courseDuration: "",
    adminEmail: "",
    coursePrice: 0,

    courseStartDate: "",
    courseTeacher: [],



  }]);


  const fetchCourses = async () => {

    try {
    
      const response = await axios.get(`api/course/showAllCourses`) 

      console.log(" get all courses response  => ",response);

      console.log("response.data => ",response.data);

      console.log("response.data.data => ",response.data.data);

      setCourses(response.data.data);
      
    } 
    
    catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {

    fetchCourses()

  },[])




  return (
    <div className="min-h-screen  p-10">

  
      <h1 className="text-white text-6xl ml-20 font-bold mb-10">
        Courses Offered.
      </h1>


     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20">

        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-black text-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-70 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold mt-4 mb-2">{course.courseName}</h2>
              <p className="text-gray-400 mb-5">{course.courseDescription}</p>
              <hr />
              <button className="text-cyan-400 mt-7 font-semibold text-xl ">
                {course.courseTeacher.map((teacher) => {
                  return <div key={teacher.id}>{teacher}</div>
                })}
              </button>

              <div className="mt-7 flex justify-between mb-2  text-gray-300  text-xl font-bold">
                <div> By {course.adminEmail}</div>
                <div> {course.coursePrice}</div>
              </div>
            </div>
           
            <Link to={`/overview/${course.courseCode}`}>

              <div className="text-center text-black bg-cyan-400  font-bold p-2 ml-4 mr-4 mb-2  text-2xl  rounded">
                <button>Enrolled in Course</button>
              </div>

            </Link>

          </div>
        ))}
        
      </div>
 
    </div>
  );
}

export default Courses;
