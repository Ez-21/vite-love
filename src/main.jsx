import { ReactDOM, React } from "../global/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, KeepAlive } from "react-keep-alive";
import 'react-vant/lib/index.css';
import App from "./App";
import Home from "./pages/Home/home";
import Shop from "./pages/Shop/shop";
import Mine from "./pages/Mine/mine";
import NotFind from "./pages/404/404";
import Content from "./pages/MoveContent/MoveContent";
import Start from "./pages/start/start";
import Login from "./pages/Login/login";
import SetUp from "./pages/SetUp/setup";
import MessageList from "./pages/MessageList/messageList";
ReactDOM.render(
	<Router>
		<Routes>
			<Route index element={<Start />}></Route>
			<Route path="Login" element={<Login />}></Route>
			<Route path="/" element={<App />}>
				<Route path="/Home" element={<Home />} />
				<Route path="/Mine" element={<Mine />} />
				<Route path="/Shop" element={<Shop />} />
				<Route path="*" element={<NotFind />} />
			</Route>
			<Route path="/Content/:params" element={<Content />}></Route>
			<Route path="/SetUp" element={<SetUp />}></Route>
			<Route path="/MessageList" element={<MessageList />}></Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
