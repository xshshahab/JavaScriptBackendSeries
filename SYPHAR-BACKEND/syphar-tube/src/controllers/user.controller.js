import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/io/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/io/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body;

  // Validate required text fields
  if (
    [fullName, username, email, password].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  // Check for existing user
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // Log uploaded files for debugging
  console.log("Uploaded files:", req.files);

  // Extract uploaded file paths safely
  const avatarFile = req.files?.avatar?.[0];
  const coverImageFile = req.files?.coverImage?.[0];

  if (!avatarFile) {
    throw new ApiError(400, "Avatar image is required.");
  }

  const avatarUpload = await uploadOnCloudinary(avatarFile.path);
  const coverImageUpload = coverImageFile
    ? await uploadOnCloudinary(coverImageFile.path)
    : null;

  if (!avatarUpload || !avatarUpload.url) {
    throw new ApiError(400, "Failed to upload avatar image.");
  }

  // Create user
  const user = await User.create({
    username: username.toLowerCase(),
    fullName,
    email,
    password,
    avatar: avatarUpload.url,
    coverImage: coverImageUpload?.url || "",
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully."));
});
