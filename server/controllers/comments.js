
import Comment from "../models/Comment.js";
/* CREATE */
export const createComment = async (req, res) => {
  try {
    const { userId, postId, commentContent, commentWriter } = req.body;
    const newComment= new Comment({
      userId,
      postId,
      commentContent,
      commentWriter
    });
    await newComment.save();

    const comment = await Comment.find().sort({createdAt: -1});
    res.status(201).json(comment);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getComments = async (req, res) => {
    try {
        const comment = await Comment.find({ postId: req.body.postId }).sort({createdAt: -1});
        res.status(201).json({ success: true, comments, commentCounts: comments.length });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }

};



