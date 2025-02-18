import { useSelector } from "react-redux"
import { JSX, useEffect, useMemo, useState } from "react"
import { RootState, useAppDispatch } from "../../../app/store/store.ts"
import { postsThunk } from "../model/posts-reducer.ts"
import {
	Chip,
	Container,
	FormControl,
	Grid2,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material"
import { PaginationUi } from "../../../shared"
import { Post } from "../Post/Post.tsx"
// import { imagesThunk } from "../model/image-posts-reducer.ts"

export const Posts = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const posts = useSelector<RootState>((state) => state.posts)
	// const images = useSelector<RootState>((state) => state.images)
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedUserIds, setSelectedUserIds] = useState<string[]>([])

	useEffect(() => {
		dispatch(postsThunk())
		// dispatch(imagesThunk())
	}, [dispatch])

	// -------------------------------------------------
//
// 	const combinedData = posts.map(post => {
// 		const matchingImage = images.find(image => image.id === post.id);
//
// 		return {
// 			...post,
// 			...(matchingImage ? {
// 				thumbnailUrl: matchingImage.thumbnailUrl,
// 				url: matchingImage.url
// 			} : {})
// 		};
// 	});
//
	// -------------------------------------------------

	const filteredPosts = useMemo(() => {
		return posts.filter(post => {
			const matchesTitle = post.title.toLowerCase().includes(searchTerm.toLowerCase())
			const matchesUserId = selectedUserIds.length === 0 || selectedUserIds.includes(post.userId.toString())
			return matchesTitle && matchesUserId
		})
	}, [posts, searchTerm, selectedUserIds])


	const handleChangePage = (newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (newRowsPerPage: number) => {
		setRowsPerPage(newRowsPerPage)
		setPage(0)
	}

	const paginatedPosts = filteredPosts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

	const handleUserIdChange = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event
		setSelectedUserIds(typeof value === "string" ? value.split(",") : value)
	}

	return (
		<Container>
			<h1>Posts</h1>
			<TextField
				label="Search by title"
				variant="outlined"
				fullWidth
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<FormControl fullWidth sx={{ marginTop: 2 }}>
				<InputLabel id="userIds-label">Select User IDs</InputLabel>
				<Select
					labelId="userIds-label"
					multiple
					value={selectedUserIds}
					onChange={handleUserIdChange}
					renderValue={(selected) => (
						<div>
							{(selected as string[]).map((value) => (
								<Chip key={value} label={value} />
							))}
						</div>
					)}
				>
					{Array.from(new Set(posts.map(post => post.userId))).map((userId) => (
						<MenuItem key={userId} value={userId.toString()}>
							{userId}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<PaginationUi
				count={filteredPosts.length}
				page={page}
				rowsPerPage={rowsPerPage}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
			<Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ md: 20, sm: 24, xs: 0 }}>
				{paginatedPosts.map((post) => (
					<Grid2 key={post.id} size={{ xs: 4, sm: 8, md: 4 }}>
						<Post {...post} />
					</Grid2>
				))}
			</Grid2>
		</Container>
	)
}
