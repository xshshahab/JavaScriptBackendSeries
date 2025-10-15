import fs from "fs/promises";
import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_NAME } from "./constants.js";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;

  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded to Cloudinary:", result.secure_url);

    // Clean up local file after successful upload
    await fs.unlink(localFilePath);

    return result;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);

    // Clean up file if upload fails
    try {
      await fs.unlink(localFilePath);
    } catch (fsError) {
      console.error("Failed to delete local file:", fsError);
    }

    return null;
  }
};
