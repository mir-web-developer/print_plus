// import * as React from "react";
// import Box from "@mui/material/Box";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

// export default function AutoPillows() {
//   return (
//     <Box sx={{ marginTop: "-35px", overflowY: "scroll", marginLeft: "15px" }}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// }

// const itemData = [
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1WyrDEWxAo8ZqelOXbqgE0MyndD6YJE0u",
//     title: "Bed"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1WvuEq_0Vuamz_Jb6ZQA3u3R__1bXHLVC",
//     title: "Books"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1WsUSo658e5eRk0vNXR0a0nHj3shi0CKh",
//     title: "Sink"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1WjcIniUob6M3N_4Oz8awzp22Nrx3S6uF",
//     title: "Kitchen"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1Wi4qFwPvIVvtyr_6QY0HNhtJ2uDkN9y0",
//     title: "Blinds"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1WfrIriT8llsRnuvKG6C8Tz4NTJTE4E_Y",
//     title: "Chairs"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1WetbPHtAg1jgdLjXZxiBYg8yLYF8KY58",
//     title: "Laptop"
//   },
//   {
//     img:
//       "https://drive.google.com/uc?export=view&id=1Wddmp599PjdKEcBqfenyh6WDvoqBqjIO",
//     title: "Doors"
//   }
// ];

import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Подключаем стили библиотеки

const itemData = [
  {
    img:
      "https://drive.google.com/uc?export=view&id=1WyrDEWxAo8ZqelOXbqgE0MyndD6YJE0u",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1WvuEq_0Vuamz_Jb6ZQA3u3R__1bXHLVC",
    title: "Books"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1WsUSo658e5eRk0vNXR0a0nHj3shi0CKh",
    title: "Sink"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1WjcIniUob6M3N_4Oz8awzp22Nrx3S6uF",
    title: "Kitchen"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Wi4qFwPvIVvtyr_6QY0HNhtJ2uDkN9y0",
    title: "Blinds"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1WfrIriT8llsRnuvKG6C8Tz4NTJTE4E_Y",
    title: "Chairs"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1WetbPHtAg1jgdLjXZxiBYg8yLYF8KY58",
    title: "Laptop"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Wddmp599PjdKEcBqfenyh6WDvoqBqjIO",
    title: "Doors"
  }
];

export default function AutoPillows() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ cursor: "pointer" }}
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
