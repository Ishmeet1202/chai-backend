import  {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import { loadEnvFile } from "process";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // FILE HAS BEEN UPLOADED SUCCESSFUL
        // console.log("File is uploaded on the cloudinary ",response.url);
        // console.log(response);
        
        fs.unlinkSync(localFilePath)
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // REMOVE THE LOCAlLY SAVED TEMPORARY FILE AS THE UPLOAD OPERATION GOT FAILED
        return null;
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result
    } catch (error) {
        console.error("Error deleting old avatar from Cloudinary:", error);
    }
};

export {uploadOnCloudinary, deleteFromCloudinary}