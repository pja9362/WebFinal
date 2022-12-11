import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    commentContent: {
        type: String
    },
    commentWriter: {
        type: String
    }
},{ timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment ;

