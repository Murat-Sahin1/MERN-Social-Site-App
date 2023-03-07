import NavBar from "scenes/navbar";
import { Box } from "@mui/system";
import UserWidget from "scenes/widgets/UserWidget";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display = {isNonMobileScreens ? "flex": "block"}
      >

      </Box>
    </Box>
  );
};
export default HomePage;
