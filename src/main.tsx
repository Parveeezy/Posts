// import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app/App.tsx"
import { Provider } from "react-redux"
import { store } from "./app/store/store"

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
