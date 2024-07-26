import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';

const isStudentLoggedIn = (req, res, next) => {

    const studentToken = req.cookies.studentToken;

    if(!studentToken) {

        return res.status(401).json(new ApiError(401, 'Student not logged in'));
    }

    try {

        const decodedToken = jwt.verify(studentToken, process.env.JWT_SECRET);

        req.user = decodedToken;

        next();

    } 

    catch (error) {

        return res.status(401).json({message: 'Invalid token'});
    }
}

export default isStudentLoggedIn;