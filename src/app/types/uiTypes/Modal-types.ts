import { PostTypes } from "../Post-types.ts"

export interface ModalTypes {
	open : boolean
	onClick: (open: boolean) => void
	postData: PostTypes
}