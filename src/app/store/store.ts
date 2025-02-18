import { Action, configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "../../pages/Posts/model/posts-reducer"
import { useDispatch } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { imagesReducer } from "../../pages/Posts/model/image-posts-reducer.ts"

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		images: imagesReducer
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
