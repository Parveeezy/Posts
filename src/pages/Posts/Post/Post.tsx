import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { JSX, useState } from "react"
import { ButtonUi, ModalUi } from "../../../shared"
import { PostTypes } from "../../../app/types/Post-types.ts"

export const Post = (props: PostTypes) => {
	const { title } = props
	const [open, setOpen] = useState<boolean>(false)

	const card: JSX.Element = (
		<>
			<CardMedia
				sx={{ minHeight: 170, paddingTop: 10 }}
				image={"https://my-apple-store.ru/wa-data/public/shop/products/49/01/10149/images/13467/13467.150x150@2x.jpeg"}
			/>
			<CardContent>
				<Typography variant="h6" component="div">
					{title.length > 20 ? `${title.slice(0, 20)}...` : title}
				</Typography>
			</CardContent>
			<CardActions>
				<ButtonUi size="small" title="more..." onClick={() => setOpen(true)} />
			</CardActions>
		</>
	)

	return (
		<Box sx={{ maxWidth: 275 }}>
			{!open ?
				<Card
					variant="outlined"
					sx={{
						marginTop: 2,
						height: 400,
						maxHeight: 420,
						marginLeft: 1,
						maxWidth: 345,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}>{card}</Card> :
				<ModalUi open={open} postData={props} onClick={setOpen} />}
		</Box>
	)
}