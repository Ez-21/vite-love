import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form, Checkbox } from "antd";
import "../Css/Login.scss";
function Login() {
  const Nav = useNavigate()
  var Login = ()=>{
    setTimeout(() => {
      Nav('/Mine')
    }, 1400);
  }
	return (
		<React.Fragment>
			<div className="LoginBox">
				<Form
					className="AntForm"
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					autoComplete="off"
				>
					<Form.Item name="username">
						<Input placeholder="请输入您的账号" />
					</Form.Item>

					<Form.Item name="password">
						<Input.Password placeholder="请输入您的密码" />
					</Form.Item>
					<div className="LoginBtn">
						<Checkbox>记住我</Checkbox>
						<a onClick={Login}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							登录
						</a>
					</div>
				</Form>
			</div>
		</React.Fragment>
	);
}
export default Login;
