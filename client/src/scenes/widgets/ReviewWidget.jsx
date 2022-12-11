import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReview } from "state";


const ReviewWidget = ({
  postId,
  postUserId,
  name,
  description,
  major,
  picturePath,
  userPicturePath,
  likes,
  // comments,
}) => {
;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;


  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/reviews/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedReview = await response.json();
    dispatch(setReview({ review: updatedReview }));
  };

  return (
    <WidgetWrapper width="60%" margin="0 20%;" mt="2.5rem">

      <FlexBetween gap="1rem" justifyContent={"center"} >
        <FlexBetween>
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined fontSize = "large" sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlined  fontSize = "large" />
              )}
            </IconButton>
            <Typography fontSize= "20px">{likeCount}</Typography>
          </FlexBetween>
          <FlexBetween padding={"0px 15px"}>
          <Typography color={"black"} margin="0 40px" fontSize= "25px" fontWeight="800">
            {description}
          </Typography>
          <RestaurantIcon fontSize = "large" sx={{ color: "#FFCD4A"}}></RestaurantIcon>
          </FlexBetween>
        </FlexBetween>
        {picturePath && (
          <img
            width="50%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        )}
      </FlexBetween>


    </WidgetWrapper>
  );
};

export default ReviewWidget;

// import {
//     FavoriteBorderOutlined,
//     FavoriteOutlined,
//   } from "@mui/icons-material";
//   import RestaurantIcon from '@mui/icons-material/Restaurant';
//   import { IconButton, Typography, useTheme } from "@mui/material";
//   import FlexBetween from "components/FlexBetween";
//   import WidgetWrapper from "components/WidgetWrapper";
//   import { useDispatch, useSelector } from "react-redux";
//   import { setReview } from "state";
//   import { useNavigate } from "react-router-dom";
  
//   const ReviewWidget = ({
//     postId,
//     postUserId,
//     name,
//     description,
//     major,
//     picturePath,
//     userPicturePath,
//     likes,
//   }) => {
//     const dispatch = useDispatch();
//     const token = useSelector((state) => state.token);
//     const loggedInUserId = useSelector((state) => state.user._id);
//     const isLiked = Boolean(likes[loggedInUserId]);
//     const likeCount = Object.keys(likes).length;
  
//     const { palette } = useTheme();
//     const main = palette.neutral.main;
//     const primary = palette.primary.main;
//     const navigate = useNavigate();
  
//     const patchLike = async () => {
//       const response = await fetch(`http://localhost:3001/reviews/${postId}/like`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId: loggedInUserId }),
//       });
//       const updatedReview = await response.json();
//       dispatch(setReview({ review: updatedReview }));
//     };
  
//     return (
//       <WidgetWrapper width="60%" margin="0 20%;" mt="2.5rem">

//         <FlexBetween gap="1rem" justifyContent={"center"} >
//           <FlexBetween>
//             <FlexBetween gap="0.3rem">
//               <IconButton onClick={patchLike}>
//                 {isLiked ? (
//                   <FavoriteOutlined fontSize = "large" sx={{ color: "red" }} />
//                 ) : (
//                   <FavoriteBorderOutlined  fontSize = "large" />
//                 )}
//               </IconButton>
//               <Typography fontSize= "20px">{likeCount}</Typography>
//             </FlexBetween>
//             <FlexBetween padding={"0px 15px"}>
//             <Typography margin="0 40px" fontSize= "25px" fontWeight="800">
//               {description}
//             </Typography>
//             <RestaurantIcon fontSize = "large" sx={{ color: "#FFCD4A"}}></RestaurantIcon>
//             </FlexBetween>
//           </FlexBetween>
//           {picturePath && (
//             <img
//               width="50%"
//               height="auto"
//               alt="post"
//               style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
//               src={`http://localhost:3001/assets/${picturePath}`}
//             />
//           )}
//         </FlexBetween>


//       </WidgetWrapper>
//     );
//   };
  
//   export default ReviewWidget;
  