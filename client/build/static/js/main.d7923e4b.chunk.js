(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/MissyRusty.e717c1ca.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/LorisLabs.c9a09f1b.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/TaePoodle.8f7ee0e4.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/ColinWheaten.2747a9dd.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/image_part_001.af1369ca.jpg"},138:function(e,t,a){e.exports=a.p+"static/media/image_part_002.7f4f03e0.jpg"},139:function(e,t,a){e.exports=a.p+"static/media/image_part_003.a607e761.jpg"},140:function(e,t,a){e.exports=a.p+"static/media/image_part_004.f48c2de4.jpg"},141:function(e,t,a){e.exports=a.p+"static/media/image_part_005.faaefc67.jpg"},142:function(e,t,a){e.exports=a.p+"static/media/image_part_006.5bd5df3d.jpg"},143:function(e,t,a){e.exports=a.p+"static/media/image_part_007.efa8ffff.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/image_part_008.f3e6b5fe.jpg"},147:function(e,t,a){e.exports=a(331)},152:function(e,t,a){},153:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),l=(a(152),a(153),a(25)),c=a(5),s=a.n(c),u=a(47),m=a.n(u),d=a(48),h=a.n(d),p=a(136),g=a.n(p),f=a(51),b=a.n(f),y=a(50),v=a.n(y),E=a(49),j=a.n(E),w=a(32),C=a.n(w),O=a(23),k=a.n(O),x=a(15),N=a.n(x),S=a(27),T=a(130),B=a.n(T),I=a(131),M=a.n(I),W=a(132),_=a.n(W),F=a(133),R=a.n(F),L=a(16),D=a(17),G=a(20),P=a(18),A=a(19),U=a(22),z=a.n(U),K=a(29),J=a.n(K),H=a(40),V=a.n(H),X=a(44),Y=a.n(X),$=a(42),q=a.n($),Q=a(43),Z=a.n(Q),ee=a(41),te=a.n(ee),ae=a(52),ne=a.n(ae),re=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(G.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,users:[]},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(l.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t={firstName:a.state.firstName,lastName:a.state.lastName,username:a.state.username,password:a.state.password,email:a.state.email};ne.a.post("/post/users",t).then(function(e){console.log(e),console.log(e.data)}).catch(function(e){console.log(e)})},a}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;ne.a.get("/users").then(function(t){var a=t.data;e.setState({user:a})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z.a,{variant:"outlined",className:"text-right",onClick:this.handleClickOpen},"Create Account"),r.a.createElement(V.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(te.a,{id:"form-dialog-title"},"Create Account"),r.a.createElement(q.a,null,r.a.createElement(Z.a,null,"To create an Account, please enter your First Name, Last Name, a User Name, and a Password."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(J.a,{autoFocus:!0,margin:"dense",label:"First Name",type:"string",name:"firstName",value:this.state.firstName,onChange:this.handleInputChange,fullWidth:!0}),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"lastNamedb",label:"Last Name",type:"string",name:"lastName",value:this.state.lastName,onChange:this.handleInputChange,fullWidth:!0}),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"usernamedb",label:"User Name",type:"string",name:"username",value:this.state.username,onChange:this.handleInputChange,fullWidth:!0}),r.a.createElement(J.a,Object(l.a)({autoFocus:!0,margin:"dense",id:"passworddb",label:"password",type:"string",name:"password",value:this.state.password,onChange:this.handleInputChange,fullWidth:!0},"type","password")),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"emaildb",label:"Email Adress",name:"email",value:this.state.email,onChange:this.handleInputChange,type:"string",fullWidth:!0}))),r.a.createElement(Y.a,null,r.a.createElement(z.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:this.handleSubmit,color:"primary"},"Create Account"))))}}]),t}(r.a.Component),ie=a(135),oe=a.n(ie);function le(e){return r.a.createElement(oe.a,Object.assign({direction:"up"},e))}r.a.Component;var ce=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(G.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(A.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z.a,{variant:"outlined",onClick:this.handleClickOpen},"Sign In"),r.a.createElement(V.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(te.a,{id:"form-dialog-title"},"Sign In"),r.a.createElement(q.a,null,r.a.createElement(Z.a,null,"To sign in, please enter your User Name and Password."),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"username",label:"User Name",type:"string",fullWidth:!0}),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0})),r.a.createElement(Y.a,null,r.a.createElement(z.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:this.handleClose,color:"primary"},"Sign In"))))}}]),t}(r.a.Component),se=a(65),ue=a.n(se),me=[{img:B.a,title:"Missy and Rusty",text:"Rusty is not a rescue, but he did rescue me. He came into our lives during a very sad time right after the loss of my Mom and our first Wire Fox Terrier. Rusty joined our family within a week and it was truly love at first site. Wires are so much fun and guaranteed to put a smile on your face and make you laugh. Rusty is a very sweet dog and loves to cuddle and curl up in Mommy or Daddy\u2019s lap. I hope to always have a loving Wire Fox Terrier fur-child."},{img:M.a,title:"Lori's  Labs",text:"The 2 brown labs are my grand-dogs. Jude and Buddy. Leo is a 10 year old rescue from Ohio, is the guy with his tongue out.  He has a new titanium plated in his knee.  Bronco is the lab on my left and his brother buster to my right scratching."},{img:_.a,title:"Tae and Kong",text:"Text for Tae and his poodle's story."},{img:R.a,title:"Colin and Keeva",text:"Text for Colin and Keeva's story."}];var de=Object(S.withStyles)(function(e){var t;return{appBar:(t={display:"flex",position:"sticky",background:"#66bb6a"},Object(l.a)(t,"background","linear-gradient(to left bottom, #66bb6a,#2e7d32, #66bb6a)"),Object(l.a)(t,"paddingTop",50),t),menuButton:{display:"flex",flexDirection:"row",align:"right",justify:"flex-end"},heroUnit:{background:"#c8e6c9"},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(4*e.spacing.unit,"px 0 ").concat(3*e.spacing.unit,"px 0")},layout:Object(l.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0"),background:"#e0e0e0"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"100%",height:"100%"},cardContent:{flexGrow:1},divider:{width:"100%",height:"100px",backgroundColor:"#c8e6c9"},footer:{backgroundColor:"green",padding:6*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null),r.a.createElement(m.a,{position:"sticky",className:t.appBar},r.a.createElement(k.a,{container:!0,direction:"row",justify:"center"},r.a.createElement(N.a,{component:"h1",variant:"h2",display:"inline-block",color:"textPrimary"},"Go! Play! Ruff!"),r.a.createElement(k.a,{justify:"flex-end",container:!0,spacing:16,grid:!0,direction:"row"},r.a.createElement(k.a,{item:!0},r.a.createElement(re,null)),r.a.createElement(k.a,{item:!0},r.a.createElement(ce,null))))),r.a.createElement("main",null,r.a.createElement("div",{className:t.heroUnit},r.a.createElement("div",{className:t.heroContent},r.a.createElement(N.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Go! Play! Ruff! is a place where people who love dogs can find great dog-friendly resources, and play a fun dog puzzle game."))),r.a.createElement("div",{className:s()(t.layout,t.cardGrid)},r.a.createElement(k.a,{container:!0,spacing:40},me.map(function(e,a){return r.a.createElement(k.a,{item:!0,key:a,sm:6,md:4,lg:3},r.a.createElement(h.a,{className:t.card},r.a.createElement(g.a,null,r.a.createElement(j.a,{className:t.cardMedia,image:e.img,title:e.title}),r.a.createElement(v.a,{className:t.cardContent},r.a.createElement(N.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(N.a,null,e.text))),r.a.createElement(b.a,null)))}))),r.a.createElement(ue.a,null)))}),he=a(66),pe=a(21),ge=a(67),fe=a(53),be=a.n(fe),ye=a(137),ve=a.n(ye),Ee=a(138),je=a.n(Ee),we=a(139),Ce=a.n(we),Oe=a(140),ke=a.n(Oe),xe=a(141),Ne=a.n(xe),Se=a(142),Te=a.n(Se),Be=a(143),Ie=a.n(Be),Me=a(144),We=a.n(Me),_e=r.a.Component,Fe=[ve.a,je.a,Ce.a,ke.a,Ne.a,Te.a,Ie.a,We.a],Re={listStyle:"none",margin:"0 auto",padding:5,position:"relative"},Le={backgroundImage:"images[0]",boxShadow:"inset 0 0 1px 0 black",boxSizing:"border-box",display:"block",position:"absolute"},De={opacity:0},Ge={display:"block",margin:"16px auto",padding:"8px 16px",background:"teal",flexDirection:"row"};function Pe(e,t,a){for(var n=1,r=1,i=t*a-1;r<=i;r++)for(var o=r+1,l=i+1;o<=l;o++)n*=(e[r-1]-e[o-1])/(r-o);return 1===Math.round(n)}function Ae(e){for(var t=0,a=e.length;t<a;t++)if(e[t]!==t)return!1;return!0}function Ue(e,t,a){return{row:Math.floor(e/a),col:e%a}}var ze=function(e){function t(){var e;return Object(L.a)(this,t),(e=Object(G.a)(this,Object(P.a)(t).call(this))).handleClick=e.handleClick.bind(Object(pe.a)(Object(pe.a)(e))),e}return Object(A.a)(t,e),Object(D.a)(t,[{key:"handleClick",value:function(){var e=this.props.index;this.props.onClick(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.hole,n=t.number,i=t.index,o=(t.rows,t.cols),l=t.width,c=t.height,s=(t.images,function(e,t,a){var n=e.row;return{x:e.col*t,y:n*a}}(Ue(i,0,o),l,c)),u={translateX:Object(ge.spring)(s.x),translateY:Object(ge.spring)(s.y)},m=Object(he.a)({},Le,n===a?De:{},{width:l,height:c});return r.a.createElement(ge.Motion,{style:u},function(t){var a=t.translateX,n=t.translateY;return r.a.createElement("li",{style:Object(he.a)({},m,{transform:"translate3d(".concat(a,"px, ").concat(n,"px, 0)")}),onClick:e.handleClick},r.a.createElement("img",{src:e.props.image,width:100,height:100}))})}}]),t}(_e),Ke=function(e){function t(e){var a;Object(L.a)(this,t),a=Object(G.a)(this,Object(P.a)(t).call(this,e));var n=e.rows,r=e.cols;return a.state={numbers:be.a.range(0,n*r)},a.handleTileClick=a.handleTileClick.bind(Object(pe.a)(Object(pe.a)(a))),a.handleButtonClick=a.handleButtonClick.bind(Object(pe.a)(Object(pe.a)(a))),a}return Object(A.a)(t,e),Object(D.a)(t,[{key:"handleTileClick",value:function(e){this.swap(e)}},{key:"handleButtonClick",value:function(){this.shuffle()}},{key:"shuffle",value:function(){var e=this.props,t=e.hole,a=e.rows,n=e.cols,r=function(e,t,a,n){do{e=be.a.shuffle(be.a.without(e,t)).concat(t)}while(Ae(e)||!Pe(e,a,n));return e}(this.state.numbers,t,a,n);this.setState({numbers:r})}},{key:"swap",value:function(e){var t=this.props,a=t.hole,n=(t.rows,t.cols),r=this.state.numbers,i=r.indexOf(a);if(function(e,t,a,n){var r=Ue(e,0,n),i=r.row,o=r.col,l=Ue(t,0,n),c=l.row,s=l.col;return Math.abs(i-c)+Math.abs(o-s)===1}(e,i,0,n)){var o=function(e,t,a){var n=[(e=be.a.clone(e))[a],e[t]];return e[t]=n[0],e[a]=n[1],e}(r,e,i);this.setState({numbers:o})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.rows,n=t.cols,i=t.width,o=t.height,l=this.state.numbers,c=Ae(l),s=Math.round(i/n),u=Math.round(o/a),m=Object(he.a)({},Re,{width:i,height:o});return r.a.createElement("div",null,r.a.createElement("ul",{style:m},l.map(function(t,a){return r.a.createElement(ze,Object.assign({},e.props,{index:a,number:t,key:t,width:s,height:u,image:Fe[t],onClick:e.handleTileClick}))})),r.a.createElement("button",{style:Ge,onClick:this.handleButtonClick},c?"Start":"Restart"))}}]),t}(_e),Je=function(e){function t(){return Object(L.a)(this,t),Object(G.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement(Ke,{rows:3,cols:3,hole:8,width:300,height:300})}}]),t}(_e);var He=Object(S.withStyles)(function(e){return{footer:{backgroundColor:"#66bb6a",padding:6*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null),r.a.createElement("footer",{className:t.footer},r.a.createElement(N.a,{variant:"h6",align:"center",gutterBottom:!0},"Go! Play! Ruff!"),r.a.createElement(N.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"\u201cOnce you have had a wonderful dog, a life without one, is a life diminished.\u201d Dean Koontz (author, Whispers)")))}),Ve=a(89),Xe=a.n(Ve),Ye=a(39),$e=a.n(Ye),qe=a(46),Qe=a.n(qe),Ze=a(90),et=a.n(Ze),tt=a(145),at=a.n(tt),nt=a(146),rt=a.n(nt),it=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(G.a)(this,Object(P.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value,n=e.target.name;console.log(e.target),a.setState(Object(l.a)({},n,t))},a.state={value:""},a}return Object(A.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement($e.a,{className:e.root,elevation:1},r.a.createElement(et.a,{className:e.iconButton,"aria-label":"Menu"},r.a.createElement(at.a,null)),r.a.createElement(Qe.a,{className:e.input,value:this.state.value,onChange:this.handleInputChange,placeholder:"City, State",name:"value"}),r.a.createElement(et.a,{className:e.iconButton,"aria-label":"Search"},r.a.createElement(rt.a,null)),r.a.createElement(ue.a,{className:e.divider}))}}]),t}(n.Component),ot=Object(S.withStyles)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{width:1,height:28,margin:4}})(it),lt=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(G.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={restaurants:[]},a}return Object(A.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;ne.a.get("/go/restaurants").then(function(t){var a=t.data;console.log(t.data),e.setState({restaurants:a})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null),r.a.createElement(m.a,{position:"static",className:e.appBar},r.a.createElement(Xe.a,null,r.a.createElement(N.a,{variant:"h6",color:"inherit",noWrap:!0},"Dog-Friendly Resources"))),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(N.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Dog friendly places to go!"),r.a.createElement(N.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Select where to go in or near that location to see 20 websites by picture, restaurant name and summary. Go directly to the website via View button."),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(k.a,{container:!0,spacing:16,justify:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(ot,null)),r.a.createElement(k.a,{item:!0}))))),r.a.createElement("div",{className:s()(e.layout,e.cardGrid)},r.a.createElement(k.a,{container:!0,spacing:40},this.state.restaurants.map(function(t){return r.a.createElement(k.a,{item:!0,key:t,sm:6,md:4,lg:3},r.a.createElement(h.a,{className:e.card},r.a.createElement(j.a,{className:e.cardMedia,image:t.thumbnail,title:"Image title"}),r.a.createElement(v.a,{className:e.cardContent},r.a.createElement(N.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(N.a,null,t.summary)),r.a.createElement(b.a,null,r.a.createElement(z.a,{size:"small",color:"primary"},r.a.createElement("a",{href:t.website,target:"_blank"},"View ")))))})))))}}]),t}(n.Component),ct=Object(S.withStyles)(function(e){return{appBar:{position:"relative",background:"linear-gradient(to left bottom, #66bb6a,#2e7d32, #66bb6a)"},icon:{marginRight:2*e.spacing.unit},heroUnit:{background:"linear-gradient(to right bottom, #e8f5e9, #81c784, #e8f5e9)"},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(l.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}})(lt),st=a(0),ut=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(G.a)(this,Object(P.a)(t).call(this,e))).startTimer=a.startTimer.bind(Object(pe.a)(Object(pe.a)(a))),a.stopTimer=a.stopTimer.bind(Object(pe.a)(Object(pe.a)(a))),a.resetTimer=a.resetTimer.bind(Object(pe.a)(Object(pe.a)(a))),a.state=0,a}return Object(A.a)(t,e),Object(D.a)(t,[{key:"startTimer",value:function(){var e=this;this.timer=setInterval(function(){return e.setState({time:e.state.time+1})},1e3),console.log("start")}},{key:"stopTimer",value:function(){clearInterval(this.timer),console.log("stop")}},{key:"resetTimer",value:function(){this.setState({time:0}),console.log("reset")}},{key:"render",value:function(){return st.createElement("div",null,st.createElement("h3",null,"timer: ",this.state.time))}}]),t}(st.Component),mt=function(){return r.a.createElement("div",{className:"container-fluid mainContainer"},r.a.createElement(de,null),r.a.createElement(ut,null),r.a.createElement(Je,null),r.a.createElement(ct,null),r.a.createElement(He,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(mt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,1,2]]]);
//# sourceMappingURL=main.d7923e4b.chunk.js.map