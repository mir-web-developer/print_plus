import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";

export default function Chocolates() {
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
      "https://drive.google.com/uc?export=view&id=1YlBOdRi4X1U4N628KMZK3DyWYuNJMd-6",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Ye6xVaXrUd5Y8sWCb7bI2fXzq6mYcCei",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1YTdP0CnLaaSHIywxK7W8gC7jqiroXEiL",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1YTVE-Ejgbp3LYFK740CQ3btQUKnUzRX2",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1YJPaMEKTXr63_860QEhVn-6LRTvOiyI6",
    title: "Bed"
  }
];
