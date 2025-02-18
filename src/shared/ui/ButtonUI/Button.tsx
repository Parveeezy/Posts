import { Button } from "@mui/material"
import { ButtonTypes } from "../../../app/types/uiTypes/Button-types.ts"

export const ButtonUi = ({ title, onClick }: ButtonTypes) => {
	return <Button variant="contained" color="success" size="medium" onClick={onClick}>{title}</Button>
}