import { ModalTypes } from "../../../app/types/uiTypes/Modal-types.ts"
import { Box, CardMedia, Modal, Typography } from "@mui/material"

export const ModalUi = ({ open, onClick, postData }: ModalTypes) => {
	const { title, body } = postData
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: {
			xs: 'calc(100% - 10px)',
			sm: 400,
		},
		backgroundColor: "#ffffff",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4
	};

	return (
		<div>
			<Modal
				keepMounted
				open={open}
				onClose={() => onClick(!open)}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
				sx={{marginLeft: 5, marginRight: 5}}
			>
				<Box sx={style}>
					<Typography id="keep-mounted-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<CardMedia
						sx={{
							minHeight: 250,
							maxHeight: 350,
							paddingTop: 10,
						}}
						image={"https://my-apple-store.ru/wa-data/public/shop/products/49/01/10149/images/13467/13467.300x300@2x.jpeg"}
					/>
					<Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
						{body}
					</Typography>
				</Box>
			</Modal>
		</div>
	)
}