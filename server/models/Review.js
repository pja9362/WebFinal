import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
      required: true,
    },
    major: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    // comments: {
    //   type: Array,
    //   default: [],
    // },
  },
  { timestamps: true }
);

const Review= mongoose.model("Review", reviewSchema);

export default Review;
