import express from 'express';
import { createPaymentForCourse, verifyPaymentForCourse } from '../controller/version1/payment.controller.js';
import isStudentLoggedIn from '../middlewares/student.auth.js';

const paymentRouter = express.Router();



paymentRouter.route('/createPaymentForCourse').post(
    createPaymentForCourse
)


paymentRouter.route(`/verifyPaymentForCourse/:courseCode`).post(
    isStudentLoggedIn,
    verifyPaymentForCourse
)


export default paymentRouter;