import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function OptionCard(props) {
  return (
    <Link to={`/${props.to}`}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia component="img" image={props.image} alt={props.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
