import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "components/FlexBetween";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

const DetailWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);
    
    const { palette } = useTheme();
    const main = palette.neutral.main;

    const postUserId = localStorage.getItem('postUserId');
    const postId = localStorage.getItem('postId');
    return (
      // <WidgetWrapper m="2rem 0">
        <>
        {posts.map(
          ({
            _id,
            userId,
            fullName,
            nickName,
            description,
            major,
            picturePath,
            userPicturePath,
            likes,
            // comments,
          }) => 
          (_id === postId)?
          (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${nickName}`}
              description={description}
              major={major}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              // comments={comments}
            />
          )
          : null
        )}
        </>

     
      
    );
  };
export default DetailWidget;
