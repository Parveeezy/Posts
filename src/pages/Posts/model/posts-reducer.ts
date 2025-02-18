import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PostsTypes } from "../../../app/types/Posts-types"
import { fetchPostsData } from "../../../app/api/instance"
import { AppDispatch } from "../../../app/store/store"

const initialState: PostsTypes[] = []

export const slice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts(state, action: PayloadAction<PostsTypes[]>) {
			state.push(...action.payload)
		},
	},
})

export const postsReducer = slice.reducer
export const { setPosts } = slice.actions


export const postsThunk = createAsyncThunk<PostsTypes[], void, { dispatch: AppDispatch }>(
	"posts/fetchPosts",
	async (_, { dispatch }) => {
		try {
			const response = await fetchPostsData.getElement("posts")
			dispatch(setPosts(response.data))
			return response.data
		} catch (error) {
			throw new Error(`Error fetching posts: ${error}`)
		}
	},
)

