import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddToCart from "./AddToCart";
import AddToCartFood from "./AddToCartFood";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ItemCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ width: 300 }} elevation={24}>
        <CardMedia
          component="img"
          height={200}
          image={props.image}
          alt={props.title}
        />
        <CardContent sx={{ height: 100 }}>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {props.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.category === "Pizza" ? (
            <AddToCartFood data={props.data} title={props.title} />
          ) : (
            <AddToCart data={props.data} title={props.title} />
          )}
        </Box>
      </Modal>
    </>
  );
}
