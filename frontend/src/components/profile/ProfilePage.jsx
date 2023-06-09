import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import "../../css/profilePage.css";
import PostCard from "../utils/PostCard";

const ProfilePage = ({ posts }) => {
  const validateFollowers = (followers) => {
    switch (followers) {
      default:
        return followers;
        break;
    }
  };
  return (
    <Container sx={{ marginTop: 8 }}>
      <Box className="profile-card">
        <Box className="user-details">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginBottom: "20px",
              width: 600,
              gap: 8,
            }}
          >
            <Avatar className="profile-image" src="/profile.jpeg" />
            <Button
              color="primary"
              variant="contained"
              sx={{ height: "40px", textTransform: "capitalize" }}
            >
              Edit Profile
            </Button>
          </Box>
          <Typography color={"secondary"}>johndoe</Typography>
          <Typography sx={{ width: 500, marginTop: "10px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            necessitatibus iste quas earum expedita? Consequatur nemo veniam
            excepturi ratione! Atque modi quae est suscipit voluptatem. Illum
            nobis dignissimos aliquid similique.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            marginTop: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 8,
            }}
          >
            <Box>
              <Typography variant="button">Followers</Typography>
              <Typography color={"primary"}>
                {validateFollowers(1234)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="button" c>
                Following
              </Typography>
              <Typography color={"primary"}>
                {validateFollowers(500)}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AvatarGroup max={3}>
              <Avatar src="/profile.jpeg" />
              <Avatar src="/profile.jpeg" />
              <Avatar src="/profile.jpeg" />
            </AvatarGroup>
            <Typography>started following you</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="post-container">
        <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
          Posts
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            // flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <PostCard width={600} height={550} />
          <PostCard width={600} height={550} />
          {posts.map((post) => (
            <PostCard width={600} height={550} post={post} />
          ))}
        </Container>
      </Box>
    </Container>
  );
};

export default ProfilePage;
