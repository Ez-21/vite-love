import { ReactDOM, React } from "../global/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/home";
import Shop from "./pages/Shop/shop";
import Mine from './pages/Mine/mine'
import NotFind from './pages/404/404'
import Content from './pages/MoveContent/MoveContent'
ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/Home" element={<Home />} />
				<Route path='/Mine' element={<Mine/>}/>
				<Route path="/Shop" element={<Shop />} />
				<Route path='*' element={<NotFind/>}/>
				</Route>
				<Route path='/Content/:params' element={<Content/>}></Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
