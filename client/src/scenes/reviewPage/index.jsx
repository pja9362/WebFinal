import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyReviewWidget from "scenes/widgets/MyReviewWidget";
import ReviewsWidget from "scenes/widgets/ReviewsWidget";
// import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

const ReviewPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box
          flexBasis={isNonMobileScreens ? "100%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
        <MyReviewWidget picturePath={picturePath} />
         <ReviewsWidget  userId={_id} />
        </Box>
      </Box>
    </Box>
    
  );
};

export default ReviewPage;
