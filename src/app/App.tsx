
import { useSelector } from "react-redux"
import { RootState } from "./store/store.ts"
import { LinearProgress } from "@mui/material"
import { Posts } from "../pages/Posts"

function App() {
	const posts = useSelector<RootState>((state) => state.posts)
	return (
		<div>
			{posts.length === 0 && <LinearProgress color="secondary" /> }
			<Posts/>
		</div>
	)
}

export default App
