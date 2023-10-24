function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire164e,o=t.register;o("3yXQA",function(n,o){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return i});var a=t("5aRSq"),r=t("4Iuzv"),s=t("6njns");class u extends r.Component{constructor(e){super(e);// console.log("Parent Constructor");
}componentDidMount(){// console.log("Parent ComponentDidMount");
}render(){// console.log("Parent Render");
return/*#__PURE__*/(0,a.jsxs)("div",{children:[/*#__PURE__*/(0,a.jsx)("h1",{children:" About page"}),/*#__PURE__*/(0,a.jsx)(s.default,{name:"First",location:"Gurgaon (class)",contact:" naveenkaushik0612@gmail.com (class)"})]})}}var i=u}),o("6njns",function(o,a){e(o.exports,"default",function(){return i});var r=t("5aRSq"),s=t("4Iuzv");class u extends /*@__PURE__*/n(s).Component{constructor(e){super(e),this.state={userInfo:{name:"Dummy Name",location:"Dummy Location",avatar_url:"https//dummyurl.com"}};// console.log(this.props.name + "Child Constructor");
}async componentDidMount(){// console.log(this.props.name + "Child ComponentDidMount");
// API Call here
let e=await fetch("https://api.github.com/users/Naveenkaushik06"),n=await e.json();// console.log(json);
// this.timer = setInterval(()=>{
//   console.log("namaste react");
// },1000);
this.setState({userInfo:n})}componentDidUpdate(){// console.log("ComponentdidUpdate");
}componentWillUnmount(){// console.log("componentWillUnmount");
clearInterval(this.timer)}render(){// console.log(this.props.name + "Child Render");
let{name:e,location:n,avatar_url:t}=this.state.userInfo;return/*#__PURE__*/(0,r.jsxs)("div",{className:"user-card",children:[/*#__PURE__*/(0,r.jsxs)("h2",{children:["Name:",e]}),/*#__PURE__*/(0,r.jsxs)("h3",{children:["Location:",n]}),/*#__PURE__*/(0,r.jsx)("img",{src:t})]})}}var i=u});//# sourceMappingURL=About.cb7b3d38.js.map

//# sourceMappingURL=About.cb7b3d38.js.map
