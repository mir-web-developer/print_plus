import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";

export default function Boxes() {
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
      "https://drive.google.com/uc?export=view&id=1XXnyzpF3nbz3GBdli2pRWUfw8u43Jeky",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XWl_d6p_DAe1HBT-usUvZyP9nBB1JkW7",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XPyhcemFGMpZnjY0oCuKpnH2m3wyEYqa",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XO1DFg3od8htblxZxe80UYdfjs1giA7x",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XI66yfD-Pl14dKdLZ2P6Cvdo1JJZYKoH",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XDd9e_oLr6Feov8kyeX3oy0grC4kO2Mg",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XBGtHMcr2nS46XW6k2VLGLt_gKjfuh8L",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1X9Rbzm7nLWoDVHphhrJKpSqi4IMR3yYV",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1X7ChlFbCKvY906SGPsaVD2_8M7lfshuX",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1X78YVE3u69R5BK-FqOg0q4UljDUCpkvJ",
    title: "Bed"
  }
];
