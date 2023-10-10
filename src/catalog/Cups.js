import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
// import { CardMedia } from "material-ui";
// import ReactPlayer from "react-player";

export default function Cups() {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setPhotoIndex(0);
    setIsOpen(false);
  };
  return (
    <Box sx={{ marginTop: "-35px", overflowY: "scroll", marginLeft: "15px" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} onClick={() => openLightbox(index)}>
            <img
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        {/* {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {/* <ReactPlayer
              url={`${item.vid}`}
              playing
              style={{margin:"0", padding:"0", }}
            /> 
            
          </ImageListItem>
        ))} */}
      </ImageList>
      {isOpen && (
        <Lightbox
          mainSrc={itemData[photoIndex].img}
          onCloseRequest={closeLightbox}
          style={{ marginTop: 10 }}
        />
      )}
    </Box>
  );
}

const itemData = [
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZcC1SBeW4XO_XZHAPXTDrA8LX4AWg-K6",
    title: "Bed"
  },
  // {
  //   vid:
  //     "https://drive.google.com/uc?export=view&id=1ZZDXoPTwqoVJh5Xs9fVhy6XLV_Q0cweu",
  //   title: "Bed"
  // }
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Zbk3eLMktunkjspOgcCqozbZbMbSLDQO",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZSYlAdU7JnOPZ39vp_C81RPTF4ajJNJP",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZJ1Nyf2DF4GRuYmcGnGBtwMoXSvwBPRC",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZGlfnrXaCGfyYovV6f17H3q7NoKJif5o",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZDZqIlTnhU2GM9GyeUcVqTmhYWifwg0h",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Ywx5qSHloSB7LfxyLjdlGd6bd9UZFcRv",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1YwoOCRz0nfXg14Kcm5yRDBNJhwGdZxbR",
    title: "Bed"
  }
];
