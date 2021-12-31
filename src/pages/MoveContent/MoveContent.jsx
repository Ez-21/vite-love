import react, {
	useEffect,
	useReducer,
	useState,
	useMemo,
	useLayoutEffect,
} from "react";
import { useParams } from "react-router-dom";
import { MovContent, MovComment } from "/src/api/home";
import { message } from "antd";
import "../Css/MoveContent.scss";
import QRCode from "qrcode.react";
import TileBack from "../../components/Tittle&back";
import { Lazyload, ShareSheet, Rate, Overlay, Notify,Image } from "react-vant";
const options = [
	[
		{ name: "微信", icon: "wechat" },
		{ name: "朋友圈", icon: "wechat-moments" },
		{ name: "微博", icon: "weibo" },
		{ name: "QQ", icon: "qq" },
	],
	[
		{ name: "复制链接", icon: "link" },
		{ name: "分享海报", icon: "poster" },
		{ name: "二维码", icon: "qrcode" },
	],
];

var getRandomColor = function () {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var color = "rgba(" + r + "," + g + "," + b + ",0.8)";
	return color;
};

// 组件
function Content() {
	const [TextStyle,SetTextStyle] = useState({})
	const params = useParams();
	const [mess, SetMess] = useState({});
	const [visible, setVisible] = useState(false);
	const close = () => setVisible(false);
	const [MessList, SetMessList] = useState([]);
	const [Show, SetShow] = useState(false);
	// 获取电影详情数据
	// 这个有问题
	function MovCon(id) {
		MovContent({ movieId: Number(id) })
			.then((res) => {
				console.log(res);
				// 他没有这个属性啊detailMovie
				// 这会是这个接口报错了  正常200也不行
				res.detailMovie.img = res.detailMovie.img.replace("/w.h", "");
				SetMess(res.detailMovie);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		console.log(mess);
	}, [mess]);
	//
	function unfold() {
		SetTextStyle(
				...{height:'auto',background:'yellow'}
		)
	}
	// 长按二维码
	function Select(index) {
		switch (index) {
			case 0:{
				window.navigator.clipboard.writeText(`https://i.maoyan.com/asgard/movie/${params.params}`)
				Notify.show({ type: "success", message: "链接已复制" });
			};break
			case 2:
				{
					SetShow(true);
					Notify.show({ type: "primary", message: "长按可保存至本地" });
				}
				break;
			default:
				break;
		}
	}
	// 获取电影详情评论
	function MovList(id) {
		MovComment({ movieId: Number(id), limit: 15 }).then(({ data }) => {
			console.log(data, "电影评论");
			data.hotComments.map((item) => {
				item.time = new Date(1640495520000)
					.toLocaleDateString()
					.replaceAll("/", "-");
			});
			SetMessList(data.hotComments);
		});
	}
	// useMemo(() => MovCon(params.params), []);
	useLayoutEffect(() => {
		// 这个接口====
		MovCon(params.params);
		// =====
		MovList(params.params);
	}, []);
	return (
		<div className="MoveModel" style={{ background: getRandomColor() }}>
			<Overlay visible={Show} onClick={() => SetShow(false)}>
				<QRCode
					onClick={(e) => window.navigator.clipboard.writeText("等不到天黑")}
					value="http://wx1.sinaimg.cn/bmiddle/006C7PHRly1gvw6heza9ej30u00t1tej.jpg"
					size={170} // 二维码的大小
					fgColor="#000000"
				/>
			</Overlay>
			<TileBack name="电影详情"></TileBack>
			<div className="MoveContent">
				<div className="MoveHead">
					<div className="Headposter">
						<img src={mess.img} alt="" />
					</div>
					<div className="MoveText">
						<p className="MoveName">{mess.nm}</p>
						<div className="MoveInfo">
							<p>{mess.enm}</p>
							<p>{mess.cat}</p>
							<p>{mess.star}</p>
							<p>
								{mess.pubDesc}
								{mess.dur}分钟
							</p>
						</div>
					</div>
				</div>
				<div className="MoveBrief">
					<span>简介</span>
					<span onClick={(e) => unfold}>展开✨</span>
				</div>
				<div className="MoveContText" style={TextStyle} >
					<span>{mess.dra}</span>
				</div>
				<div className="DefaultBox">
					<div className="DefaultTitle">
						<span>预告抢先看</span>
					</div>
					<video src={mess.videourl} controls poster={mess.videoImg}></video>
				</div>
				<div className="DefaultBox">
					<div className="DefaultTitle">
						<span>剧照</span>
						<span></span>
					</div>
					<div className="DefaultImg">
							{mess.photos&&mess['photos'].map(item => (
								<Image  src={item} alt="" key={item} lazyload/>
							))}
					</div>
				</div>
				<ShareSheet
					visible={visible}
					options={options}
					title="立即分享给好友"
					onCancel={close}
					onSelect={(option, index) => {
						Select(index);
						close();
					}}
				/>
				<div className="BuyTicket">
					<div className="BuyBox">
						<img
							onClick={() => setVisible(true)}
							src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/share-icon.png"
							alt=""
						/>
						<div className="BuyButton">特惠购票</div>
					</div>
				</div>
			</div>
			<div className="MovComment">
				<div>精选短评</div>
				{MessList.map((item) => (
					<div className="CommentBox" key={item.nick}>
						<div className="CommentLeft">
							<img src={item.avatarUrl} alt="" />
						</div>
						<div className="CommentRight">
							<div>
								<div>{item.nick}</div>
								<div>
									<Rate
										value={item.score}
										readonly
										size="10px"
										color="#fac800"
									/>
									<span className="star">{item.score}分</span>
								</div>
							</div>
							<div>{item.content}</div>
							<div className="CommentTime">{item.time}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Content;
