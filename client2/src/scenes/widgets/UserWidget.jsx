import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  const primaryLight = palette.primary.light;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST-ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} userId={userId} />
          <Box>
            <Typography
              variant="h4"
              onClick={() => navigate(`/profile/${userId}`)}
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined
          sx={{ "&:hover": { cursor: "pointer", color: palette.primary.main } }}
        />
      </FlexBetween>

      <Divider />
      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween gap="0.5rem">
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography fontWeight={300} color={dark}>
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween gap="1rem 0" mt="0.5rem">
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography fontWeight={300} color={dark}>
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>
      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography
          variant="h5"
          fontSize="1rem"
          color={main}
          fontWeight="500"
          mb="1rem"
        >
          Social Profiles
        </Typography>
        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <Twitter fontSize="large" sx={{ color: { main } }} />
            <Box>
              <Typography color={main} fontSize="1rem" fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>SocialNetwork</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined
            sx={{
              "&:hover": { cursor: "pointer", color: palette.primary.main },
            }}
          />
        </FlexBetween>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <LinkedIn fontSize="large" sx={{ color: { main } }} />
            <Box>
              <Typography color={main} fontSize="1rem" fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined
            sx={{
              "&:hover": { cursor: "pointer", color: palette.primary.main },
            }}
          />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
