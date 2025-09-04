import type { CollageItem } from "@/modules/TourModule/types";
import { Box, ImageListItem } from "@mui/material";
import ImageList from "@mui/material/ImageList";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageCollage = ({
  mainImage,
  collageData,
}: {
  mainImage: string;
  collageData: CollageItem[];
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        mt: 3,
      }}
    >
      <Box
        component="img"
        alt="Main image"
        src={mainImage}
        sx={{
          height: 325,
          width: { xs: "100%", sm: "60%" },
          display: "block",
          objectFit: "cover",
        }}
      />
      <ImageList
        sx={{
          m: 0,
          width: { xs: "100%", sm: "60%" },
          height: 325,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {collageData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ImageCollage;
