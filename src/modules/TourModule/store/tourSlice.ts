import type { Tour } from "@/modules/TourModule/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TourState {
    tours: Tour[]
}

const initialState: TourState = {
    tours: [
        {
            name: 'Dubrovnik', 
            imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/250px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg', 
            lengthInHours: 5,
            rating: 4.7,
            reviews: 456,
            startingPrice: 150
        },
        {
            name: 'Paris City Highlights',
            imageSource: 'https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/',
            lengthInHours: 4,
            rating: 4.8,
            reviews: 892,
            startingPrice: 120
        },
        {
            name: 'Santorini Sunset Tour',
            imageSource: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/f6/2d/d1.jpg',
            lengthInHours: 3,
            rating: 4.9,
            reviews: 674,
            startingPrice: 100
        },
        {
            name: 'Kyoto Temples & Gardens',
            imageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckLqXX-JW1laoix4CUeM17sg22OeF5kA9Mw&s',
            lengthInHours: 6,
            rating: 4.7,
            reviews: 532,
            startingPrice: 140
        },
        {
            name: 'New York City Skyline Tour',
            imageSource: 'https://image.newyork.nl/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg.webp',
            lengthInHours: 5,
            rating: 4.6,
            reviews: 1012,
            startingPrice: 160
        },
        {
            name: 'Cairo Pyramids & Sphinx',
            imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/250px-Kheops-Pyramid.jpg',
            lengthInHours: 7,
            rating: 4.8,
            reviews: 789,
            startingPrice: 180
        }
    ]
}

export const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        addTour: (state, action: PayloadAction<Tour>) => {
            state.tours.push(action.payload)
        }
    }
})

export const {addTour} = tourSlice.actions;
export const TourReducer = tourSlice.reducer;