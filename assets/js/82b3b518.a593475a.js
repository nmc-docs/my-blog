"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[420],{8881:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(4848),a=s(8453);const i={sidebar_position:6},o="Setup MongoDB Atlas (Cloud for MongoDB)",c={id:"database/mongodb-cloud-setup",title:"Setup MongoDB Atlas (Cloud for MongoDB)",description:"MongoDB Atlas l\xe0 g\xec?",source:"@site/docs/database/mongodb-cloud-setup.md",sourceDirName:"database",slug:"/database/mongodb-cloud-setup",permalink:"/my-blog/database/mongodb-cloud-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"C\xe1c thao t\xe1c v\u1edbi MongoDB",permalink:"/my-blog/database/mongodb-manipulation"},next:{title:"Savoring the Taste of Coffee Amidst Urban Life",permalink:"/my-blog/coffee-in-street"}},r={},d=[{value:"MongoDB Atlas l\xe0 g\xec?",id:"mongodb-atlas-l\xe0-g\xec",level:2},{value:"C\xe1ch setup MongoDB Atlas",id:"c\xe1ch-setup-mongodb-atlas",level:2},{value:"\u0110\u0103ng nh\u1eadp t\xe0i kho\u1ea3n",id:"\u0111\u0103ng-nh\u1eadp-t\xe0i-kho\u1ea3n",level:3},{value:"T\u1ea1o Organizations",id:"t\u1ea1o-organizations",level:3},{value:"T\u1ea1o Project",id:"t\u1ea1o-project",level:3},{value:"T\u1ea1o Cluster",id:"t\u1ea1o-cluster",level:3},{value:"T\u1ea1o security cho Cluster",id:"t\u1ea1o-security-cho-cluster",level:3},{value:"L\u1ea5y URI c\u1ee7a database",id:"l\u1ea5y-uri-c\u1ee7a-database",level:3},{value:"T\u1ea1o m\u1ed9t server \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 test database",id:"t\u1ea1o-m\u1ed9t-server-\u0111\u01a1n-gi\u1ea3n-\u0111\u1ec3-test-database",level:2},{value:"Xem tr\u1ef1c quan CSDL",id:"xem-tr\u1ef1c-quan-csdl",level:2},{value:"Xem th\xf4ng qua Web",id:"xem-th\xf4ng-qua-web",level:3},{value:"Xem th\xf4ng qua Navicat Premium",id:"xem-th\xf4ng-qua-navicat-premium",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setup-mongodb-atlas-cloud-for-mongodb",children:"Setup MongoDB Atlas (Cloud for MongoDB)"}),"\n",(0,t.jsx)(n.h2,{id:"mongodb-atlas-l\xe0-g\xec",children:"MongoDB Atlas l\xe0 g\xec?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MongoDB Atlas l\xe0 m\u1ed9t n\u1ec1n t\u1ea3ng c\u01a1 s\u1edf d\u1eef li\u1ec7u \u0111\xe1m m\xe2y (cloud database) \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi MongoDB, m\u1ed9t nh\xe0 cung c\u1ea5p c\u01a1 s\u1edf d\u1eef li\u1ec7u NoSQL m\xe3 ngu\u1ed3n m\u1edf. MongoDB Atlas cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea1o, qu\u1ea3n l\xfd v\xe0 s\u1eed d\u1ee5ng c\u01a1 s\u1edf d\u1eef li\u1ec7u MongoDB tr\xean \u0111\xe1m m\xe2y m\xe0 kh\xf4ng c\u1ea7n ph\u1ea3i t\u1ef1 qu\u1ea3n l\xfd c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng."}),"\n",(0,t.jsxs)(n.li,{children:["Hi\u1ec7n t\u1ea1i, b\u1ea3n mi\u1ec5n ph\xed cho MongoDB Atlas cho ph\xe9p l\u01b0u tr\u1eef ",(0,t.jsx)(n.strong,{children:"512MB \u0111\u1ebfn 5GB"})," d\u1eef li\u1ec7u."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1ch-setup-mongodb-atlas",children:"C\xe1ch setup MongoDB Atlas"}),"\n",(0,t.jsx)(n.h3,{id:"\u0111\u0103ng-nh\u1eadp-t\xe0i-kho\u1ea3n",children:"\u0110\u0103ng nh\u1eadp t\xe0i kho\u1ea3n"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["V\xe0o trang web ",(0,t.jsx)(n.a,{href:"https://cloud.mongodb.com/",children:"MongoDB Cloud"})," v\xe0 ti\u1ebfn h\xe0nh \u0111\u0103ng nh\u1eadp (n\u1ebfu ch\u01b0a c\xf3 t\xe0i kho\u1ea3n th\xec \u0111\u0103ng k\xfd tr\u01b0\u1edbc)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"t\u1ea1o-organizations",children:"T\u1ea1o Organizations"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704103488109",src:s(5505).A+"",width:"1637",height:"676"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704103800790",src:s(2781).A+"",width:"882",height:"1518"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704103869718",src:s(5764).A+"",width:"891",height:"710"})}),"\n",(0,t.jsx)(n.h3,{id:"t\u1ea1o-project",children:"T\u1ea1o Project"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704104098346",src:s(5426).A+"",width:"1647",height:"275"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704104125797",src:s(4427).A+"",width:"876",height:"436"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704104150240",src:s(7278).A+"",width:"876",height:"597"})}),"\n",(0,t.jsx)(n.h3,{id:"t\u1ea1o-cluster",children:"T\u1ea1o Cluster"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704117128935",src:s(166).A+"",width:"1258",height:"823"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704117279339",src:s(9139).A+"",width:"938",height:"855"})}),"\n",(0,t.jsx)(n.h3,{id:"t\u1ea1o-security-cho-cluster",children:"T\u1ea1o security cho Cluster"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704117523510",src:s(584).A+"",width:"1060",height:"880"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ph\u1ea7n ti\u1ebfp theo, ta s\u1ebd th\xeam c\xe1c \u0111\u1ecba ch\u1ec9 IP \u0111\u01b0\u1ee3c ph\xe9p truy c\u1eadp \u0111\u1ebfn Database:"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704117609285",src:s(6836).A+"",width:"1002",height:"852"})}),"\n",(0,t.jsx)(n.h3,{id:"l\u1ea5y-uri-c\u1ee7a-database",children:"L\u1ea5y URI c\u1ee7a database"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704119113301",src:s(7713).A+"",width:"1320",height:"751"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704119149780",src:s(4955).A+"",width:"805",height:"837"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704119227604",src:s(5555).A+"",width:"808",height:"798"})}),"\n",(0,t.jsx)(n.h2,{id:"t\u1ea1o-m\u1ed9t-server-\u0111\u01a1n-gi\u1ea3n-\u0111\u1ec3-test-database",children:"T\u1ea1o m\u1ed9t server \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 test database"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t server \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 th\xeam m\u1edbi m\u1ed9t user v\xe0o CSDL:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import express from "express";\nimport mongoose from "mongoose";\n\nconst app = express();\nconst port = 8080;\n\nmongoose.connect(\n  //Ch\xfa \xfd: "ansta-database" ch\xednh l\xe0 database name trong CSDL\n  "mongodb+srv://minhchi1509:ptit_15092002@cluster0.u5c2soc.mongodb.net/ansta-database"\n);\n\nconst UserSchema = new mongoose.Schema(\n  {\n    username: { type: String, required: true },\n    password: { type: String, required: true },\n    email: { type: String, required: true },\n    address: { type: String, required: true },\n  },\n  { collection: "users" } // T\xean b\u1ea3ng\n);\n\nconst User = mongoose.model("User", UserSchema);\n\napp.use(express.json());\n\napp.post("/users", async (req, res) => {\n  try {\n    const newUser = new User(req.body);\n    await newUser.save();\n    res.status(201).json(newUser);\n  } catch (error) {\n    console.error(error);\n    res.status(500).send("Internal Server Error");\n  }\n});\n\napp.listen(port, () => {\n  console.log(`Server is running!`);\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"xem-tr\u1ef1c-quan-csdl",children:"Xem tr\u1ef1c quan CSDL"}),"\n",(0,t.jsx)(n.h3,{id:"xem-th\xf4ng-qua-web",children:"Xem th\xf4ng qua Web"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704121291179",src:s(796).A+"",width:"1894",height:"755"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704121330723",src:s(6053).A+"",width:"1896",height:"440"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704121384298",src:s(8041).A+"",width:"1905",height:"745"})}),"\n",(0,t.jsx)(n.h3,{id:"xem-th\xf4ng-qua-navicat-premium",children:"Xem th\xf4ng qua Navicat Premium"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704121449647",src:s(5111).A+"",width:"564",height:"619"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704121624699",src:s(4637).A+"",width:"792",height:"951"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1704121663854",src:s(9191).A+"",width:"1105",height:"498"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5505:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704103488109-57b13eb524fa21c87ae8410b7c06ea41.png"},2781:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704103800790-9d93687acb4e457e6a1e7fb333f47a01.png"},5764:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704103869718-d871763de859205ad0da2baae861fdd4.png"},5426:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704104098346-c37eca667e6266afb329086630420fb2.png"},4427:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704104125797-36792bc53307e9db20e47b8ef0f2d812.png"},7278:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704104150240-0f590a3eb1a755fd8cdf2597d6737d17.png"},166:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704117128935-b97d0f025e97a29326befd1e6279e873.png"},9139:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704117279339-d88bc7df1060292c26fae0abe235ad7c.png"},584:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704117523510-a7eb86e70128da8188d4330c7c4ec263.png"},6836:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704117609285-4f40dc3eb530658b61adc3f7efa8f8c1.png"},7713:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704119113301-027abfa00a49cae9a158b1b71a71727b.png"},4955:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704119149780-1c11a82bb42720801c192bc07ef7d75a.png"},5555:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704119227604-4fa82b6a0b2b3449f3a46775801a6d70.png"},796:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704121291179-e1b650013b3a894fbcdb35ae081e2413.png"},6053:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704121330723-d3e53ae92afadb99dea9e7315dbdab26.png"},8041:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704121384298-cb69b16c44c1ee7c8a5abd82f1aeea05.png"},5111:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704121449647-75cace089d77748a5b0283bbd004657d.png"},4637:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704121624699-0af3ae3fe65465d84995c0c1698eaae6.png"},9191:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1704121663854-01267dce975638c808cdce9827a1b390.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);