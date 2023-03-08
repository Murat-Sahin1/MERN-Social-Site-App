import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserImage = ({ image, userId, size = "60px" }) => {
  const navigate = useNavigate();

  return (
    <Box
      width={size}
      height={size}
      sx={{ "&:hover": { cursor: "pointer" } }}
      onClick={() => navigate(`/profile/${userId}`)}
    >
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
