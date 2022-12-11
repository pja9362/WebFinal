import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import DetailWidget from "scenes/widgets/DetailWidget";
import { useSelector } from "react-redux";
import CommentWidget from "scenes/widgets/CommentWidget";

const DetailPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const {  picturePath } = useSelector((state) => state.user);

    return (
      <Box>
        <Navbar />
        <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="0.5rem"
          justifyContent="center"
        >
          <Box
   
            flexBasis={isNonMobileScreens ? "80%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <DetailWidget />
            {/* <PostWidget postId={postId} /> */}
            <CommentWidget picturePath={picturePath} />
          </Box>
          
        </Box>
      </Box>
    );
};

export default DetailPage;
