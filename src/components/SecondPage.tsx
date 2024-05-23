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
import { useState, useEffect } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Cards from "./Cards";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const emotions = [
  "Happy",
  "Sad",
  "Angry",
  "Hungry",
  "Mad",
  "Crazy",
  "Love",
  "Exhausted",
  "Tired",
  "Silly",
  "Funny",
];

function getStyles(emotion: string, select: string, theme: Theme) {
  return {
    fontWeight:
      select.indexOf(emotion) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function SecondPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");
  const [array, setArray] = useState<any>([]);
  const theme = useTheme();

  const fetchPhrases = (emotion: string) => {
    return fetch(`http://localhost:3000/api/v1/phrases?phrase=${emotion}`).then(
      (res) => res.json()
    );
  };

  useEffect(() => {
    if (selectedEmotion) {
      fetchPhrases(selectedEmotion)
        .then((data) => {
          console.log("data:", data.data);
          console.log("selected:", selectedEmotion);
          setArray(data.data);
        })
        .catch((error) => console.error("Error fetching phrases:", error));
    }
  }, [selectedEmotion]);

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedEmotion(e.target.value as string);
  };

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
        <Typography variant="h3">What word are you looking for?</Typography>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Select sx={{color: "#61dafb"}}
            displayEmpty
            value={selectedEmotion}
            onChange={handleChange}
            input={<OutlinedInput sx={{ "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#61dafb", // Change the color of the outline
              }}}/>}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {emotions.map((emotion) => (
              <MenuItem
                key={emotion}
                value={emotion}
                style={getStyles(emotion, selectedEmotion, theme)}
              >
                {emotion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          {array.length > 0 &&
            array.map((element: any) =>
              typeof element.attributes.term === "string" &&
              typeof element.attributes.explanation == "string" &&
              typeof element.attributes.example === "string" ? (
                <Cards 
     
                  term={element.attributes.term}
                  example={element.attributes.example}
                  explanation={element.attributes.explanation}
                />
              ) : null
            )}
        </div>
      </Container>
    </div>
  );
}

export default SecondPage;
