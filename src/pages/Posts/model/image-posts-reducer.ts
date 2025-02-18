import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PostsTypes } from "../../../app/types/Posts-types.ts"
import { AppDispatch } from "../../../app/store/store.ts"
import { fetchPostsData } from "../../../app/api/instance.ts"

export const slice = createSlice({
	name: "images",
	initialState: [],
	reducers: {
		setImages(state, action: PayloadAction<PostsTypes[]>) {
			state.push(...action.payload)
		},
	},
})

export const imagesReducer = slice.reducer
export const { setImages } = slice.actions

export const imagesThunk = createAsyncThunk<PostsTypes[], void, { dispatch: AppDispatch }>(
	"images/fetchImages",
	async (_, { dispatch }) => {
		try {
			const response = await fetchPostsData.getElement("photos")
			dispatch(setImages(response.data))
			return response.data
		} catch (error) {
			throw new Error(`Error fetching posts: ${error}`)
		}
	},
)