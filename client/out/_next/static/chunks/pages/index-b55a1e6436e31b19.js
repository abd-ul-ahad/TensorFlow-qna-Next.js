(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(85)}])},3056:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var s=l(5893);function a(){return(0,s.jsx)("div",{className:"absolute bg-[rgba(0,0,0,0.2)] w-screen h-screen flex justify-center items-center",children:(0,s.jsxs)("div",{className:"lds-default",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})}},85:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return g}});var s=l(5893),a=l(2274),r=l.n(a),n=l(7294),o=l(6775);l(9084),l(4582);var i=l(3056),c=l(7516),d=l(5434),u=l(6893),x=l(2585),p=l(1163),f=l(1649),h=l(1724);function g(){let e=(0,p.useRouter)(),t=(0,f.v9)(e=>e.user),l=(0,f.I0)(),[a,x]=(0,n.useState)(),[g,y]=(0,n.useState)(!0),[b,j]=(0,n.useState)([""]),[w,N]=(0,n.useState)(""),[C,k]=(0,n.useState)([]),[_,S]=(0,n.useState)([0]),[I,P]=(0,n.useState)(1),[E,O]=(0,n.useState)(),A=(e,t)=>{let l=[...b];l[t]=e.target.value,j(l)},G=async e=>{var l;if(""===b[0]||""===w){y(!1);return}let s=b[e],a=[...C],r=await F(s),n=-1/0,o=null;null==r||r.forEach(e=>{e.score>n&&(n=e.score,o=e)});let i=await fetch("https://qna-cyan.vercel.app/api/user/passages",{method:"PUT",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:null===(l=JSON)||void 0===l?void 0:l.stringify({passage:w,token:t.token})}),c=await i.json();(null==c?void 0:c.done)&&O(c),a[e]=o,k(a),y(!1)},T=async()=>{var e;y(!0);let l=await fetch("https://qna-cyan.vercel.app/api/user/clear",{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:null===(e=JSON)||void 0===e?void 0:e.stringify({token:t.token})}),s=await l.json();(null==s?void 0:s.done)&&O(s),y(!1)},L=async()=>{let e=await o.z();x(e),y(!1)},F=async e=>{try{let t=await (null==a?void 0:a.findAnswers(e,w));return t}catch(e){}},q=async()=>{var t,l,s;try{let e=await fetch("https://qna-cyan.vercel.app/api/user/passages",{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:null===(l=JSON)||void 0===l?void 0:l.stringify({token:null===(t=localStorage)||void 0===t?void 0:t.getItem("__token_")})}),s=await e.json();O(s)}catch(t){null===(s=localStorage)||void 0===s||s.removeItem("__token_"),e.push("/auth/login")}},z=()=>{try{var t;y(!0),l((0,h.kS)()),null===(t=localStorage)||void 0===t||t.removeItem("__token_"),e.reload()}catch(e){}};return(0,n.useEffect)(()=>{try{var t;(null===(t=localStorage)||void 0===t?void 0:t.getItem("__token_"))!==null?(L(),q()):null==e||e.push("/auth/login")}catch(e){}},[]),(0,s.jsxs)("div",{className:"bg-[var(--bg-primary)] h-screen",children:[!0===g&&(0,s.jsx)(i.Z,{}),(0,s.jsxs)("main",{className:"".concat(r().className," flex lg:flex-row flex-col justify-center items-start"),children:[(0,s.jsx)(v,{name:null==E?void 0:E.name,handleLogout:z,passages:null==E?void 0:E.passages,setPassage:N,handleClear:T}),(0,s.jsx)(m,{name:null==E?void 0:E.name,handleLogout:z,passages:null==E?void 0:E.passages,setPassage:N,handleClear:T}),(0,s.jsx)("div",{className:"w-full py-8 px-5 md:px-10 lg:px-0",children:(0,s.jsxs)("div",{className:"w-full space-y-3 flex justify-center items-center flex-col",children:[(0,s.jsx)("textarea",{rows:8,placeholder:"Passage",style:{boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"},value:w,className:"py-4 px-5 rounded-lg bg-[var(--bg-sec)] w-full lg:w-1/2 outline-none caret-white text-[var(--text-color)]",onChange:e=>N(e.target.value)}),(0,s.jsxs)("div",{className:"lg:w-1/2 w-full flex flex-col justify-center items-end space-y-3",children:[(0,s.jsx)("button",{className:"py-3 px-5 rounded-lg bg-[var(--bg-sec)] outline-[var(--button-bg)]",onClick:()=>{S(e=>[...e,I]),j(e=>[...e,""]),k(e=>[...e,null]),P(I+1)},children:(0,s.jsx)(d.x06,{color:"rgb(176, 178, 194)"})}),null==_?void 0:_.map((e,t)=>{var l;return(0,s.jsxs)("div",{className:"w-full flex justify-center items-center flex-col",children:[(0,s.jsxs)("div",{className:"w-full flex justify-center items-center",children:[(0,s.jsx)("input",{style:{boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"},type:"text",placeholder:"Question",className:"py-2 px-5 rounded-l-lg bg-[var(--bg-sec)] w-full outline-none caret-white text-[var(--text-color)]",value:b[t],onChange:e=>A(e,t)}),(0,s.jsx)("button",{className:"py-3 px-5 rounded-r-lg bg-[var(--bg-sec)] outline-[var(--button-bg)]",onClick:()=>{y(!0),G(t)},children:(0,s.jsx)(c.I8l,{color:"rgb(176, 178, 194)"})})]}),C[t]&&(0,s.jsx)("p",{className:"text-white text-sm mt-2 w-full text-start",children:null===(l=C[t])||void 0===l?void 0:l.text})]},t)})]}),(0,s.jsx)("div",{children:""===w&&""===b[0]&&(0,s.jsxs)("button",{onClick:()=>{N("Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."),j(["Who is the CEO of Google?"])},className:"py-3 px-5 text-white flex flex-col justify-center items-center space-y-1 mt-10 text-sm rounded-lg bg-[var(--bg-sec)] outline-[var(--button-bg)]",children:[(0,s.jsx)(u.kXG,{}),(0,s.jsx)("p",{children:"Example"})]})})]})})]})]})}let v=e=>{let{name:t,passages:l,handleLogout:a,setPassage:r,handleClear:n}=e;return(0,s.jsxs)("div",{className:"bg-[#202123] hidden text-[var(--text-color)] lg:flex flex-col justify-between text-sm px-4 py-7 h-full fixed left-0 top-0",children:[(0,s.jsxs)("div",{className:"h-full w-full space-y-1",children:[(0,s.jsx)("button",{onClick:()=>r(""),className:"py-3 px-5 rounded-lg bg-transparent hover:bg-[var(--bg-primary)] w-full flex justify-center items-start",children:(0,s.jsx)(d.x06,{color:"rgb(176, 178, 194)"})}),null==l?void 0:l.map((e,t)=>(0,s.jsxs)("button",{onClick:()=>r(e),className:"py-2 px-6 rounded-lg hover:bg-[var(--bg-primary)] flex justify-start items-center space-x-3",children:[(0,s.jsx)(u.IC0,{color:"var(--text-color)"}),(0,s.jsxs)("p",{children:[e.substring(0,25),"..."]})]},t)),(0,s.jsxs)("button",{onClick:()=>n(),className:"py-2 w-full px-6 rounded-lg hover:bg-[var(--bg-primary)] flex justify-between items-center space-x-3",children:[(0,s.jsx)("p",{children:"Clear"}),(0,s.jsx)(u.IC0,{color:"var(--text-color)"})]})]}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"pt-5",children:(0,s.jsxs)("button",{className:"px-6 rounded-lg hover:bg-[var(--bg-primary)] cursor-default flex justify-between items-center space-x-3 w-full",children:[(0,s.jsx)("p",{className:"py-2",children:t}),(0,s.jsx)("span",{className:"py-2 text-xs hover:bg-[var(--bg-primary)] cursor-pointer px-2",onClick:()=>a(),children:"Logout"})]})})]})},m=e=>{var t;let{name:l,passages:a,handleLogout:r,setPassage:o,handleClear:i}=e,[c,p]=(0,n.useState)(!1);try{null===(t=document)||void 0===t||t.addEventListener("scroll",()=>p(!1))}catch(e){}return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex justify-between items-center px-3 py-2 lg:hidden",children:(0,s.jsxs)("div",{className:"flex justify-center items-center",children:[(0,s.jsx)("div",{className:"flex justify-start items-center pl-2 mt-2",children:(0,s.jsx)("button",{onClick:()=>p(!c),style:{boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"},className:"py-3 px-6 rounded-lg bg-transparent hover:bg-[#202123] w-full flex justify-center items-start",children:(0,s.jsx)(x.vHB,{color:"rgb(176, 178, 194)"})})}),(0,s.jsx)("div",{className:"absolute top-0 ".concat(c?"left-0":"-left-[100%]"," duration-500 w-full h-full bg-[#202123] py-4 flex flex-col justify-between overflow-hidden"),children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex justify-end px-3",children:(0,s.jsx)("button",{className:"py-2 px-2",onClick:()=>p(!c),children:(0,s.jsx)(x.vHB,{color:"rgb(176, 178, 194)"})})}),(0,s.jsx)("div",{className:"text-[var(--text-color)] lg:flex flex-col justify-between text-sm px-4 py-7 h-full",children:(0,s.jsxs)("div",{className:"h-full w-full space-y-1",children:[(0,s.jsx)("button",{onClick:()=>{p(!c),o("")},className:"py-3 px-5 rounded-lg bg-transparent hover:bg-[var(--bg-primary)] w-full flex justify-center items-start",children:(0,s.jsx)(d.x06,{color:"rgb(176, 178, 194)"})}),null==a?void 0:a.map((e,t)=>(0,s.jsxs)("button",{onClick:()=>{p(!c),o(e)},className:"py-2 px-6 rounded-lg hover:bg-[var(--bg-primary)] flex justify-start items-center space-x-3",children:[(0,s.jsx)(u.IC0,{color:"var(--text-color)"}),(0,s.jsxs)("p",{children:[e.substring(0,25),"..."]})]},t)),(0,s.jsxs)("button",{onClick:()=>{p(!c),i()},className:"py-2 w-full px-6 rounded-lg hover:bg-[var(--bg-primary)] flex justify-between items-center space-x-3",children:[(0,s.jsx)("p",{children:"Clear"}),(0,s.jsx)(u.IC0,{color:"var(--text-color)"})]})]})}),(0,s.jsxs)("div",{className:"pt-5 absolute bottom-0 w-full px-2 py-4",children:[(0,s.jsx)("hr",{}),(0,s.jsxs)("button",{className:"px-6 text-white rounded-lg pt-3 hover:bg-[var(--bg-primary)] cursor-default flex justify-between items-center space-x-3 w-full",children:[(0,s.jsx)("p",{className:"py-2",children:l}),(0,s.jsx)("span",{style:{boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"},className:"py-2 text-xs hover:bg-[var(--bg-primary)] cursor-pointer px-2",onClick:()=>{p(!c),r()},children:"Logout"})]})]})]})})]})})})}},2274:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},914:function(){},5410:function(){},8628:function(){},5042:function(){}},function(e){e.O(0,[228,874,980,750,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);