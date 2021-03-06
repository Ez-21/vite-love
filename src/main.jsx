import { ReactDOM, React } from "../global/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider, KeepAlive } from "react-keep-alive";
import 'react-vant/lib/index.css';
import App from "./App";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Mine from "./pages/Mine/Mine";
import NotFind from "./pages/404/404";
import MoveContent from "./pages/MoveContent/MoveContent";
import Start from "./pages/start/Start";
import Login from "./pages/Login/Login";
import SetUp from "./pages/SetUp/Setup";
import MessageList from "./pages/MessageList/MessageList";
import User from './pages/User/User'
import ShopContent from './pages/ShopContent/ShopContent'
import Music from './pages/Music/Music'
import MusicList from './pages/MusicList/MusicList'
import MusicContent from './pages/MusicContent/MusicContent'
import MusicVideo from './pages/MusicVideo/MusicVideo'
ReactDOM.render(
	<Router>
		<Routes>
			<Route index element={<Start />}></Route>
			<Route path="Login" element={<Login />}></Route>
			<Route path="/" element={<App />}>
				<Route path="/Home" element={<Home />} />
				<Route path="/Mine" element={<Mine />} />
				<Route path="/Shop" element={<Shop />} />
				<Route path="/Music" element={<Music />} />
				<Route path="*" element={<NotFind />} />
			</Route>
			<Route path="/MoveContent/:params" element={<MoveContent />}></Route>
			<Route path="/SetUp" element={<SetUp />}></Route>
			<Route path="/MessageList" element={<MessageList />}></Route>
			<Route path="/User" element={<User />}></Route>
			<Route path="/ShopContent" element={<ShopContent />}></Route>
			<Route path="/MusicList/:states" element={<MusicList />}></Route>
			<Route path="/MusicContent/:state" element={<MusicContent />}></Route>
			<Route path="/MusicVideo" element={<MusicVideo />}></Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
