import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled, Typography, Button } from "@mui/material";
import Countdown from "react-countdown";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 20px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  padding: 10px 10px;
  display: flex;
`;

const Timer = styled(Box)`
  margin-left: 20px;
  display: flex;
  margin-top: 5px;
`;
const DealText = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 30px;
`;
const Image = styled("img")`
  width: auto;
  height: 150;
`;
const Slides = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title} </DealText>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              alt="timer"
              style={{ width: "20px", height: "20px" }}
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <Button
          variant="contained"
          style={{
            marginLeft: "auto",
            backgroundColor: "#2874f0",
            color: "white",
          }}
        >
          View All
        </Button>
      </Deal>
      <Divider style={{ margin: "10px 0" }} />
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => {
          return (
            <Link to ={`product/${product.id}`} style={{textDecoration:'none'}}>
            
            <Box
              textAlign="center"
              style={{
                padding: "25px 15px",
                width: "150px", // Set a fixed width for uniformity
                height: "250px", // Set a fixed height for uniformity
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Ensures even spacing
              }}
            >
              <img
                key={product.id} // Always add a unique key when rendering lists
                src={product.url}
                alt={product.name}
                style={{ width: "auto", height: 145 }} // Keeps the image responsive
              />
              <Typography>{product.title.shortTitle}</Typography>
              <Typography style={{ color: "green" }}>
                {product.discount}
              </Typography>
              <Typography style={{ color: "gray" }}>
                {product.tagline}
              </Typography>
            </Box>
            </Link>
          );
        })}
      </Carousel>
    </Component>
  );
};

export default Slides;
