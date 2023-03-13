import NavBar from "scenes/navbar";
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <NavBar />
      {/* HOME PAGE */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* USER WIDGET */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        {/* POSTS */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {/* FRIENDS-LIST */}
        {isNonMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
};
export default HomePage;
