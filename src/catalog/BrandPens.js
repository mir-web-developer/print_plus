import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";

export default function BrandPens() {
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
      "https://drive.google.com/uc?export=view&id=1YABq7YgtEzPE9bisEGeVWRiJuufubcQO",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Y68et-pjcvLs0RGl9xeLtQh0vU94qJ3i",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Y02wJXPWBhUtYUgbTS3ivgdKiUEyTq-p",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Xl3PLpk_EJYm-VeQs_Fl7tbiWsBGhfjR",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XhgnckhA4122fP6I60H2ROG-qIL2j88n",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Xf56Tgzoh7Jzsk-CgEKiW-aA1dCE9CEC",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1XbMmMkBlYGGWRCh1PS2TOuOjSjZt6a3o",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1X_KYX_gYwcIGWsdZI-yj9EhR37Nd3Qov",
    title: "Bed"
  }
];
