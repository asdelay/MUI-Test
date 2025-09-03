import { TourReducer } from '@/modules/TourModule'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        tour: TourReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch