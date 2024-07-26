import cloudinary from 'cloudinary';


const uploadOnCloudinary = (filePath) => {

    const response = cloudinary.uploader.upload(filePath,{

        path: '/uploads/',
        resource_type: 'auto',
        upload_preset: 'default'
    });

    console.log(response);

    return response;


}

export default uploadOnCloudinary;