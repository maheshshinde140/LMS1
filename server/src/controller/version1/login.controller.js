import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import bcrypt from "bcrypt";

import {Student, Teacher, Admin} from "../../models/export/export.model.js";

const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
    
}





const loginUser = asyncHandler(async (req, res) => {

    const { studentEmail, studentPassword } = req.body;

    console.log("req.body => ", req.body)
    

    if(!studentEmail || !studentPassword ) {
        return res
            .status(400)
            .json(new ApiError(400, "Email and Password are required"));
    }
    
    try {

        /// find this is student or not

        const student = await Student.findOne({ studentEmail }).select("+studentPassword");

        console.log(student)
        if(student) {

            const comparePassword = await bcrypt.compare(studentPassword, student.studentPassword);
            console.log(comparePassword)
            if(!comparePassword) {
                return res
                    .status(400)
                    .json(new ApiError(400, "Email or Password is incorrect in Students"));
            }

            const studentToken = student.generateStudentLogin();
            console.log("studentToken => ", studentToken);

            return res
                .status(200)
                .cookie("studentToken", studentToken, cookieOptions)
                // .redirect('/studentDashboard')
                .json(new ApiResponse(201, "Student login successfully", student));
        }



        /// find this teacher or not 

        const teacher = await Teacher.findOne({ teacherEmail: studentEmail }).select("+teacherPassword");

        if(teacher) {
          
            const comparePassword = await bcrypt.compare(studentPassword, teacher.teacherPassword);

            if(!comparePassword) {
                return res
                    .status(400)
                    .json(new ApiError(400, "Email or Password is incorrect to find in Teachers"));
            }

            const teacherToken = teacher.generateTeacherLogin();
            console.log("teacherToken => ", teacherToken);


            return res 
                .status(200)
                .cookie("teacherToken", teacherToken, cookieOptions)
                .json(new ApiResponse(200, "Teacher login successfully", teacher, teacherToken));
        }


        const admin = await Admin.findOne({ adminEmail : studentEmail }).select("+adminPassword");

        if(admin) {
            
            const comparePassword = await bcrypt.compare(studentPassword, admin.adminPassword);

            if(!comparePassword) {
                return res
                    .status(400)
                    .json(new ApiError(400, "Email or Password is incorrect to find in Admins"));
            }

            const adminToken = admin.generateAdminLogin();

            return res 
                .status(200)
                .cookie("adminToken", adminToken, cookieOptions)
                .json(new ApiResponse(200, "Admin login successfully", admin));
        }


        return res
            .json(new ApiResponse(404, "Email or Password is incorrect to find in All Servers"));
        
    } 
    catch (error) {
        console.log("error => ", error);
        return res
            .status(400)
            .json(new ApiError(400, error.message));
    }

})


export {
    loginUser
}