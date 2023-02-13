
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./stylesheet/style.css"

ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>, document.getElementById("root"))