import Review from "../models/Review.js";
import User from "../models/User.js";

/* CREATE */
export const createReview = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newReview = new Review({
        userId,
        fullName: user.fullName,
        nickName: user.nickName,
        // mbti: user.mbti,
        major: user.major,
        description,
        userPicturePath: user.picturePath,
        picturePath,
        likes: {},
        // comments: [],
    });
    await newReview.save();

    const review = await Review.find().sort({createdAt: -1});
    res.status(201).json(review);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedReviews = async (req, res) => {
  try {
    const review = await Review.find().sort({createdAt: -1});
    res.status(200).json(review);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserReviews = async (req, res) => {
  try {
    const { userId } = req.params;
    const review = await Review.find({ userId }).sort({createdAt: -1});
    res.status(200).json(review);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



/* UPDATE */
export const likeReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const review = await Review.findById(id);
    const isLiked = review.likes.get(userId);

    if (isLiked) {
        review.likes.delete(userId);
    } else {
        review.likes.set(userId, true);
    }

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { likes: review.likes },
      { new: true }
    );

    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
