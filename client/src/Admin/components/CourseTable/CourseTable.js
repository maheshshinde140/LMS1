import React, { useEffect, useState } from 'react';
import OrdersTable from '../Orders/OrdersTable';
import { Link } from 'react-router-dom';
import axios from 'axios';
//Course Sidebar Data panel

const inputClasses = "border border-input rounded p-1";
const buttonClasses = "p-2 border border-border rounded";

const primaryClasses = "bg-primary text-primary-foreground";

// Define the CourseCard component


const CourseTable = () => {

  const [showOverview, setShowOverview] = useState(false);
  const [getCourse,setgetCourse] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
  axios.get('/api/course/getCourses').then((res) => {
      setgetCourse(res.data.data);
      // setFilteredProducts(res.data.data);
    })
  },[])
  
  const CourseCard = ({ product }) => (
    <div className="">
      <img 
        src={`${product.courseThumbnail.private_url}`} 
        alt="Course" 
        className="w-full mb-4 object-fill h-40" 
      />
      <h3 className="text-xl font-semibold mb-2">{product.courseName}</h3>
      <p><strong>Course Code:</strong> {product.courseCode}</p>
      <p><strong>Price:</strong> {product.coursePrice}</p>
      <p><strong>Duration:</strong> {`${(Number(product.courseDuration)/60).toFixed()}  Hrs` }</p>
      <div className="flex justify-between w-full"> 
        <p className=''><strong>Start Date:</strong> {(product.courseStartDate).slice(0,7)}</p>
        <p><strong>End Date:</strong> {(product.courseEndDate).slice(0,7)  }</p>
      </div>
      <p><strong>Teacher:</strong> {product.courseTeacher.map((data) => data)}</p>
      <section className='flex justify-around gap-12 items-center'>


        <button
        onClick={() => setShowOverview(true)}  
        className="border-1 shadow-md rounded-lg border-gray-300 p-2 text-xl text-gray-600 hover:bg-gray-100 bg-blue-300 hover:text-green-500 transition-colors duration-200">View Course
        </button>

        <Link to="/admin/viewLectures">

          <button
            
            className="border-1 shadow-md rounded-lg border-gray-300 p-2 text-xl text-gray-600 hover:bg-gray-100 bg-blue-300 hover:text-green-500 transition-colors duration-200">View Lectures
          </button>
        
        </Link>
      </section>


    </div>
  );










  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredProducts(getCourse.filter(product =>
      product.course.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  };

  return (
    <div className="my-8 mx-4 h-screen">
      <div className="p-4 bg-white rounded-lg">
        {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <input
              type="text"
              className={inputClasses}
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className={buttonClasses + " " + primaryClasses}>Add Course</button>
          </div>
        </div> */}
        {/* <div className="flex flex-wrap">
          {filteredProducts.map(product => (
            <CourseCard 
              key={getCourse.id} 
              product={getCourse} 
            />
          ))}
        </div> */}
        <div className="flex flex-wrap">
          {getCourse.map(product => (
            <CourseCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>

        { 
          showOverview && 
            
            <div className="mt-4 p-4 border border-gray-200 rounded shadow-md shadow-gray-600 bg-gray-50">
            <h3 className="text-lg text-center font-semibold">Course Overview</h3>

            <header className="flex flex-col md:flex-row justify-around items-center md:justify-around lg:justify-around xl:items-start">

              <main className="flex rounded p-4 flex-col justify-between items-center shadow-xl shadow-gray-600">

                <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Course" className="w-full mb-4 h-40 object-cover" />

                <h3 className="text-xl font-semibold mb-2">Course Name</h3>
                <p><strong>Course Code:</strong>Course Code</p>

                <p><strong>Price:</strong>Course Price</p>
                <p><strong>Duration:</strong>Course Duration</p>
                
                  <p><strong>Start Date:</strong>Course Start Date</p>
                  <p><strong>End Date:</strong>Course End Date</p>

              </main>



              {/***  Course teachers  ***/}
              <main className="flex rounded p-4 flex-col py-12 justify-between items-center shadow-xl shadow-gray-600">

                <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Course" className="w-full mb-4 h-40 object-cover" />
                <h3 className="text-lg text-center font-semibold">Course Teachers</h3>
            
                <p>Mr. Arun Shukla</p>
                <p>Mr. Tara Sighole</p>
                <p>Mr. Anup Kasol</p>
      
              </main>
      
            </header>

            <OrdersTable />
            

            </div>
        }
      </div>
    </div>
  );
};



export default CourseTable;
