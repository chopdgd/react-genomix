import _defineProperty from"@babel/runtime/helpers/esm/defineProperty";import _classCallCheck from"@babel/runtime/helpers/esm/classCallCheck";import _possibleConstructorReturn from"@babel/runtime/helpers/esm/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/esm/getPrototypeOf";import _createClass from"@babel/runtime/helpers/esm/createClass";import _inherits from"@babel/runtime/helpers/esm/inherits";import React from"react";import{Form,Message}from"semantic-ui-react";import{Button}from"../../index";var LoginForm=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c.handleChange=function(a,b){var d,e=b.name,f=b.value;c.setState((d={},_defineProperty(d,e,f),_defineProperty(d,"error",void 0),d))},c.handleSubmit=function(a){a.preventDefault();var b=c.state,d=b.username,e=b.password,f=c.props.handleLogin;d&&e?(f({username:d,password:e}),c.setState({loading:!0})):c.setState({error:"Username and Password are required!"})},c.state={username:"",password:"",loading:a.loading,error:a.error},c}return _inherits(b,a),_createClass(b,null,[{key:"getDerivedStateFromProps",value:function e(a,b){var c=a.loading,d=a.error;return c!==b.loading||d!==b.error?{loading:c,error:d}:null}}]),_createClass(b,[{key:"render",value:function f(){var a=this.state,b=a.loading,c=a.error,d=a.username,e=a.password;return React.createElement(Form,{id:"login-form",className:"login-form",size:"large",key:"big",onSubmit:this.handleSubmit,loading:b},React.createElement(Form.Input,{id:"username",name:"username",className:"login-input",placeholder:"Username",icon:"user",iconPosition:"left",required:!0,onChange:this.handleChange}),React.createElement(Form.Input,{id:"password",name:"password",className:"login-input",placeholder:"Password",icon:"lock",iconPosition:"left",required:!0,onChange:this.handleChange,type:"password"}),c?React.createElement(Message,{negative:!0},React.createElement(Message.Header,{as:"h5"},"Login Failed"),React.createElement("p",null,c)):"",React.createElement(Button,{className:"login-button",type:"submit",form:"login-form",content:"Sign In",primary:!0,fluid:!0,size:"large",disabled:!d||!e}))}}]),b}(React.Component);LoginForm.defaultProps={loading:!1,error:void 0};export default LoginForm;