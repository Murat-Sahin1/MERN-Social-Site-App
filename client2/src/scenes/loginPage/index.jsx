import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const background = theme.palette.background.default;
  return (
    <Box>
      <Box
        width="100%"
        padding="1% 6%"
        display={"flex"}
        justifyContent="center"
        textAlign={"center"}
        backgroundColor={alt}
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Socialsite
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent="center"
        backgroundColor={background}
      >
        <Box
          justifyContent={"center"}
          backgroundColor={alt}
          width={isNonMobileScreens ? "50%" : "100%"}
          height="49rem"
          margin={isNonMobileScreens ? "2rem" : "2rem 4rem"}
          marginLeft={isNonMobileScreens ? "6rem" : "4rem"}
          
          borderRadius={"1.5rem"}
        ></Box>
        {isNonMobileScreens && (<Box
          backgroundColor={"red"}
          borderRadius={"1.5rem"}
          height={isNonMobileScreens ? "30rem" : ""}
          width={isNonMobileScreens ? "20%" : ""}
          margin={isNonMobileScreens ? "2rem" : ""}
        ></Box>)}
      </Box>
    </Box>
  );
};
export default LoginPage;
