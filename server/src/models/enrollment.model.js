import mongoose, { Schema }  from "mongoose";



const enrollmentSchema = new Schema({


    studentEmail: {
        type: String
    },

    studentCourses: [{
        type: String
    }]

},{timestamps: true})


export const Enrollment = new mongoose.model("Enrollment", enrollmentSchema);