(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},56:function(e,t,n){e.exports=n(86)},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),o=n.n(c),s=n(23),i=n(6),l=n(11),u=n(12),m=n(14),p=n(13),d=n(7),f=n(8),v=n(45),h=n.n(v);function b(){var e=Object(d.a)([""]);return b=function(){return e},e}var g=f.a.a.attrs({className:"navbar-brand"})(b());a.Component;function E(){var e=Object(d.a)(["\n  color: #6096ba;\n"]);return E=function(){return e},e}function w(){var e=Object(d.a)(["\n  align-items: center;\n  width: 50%;\n  margin: 0 auto;\n"]);return w=function(){return e},e}function x(){var e=Object(d.a)(["\n  margin: 0 auto !important;\n  align-items: center !important;\n  width: 50%;\n"]);return x=function(){return e},e}var y=f.a.div.attrs({className:"collpase navbar-collapse"})(x()),O=f.a.div.attrs({className:"navbar-nav mr-auto"})(w()),j=f.a.div.attrs({className:"collpase navbar-collapse"})(E()),C=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(O,null,r.a.createElement(j,null,r.a.createElement(s.b,{to:"/topics/getTopics",className:"nav-link"},"List Topics")),r.a.createElement(j,null,r.a.createElement(s.b,{to:"/topics/create",className:"nav-link"},"Create Topic")))))}}]),n}(a.Component);function k(){var e=Object(d.a)(["\n    margin-bottom: 20 px;\n    display: block;\n    color: #274c77;\n"]);return k=function(){return e},e}function I(){var e=Object(d.a)([""]);return I=function(){return e},e}var N=f.a.div.attrs({className:"container"})(I()),q=f.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark"})(k()),T=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(q,null,r.a.createElement("h1",{style:{textAlign:"center"}},"- F I S H B O W L -"),r.a.createElement(C,{style:{display:"flex"}})))}}]),n}(a.Component),S=n(10),A=n.n(S),L=n(19),B=(n(43),n(34),n(87)),M=n(89),F=n(20),H=n.n(F);function W(){var e=Object(d.a)(["\n    padding: 0 40px 40px 40px;\n"]);return W=function(){return e},e}var D=f.a.div(W()),G=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({isLoading:!0}),H.a.get("/api/topics/getTopics").then((function(e){e.data.length>0&&null!=e.data&&(console.log(e),a.setState({topics:e.data}))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),a.state={topics:[],columns:[],isLoading:!1},a}return Object(u.a)(n,[{key:"seeAnswers",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.topics;t.isLoading;return r.a.createElement(D,null,r.a.createElement(B.a,null,r.a.createElement(M.a,{style:{borderColor:"#a3cef1",borderWidth:"4px"}},r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,null,"Create a Topic"),r.a.createElement(M.a.Text,null,r.a.createElement(M.a.Link,{href:"/topics/create"},"Click Here")))),n.map((function(t,n){return r.a.createElement(M.a,{key:n,style:{borderTopColor:"#a3cef1",borderTopWidth:"4px"}},r.a.createElement(M.a.Body,{style:{textAlign:"center"}},r.a.createElement(M.a.Title,{style:{color:"#274c77"}},t.question),r.a.createElement(M.a.Text,{style:{color:"#8b8c89"}},"Submitted by ",""==t.name?"Anonymous":t.name)),r.a.createElement(M.a.Footer,null,r.a.createElement(M.a.Link,{href:"/answers/"+t._id,onClick:e.seeAnswers(t._id)},"See Responses")))}))))}}]),n}(a.Component);function J(){var e=Object(d.a)(["\n    margin: 15px 15px 15px 5px;\n"]);return J=function(){return e},e}function Q(){var e=Object(d.a)(["\n    margin: 15px 15px 15px 5px;\n"]);return Q=function(){return e},e}function _(){var e=Object(d.a)(["\n    margin: 5px;\n"]);return _=function(){return e},e}function R(){var e=Object(d.a)(["\n    margin: 5px;\n"]);return R=function(){return e},e}function z(){var e=Object(d.a)(["\n    margin: 0 30px;\n"]);return z=function(){return e},e}function K(){var e=Object(d.a)([""]);return K=function(){return e},e}var P=f.a.h1.attrs({className:"h1"})(K()),U=f.a.div.attrs({className:"form-group"})(z()),V=f.a.label(R()),X=f.a.input.attrs({className:"form-control"})(_()),Y=f.a.button.attrs({className:"btn btn-primary"})(Q()),Z=f.a.a.attrs({className:"btn btn-danger"})(J()),$=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChangeInputQuestion=function(){var e=Object(L.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a.setState({question:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChangeInputName=function(){var e=Object(L.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a.setState({name:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleAddMovie=Object(L.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.state.question,t={question:a.state.question,name:a.state.name},H.a.post("/api/topics/create",t).then((function(e){return console.log(e.data)}));case 3:case"end":return e.stop()}}),e)}))),a.state={question:"",name:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.question,n=e.name;return r.a.createElement(U,null,r.a.createElement(P,null,"Have an idea for a topic? Submit it Below!"),r.a.createElement(V,null,"Topic: "),r.a.createElement(X,{type:"text",value:t,onChange:this.handleChangeInputQuestion}),r.a.createElement(V,null,"Name: "),r.a.createElement(X,{type:"text",value:n,onChange:this.handleChangeInputName,placeholder:"Leave this blank to remain anonymous"}),r.a.createElement(Y,{onClick:this.handleAddMovie},"Submit Topic"),r.a.createElement(Z,{href:"/"},"Cancel"))}}]),n}(a.Component),ee=(a.Component,n(88)),te=n(90),ne=n(30);function ae(){var e=Object(d.a)(["\n    padding: 0 100px 40px 100px;\n"]);return ae=function(){return e},e}var re=f.a.div(ae()),ce=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({isLoading:!0,questionId:window.location.href.split("answers/")[1]}),H.a.get("/api/answers/"+window.location.href.split("answers/")[1]).then((function(e){null!=e.data&&a.setState({answers:e.data,isLoading:!1})})),H.a.get("/api/topics/"+window.location.href.split("answers/")[1]).then((function(e){a.setState({question:e.data.question})}));case 3:case"end":return e.stop()}}),e)}))),a.submitAnswer=Object(L.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(document.getElementById("name").value),t={questionId:a.state.questionId,name:document.getElementById("name").value,answer:document.getElementById("answer").value},H.a.post("/api/answers/add",t).then((function(e){return console.log(e.data)})),console.log(t);case 4:case"end":return e.stop()}}),e)}))),a.state={questionId:"",answers:[],isLoading:!1,question:""},a}return Object(u.a)(n,[{key:"render",value:function(){this.state.answers.answers;return r.a.createElement(re,null,r.a.createElement("h1",{style:{color:"#274c77",textAlign:"center"}},this.state.question),r.a.createElement(ne.a,{variant:"flush"},this.state.answers.map((function(e,t){return r.a.createElement(ne.a.Item,{style:{backgroundColor:"transparent",color:"#1b2845"}},r.a.createElement("b",null,e.name,":")," ",e.answer)}))),r.a.createElement(ee.a,null,r.a.createElement(ee.a.Group,{controlId:"formBasicName"},r.a.createElement(ee.a.Control,{onChange:this.handleChangeInputName,id:"name",type:"name",placeholder:"Enter your name"})),r.a.createElement(ee.a.Group,{controlId:"formBasicAnswer"},r.a.createElement(ee.a.Control,{onChange:this.handleChangeInputAnswer,id:"answer",as:"textarea",rows:"3",placeholder:"Type your answer"})),r.a.createElement(te.a,{style:{backgroundColor:"#274c77",border:"none"},onClick:this.submitAnswer,variant:"primary"},"Submit your answer")))}}]),n}(a.Component);n(84);var oe=function(){return r.a.createElement(s.a,null,r.a.createElement(T,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:G}),r.a.createElement(i.a,{path:"/topics/getTopics",exact:!0,component:G}),r.a.createElement(i.a,{path:"/topics/create",exact:!0,component:$}),r.a.createElement(i.a,{path:"/answers/:id",exact:!0,component:ce})))};n(85);o.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.c0d4ecf6.chunk.js.map