import React from "react"
import ReactDOM from "react-dom/client"
import Wrapper from "./app/App"
import "./style.css"

import { BrowserRouter } from "react-router-dom"
const Root = () => {
	return (
		<BrowserRouter>
			<Wrapper />
		</BrowserRouter>
	)
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />)
