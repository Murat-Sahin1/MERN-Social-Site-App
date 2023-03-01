import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const primaryMain = theme.palette.primary.main;
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
        height="100%"
        borderColor={primaryLight}
        border="Highlight"
      >
        <Box
          justifyContent={"center"}
          backgroundColor={alt}
          width={isNonMobileScreens ? "50%" : "100%"}
          height="49rem"
          p="1rem 6%"
          marginTop={isNonMobileScreens ? "2rem" : "2rem"}
          marginLeft={isNonMobileScreens ? "6rem" : "4rem"}
          mb="2rem"
          mr={isNonMobileScreens ? "" : "4rem"}
          textAlign="center"
          borderRadius={"1.5rem"}
        >
          <Typography fontWeight={"500"} variant="h5" sx={{ mb: "1.rem" }}>
            Welcome to Socialsite, the new kind of social media.
          </Typography>
          <Form />
        </Box>
        {isNonMobileScreens && (
          <Box
            backgroundColor={"red"}
            borderRadius={"1.5rem"}
            height={isNonMobileScreens ? "30rem" : ""}
            width={isNonMobileScreens ? "20%" : ""}
            margin={isNonMobileScreens ? "2rem" : ""}
          ></Box>
        )}
      </Box>
    </Box>
  );
};
export default LoginPage;
