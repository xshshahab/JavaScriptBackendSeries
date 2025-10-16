export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// export const asyncHandler = (func) => {
//   return async (req, res, next) => {
//     try {
//       await func(req, res, next);
//     } catch (error) {
//       console.error("ERROR:", error);
//       res.status(error.statusCode || 500).json({
//         success: false,
//         message: error.message || "Internal Server Error",
//       });
//     }
//   };
// };
