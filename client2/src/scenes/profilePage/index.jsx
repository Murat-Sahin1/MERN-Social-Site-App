import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect } from "react";
import NavBar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import FriendsListWidget from "scenes/widgets/FriendsListWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }
  
  return (
    <Box>
      <NavBar />
      {/* PROFILE PAGE */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        {/* USER INFO PART */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendsListWidget userId={userId} />
        </Box>
        {/* POSTS PART */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};
export default ProfilePage;
