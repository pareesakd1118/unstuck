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

interface Props {
    term: string,
    explanation: string,
    example: string 
}

function Cards({ term, explanation, example}: Props) {

    return (
        <Card variant="outlined" sx={{padding: 2, my: "20px", maxWidth: 500, backgroundColor: "#282c34", // Set background color
        border: "1px solid #61dafb"}}>
            <Typography variant="h5">{term}</Typography>
            <Typography sx={{my: "5px"}}variant="body1"><strong>Meaning:</strong> {explanation}</Typography>
            <Typography variant="body2"><strong>Example:</strong> {example}</Typography>
        </Card>

    )
}

export default Cards