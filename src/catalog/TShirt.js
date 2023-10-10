import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";

export default function TShirt() {
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
      "https://drive.google.com/uc?export=view&id=1eT1GWm3sOAKjpkXYgqa2l7dagch_aRAq",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1eMPH0_hV4JPfCnURzPdlRW-7EAAnn3iA",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1e-IachychBO41dQ6WBXXVfUll7bQi0Qt",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bVhv5kUsy_OAFkY6rs2mDhqMkXI4AjSu",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1b5pzj6_FH9HnDQQOgxRur9XtFtUsr5Gk",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1er-QuUoJ8ilG9523UBomkGsqQUOc_nnJ",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ejxhvz5af-dtElvNJTDLT4X1mGa5lPJg",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ecOEqPp4pmY2DrKpIWqyCKgu3MBJ4KiX",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1eXnP5zsgEHPIUlbck7AWdNL9bax7ssV4",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1eL0ta6c90LSkbK8Khz6ZnsosOs06TQZN",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1eF02b-pZswyhckIqre01fJgf0CdVq2xt",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1e2ipF7ROGq_cEvhhP2uRHTnqBd6-TkD-",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1dswUIM6B5hCrGbu6GDYVjf03YWxogpRf",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1dmwFiF5_4bjSvl2vdCPgo121z6MOk6bT",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1dONW9D5jteob6_GwWqXe3Mo3ZPlYQK1D",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1d8U2GIZ2N8UnAZTLfgC8h7o6dEofl1OB",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1d60kfmSvrWinf34rKQ6OoqlsIrBUlxAe",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1d2icV6AJsQBNZozPbiBI1T1y2DjAdl6Q",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1cjbNJaPtFTafF4hPOw3T2fPm7-tOwHjg",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1cYBTG51GbA_OBm9ykEZOS7TkI1XCMNJV",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1cXpX1wf2DBFDpIFo31ksueiI9TK45bZs",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1cOBKyT_9hjrtaSzmHq2zuqauYbSE9TJQ",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1cH61bxfR4ItUwk2dIUvwJM0Y7K_nSMaT",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1c8m2m3vuYf2cNE5UfjvN7CtxfIXRXMQ_",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1btWhskrex3osKizWUP9tMs5e2flVQLzT",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1c5bt5eNBRb77_gUaoH5AE-eojsKqMkk-",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bpEaDqq-JY8jX9EB8U3pGUzxlOint7eN",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bvKRRfNfImdSAhqiNKlDndEiYy6d2xqY",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1boX7VU6EH9CN2bvqk3PgAsB1u-x4lbWy",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bb8jw_RONGUh-LKmda454k1gIndviRIj",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1b_h2eJZhxjOj4fpaocZ_L8zsc4bXDFZf",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bVKN6FDgX7bKkH-1w1x8iw89p6lWjANj",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bHI4hpyzWRDEhWuE5EDCSoh0nz1S0ZBB",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bH62ylh2vmxtljDaHDHPvUMBaLkucKAM",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bE5TjZfNXjo_WmgI8Q-AtOtYhtV0Gcty",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bDGtTPpVO84u2mz2ZPe0EiUaaRUY_zPP",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1bCTqJAAVq4JqCyANT9lZ57RvnPEiBhcm",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1b9vhOScPUIeiJwJc-rIaxWom9VPfjAZD",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1alYp4wyD4uutCTQCaXu_k1prXecno7PT",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1akLOwUNzbGsMGJ0gCTOQakKqGOPlrYh5",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ahZyVid9OKYJAySIrProI5FfTrfbS_2w",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1afF7_aYmOc0c7eZkEQx2To148l6f8Pc-",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aUyEelXa9sxkibr20-GWOCkcb2ypLjAH",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aTnVyrYlanigrUTVVJDbDUKWJTx6tTPs",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aPI1_TbuXxHCChz28KGrE8Tvk7B6ByUI",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aOjXjvf_Kkxq33n62w4-uyy41Xb6klea",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aGxDmouDMVLqcumuXZfywGp7JGTfKhpL",
    title: "Bed"
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aCRm71BIAicklS_4dnxzijTiIYuGCMjE",
    title: "Bed"
  }
];
