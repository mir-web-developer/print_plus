import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";

export default function Pillows() {
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
      "https://drive.google.com/uc?export=view&id=1ZqZJjyO7Vdt_Pkf-Ordw9jIEFo5V4Igt",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_ycqkxgwyLmQFXk59PRtcgc_19QPxcYv",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_rBp5bo2QEZ76NxC11uRvqXBJv1pqAx-",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_fAxEesGGzSFf6Aw9nJfnSU9pu6BwdHr",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_du7AiCeoXdnjblSp7BpRairtf6_ey6Z",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1__Mbt3at9AegOC2qcMLpl2LkbkDQ9gRJ",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_VrCIBlnQ6ls84Ultj3f3XC_iGxnYr9-",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_QqUmvynBA04p7b7YOxD9xqgtBoDn7JB",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_Q_chEfOHIeYIUBB0_AkGxzo2GrdFt_Y",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_PyCtBSVFw440CvyPreeKxfRNJuUBd54",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_JcMNiQ3J-BguAY1Z0v26lRUYRztvSR5",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_I_8qcXWNXm2SSYwKthiNBZzY4M5jWX7",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1_CHK_454xaktpkZX6qgAyQS4P_KOjQUZ",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZzVjVnYhjvyZaez9gvbLaT9lu9Ln713C",
    title: "Bed"
  },

  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZtTSTr5mUNgSwHzw3Q_KYJWOpCDu01GL",
    title: "Bed"
  }
];
