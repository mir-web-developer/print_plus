// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import { Link } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// function srcset(
//   image: string,
//   width: number,
//   height: number,
//   rows = 1,
//   cols = 1
// ) {
//   return {
//     src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${width * cols}&h=${
//       height * rows
//     }&fit=crop&auto=format&dpr=2 2x`
//   };
// }

// export default function Catalog() {
//   return (
//     <ImageList
//       sx={{
//         height: "200",
//         width: "300",
//         // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
//         transform: "translateZ(0)",
//         marginTop: "-30px"
//       }}
//       rowHeight={600}
//       gap={1}
//     >
//       {itemData.map((item) => {
//         const cols = item.featured ? 2 : 1;
//         const rows = item.featured ? 2 : 1;

//         return (
//           <ImageListItem key={item.img} cols={cols} rows={rows}>
//             <img
//               {...srcset(item.img, 250, 200, rows, cols)}
//               alt={item.title}
//               loading="lazy"
//             />

//             <ImageListItemBar
//               sx={{
//                 background:
//                   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
//                   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
//               }}
//               title={item.title}
//               position="top"
//               actionIcon={
//                 <IconButton
//                   component={Link}
//                   to={`/${item.title}`}
//                   sx={{ color: "white" }}
//                   aria-label={`star ${item.title}`}
//                 >
//                   <ArrowForwardIcon />
//                 </IconButton>
//               }
//               actionPosition="right"
//             />
//           </ImageListItem>
//         );
//       })}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "tshirt",
//     author: "@bkristastucchio",
//     featured: true
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     featured: true
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs"
//   }
// ];

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Catalog() {
  return (
    <ImageList sx={{ width: "100", height: "100", marginTop: "-30px" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.author}
            actionIcon={
              <IconButton
                component={Link}
                to={`/${item.title}`}
                // sx={{ color: "white" }}
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <ArrowForwardIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:
      "https://drive.google.com/uc?export=view&id=1VWSBt2R7pZajVyAwsAgZCFim-mWFnQIC",
    title: "tshirt",
    author: "Футболки",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1Vbgl7Nv4hPIP8ZXc5npw5ozR09zzgyOj",
    title: "cups",
    author: "Кружки",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1VGa8DcLePC0j2pDNZCTw-MA-hZLYTYUX",
    title: "pillows",
    author: "Подушки",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1V0hUZO5dmOvtIOAbLH4wjCp-U0JHwzPG",
    title: "watch",
    author: "Часы",

    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1V1jM0KRKqSF0hMG7eiRNb30niQ-0xqSw",
    title: "plates",
    author: "Тарелки",

    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1V80Q5LooK7OIcHVlX2FDpILq3zyuWQkc",
    title: "autopillows",
    author: "Автоподушки",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1V7dz5wCmqGnPe_4_fdPD2V_I63ex22EQ",
    title: "boxes",
    author: "Коробки 'набор'",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1UfxrE4zNA9RAb170O3XzjQ4rv9Y2U0ND",
    title: "brandpens",
    author: "Брендовые ручки, блокноты",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1V3421tk3emnYyxt_Bub3mkOFzPbwUQuc",
    title: "frames",
    author: "Рамки",
    rows: 2,

    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1VGPIn5L5cusFZRoC8w3ZgIEDTw2iEoh_",
    title: "chocolates",
    author: "Шоколады",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1VxiASPF2PqDDDsOQK5FhSmxPBudzqQeV",
    title: "cars",
    author: "Оформление машин",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1U_l5neH5tMvFtKCZTp5yUqWIyVLh_H4M",
    title: "balls",
    author: "Шарики 'Гелевые, Воздушные'",

    rows: 2,
    cols: 2,
    featured: true
  }
];
