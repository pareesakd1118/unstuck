import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Stack,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="main-styling">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h1">Can't think of what to say?</Typography>
        <Button
          variant="outlined"
          sx={{
            mt: "10px",
            color: "#61dafb",
            padding: "12px 24px", // Increase padding
            fontSize: "22px", 
            width: "400px",
            height: "60px",
          }}
          onClick={() => navigate("/unstuck")}
        >
          Click here to get UNSTUCK
        </Button>
      </Container>
    </div>
  );
}

export default LandingPage;
