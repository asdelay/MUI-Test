import type { CityTours } from "@/modules/TourModule/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TourState {
  tours: CityTours[];
}

const initialState: TourState = {
  tours: [
    {
      id: 1,
      name: "Niagara Falls",
      tours: [
        {
          id: 1,
          name: "Immerse into the Falls",
          duration: 5,
          rating: 4.5,
          numberOfReviews: 462,
          price: 465,
          description:
            "Step right into the heart of Niagara’s rushing waters. Feel the mist on your face and hear the thunder of the falls up close. An unforgettable experience of pure natural power.",
          image:
            "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
        {
          id: 2,
          name: "Helicopter Over the Falls",
          duration: 8,
          rating: 3.5,
          numberOfReviews: 641,
          price: 385,
          description:
            "Soar above the breathtaking cascades in a thrilling helicopter ride. Take in sweeping views of the falls, the river, and the surrounding landscapes. Perfect for those who love adventure with a view.",
          image:
            "https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
        {
          id: 3,
          name: "The Falls at Night",
          duration: 2,
          rating: 4.5,
          numberOfReviews: 133,
          price: 144,
          description:
            "Witness Niagara Falls illuminated in dazzling colors after sunset. A romantic and magical way to see one of the world’s wonders. The lights bring the water to life in a whole new way.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwMXkQ2ZZBeEKRREd_3HhoYbyAuNiJ7vmAA&s",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
        {
          id: 4,
          name: "Immerse into the Falls",
          duration: 5,
          rating: 4.5,
          numberOfReviews: 462,
          price: 465,
          description:
            "Get as close as possible to the roaring waters of Niagara. This tour surrounds you with mist, sound, and power. A true must-do for anyone visiting the falls.",
          image:
            "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Las Vegas",
      tours: [
        {
          id: 4,
          name: "All Around the World",
          duration: 5,
          rating: 4.5,
          numberOfReviews: 462,
          price: 465,
          description:
            "Explore the famous Las Vegas Strip with its themed hotels and attractions. From Paris to New York, experience a world of wonders in one city. A fun mix of culture, lights, and excitement.",
          image:
            "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
        {
          id: 5,
          name: "View the Casinos",
          duration: 5,
          rating: 4.5,
          numberOfReviews: 462,
          price: 465,
          description:
            "Dive into the glitz and glamour of Las Vegas casinos. See the most iconic gambling halls and their stunning interiors. Whether you play or just look, it’s pure Vegas magic.",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532921587.jpg?k=ba59c2bcf1b5d88bd170c507894e109dafbca50ba28817af880c0eec269d88ed&o=&hp=1",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
        {
          id: 6,
          name: "Show me the Magic",
          duration: 8,
          rating: 3.5,
          numberOfReviews: 641,
          price: 385,
          description:
            "Discover the entertainment capital’s most dazzling shows and attractions. From magicians to breathtaking performances, Vegas never fails to amaze. A day full of lights, laughter, and surprises.",
          image:
            "https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
        {
          id: 7,
          name: "The Falls at Night",
          duration: 2,
          rating: 4.5,
          numberOfReviews: 133,
          price: 144,
          description:
            "Experience the beauty of the falls under the glow of the Vegas lights. A special evening tour that blends nature with the city’s sparkle. Perfect for couples or anyone seeking a magical night.",
          image:
            "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
          collageData: [
            {
              img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
              title: "Breakfast",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              title: "Burger",
            },
            {
              img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
              title: "Camera",
            },
            {
              img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              title: "Coffee",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
              title: "Hats",
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
              title: "Honey",
              author: "@arwinneil",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
              title: "Basketball",
            },
            {
              img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
              title: "Fern",
            },
            {
              img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
              title: "Mushrooms",
              rows: 2,
              cols: 2,
            },
            {
              img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
              title: "Tomato basil",
            },
            {
              img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
              title: "Sea star",
            },
            {
              img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
              title: "Bike",
              cols: 2,
            },
          ],
        },
      ],
    },
  ],
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    addTour: (state, action: PayloadAction<CityTours>) => {
      state.tours.push(action.payload);
    },
  },
});

export const { addTour } = tourSlice.actions;
export const TourReducer = tourSlice.reducer;
