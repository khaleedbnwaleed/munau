(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},94179,e=>{"use strict";var t=e.i(43476),a=e.i(91918),s=e.i(25913),i=e.i(47163);let r=(0,s.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function n({className:e,variant:s,asChild:n=!1,...d}){let o=n?a.Slot:"span";return(0,t.jsx)(o,{"data-slot":"badge",className:(0,i.cn)(r({variant:s}),e),...d})}e.s(["Badge",()=>n])},71689,e=>{"use strict";let t=(0,e.i(75254).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],71689)},75254,e=>{"use strict";var t=e.i(71645);let a=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:d="",children:o,iconNode:l,...c},m)=>(0,t.createElement)("svg",{ref:m,...s,width:i,height:i,stroke:e,strokeWidth:n?24*Number(r)/Number(i):r,className:a("lucide",d),...c},[...l.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(o)?o:[o]])),r=(e,s)=>{let r=(0,t.forwardRef)(({className:r,...n},d)=>(0,t.createElement)(i,{ref:d,iconNode:s,className:a(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...n}));return r.displayName=`${e}`,r};e.s(["default",()=>r],75254)},48425,e=>{"use strict";var t=e.i(71645),a=e.i(74080),s=e.i(91918),i=e.i(43476),r=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,a)=>{let r=t.forwardRef((e,t)=>{let{asChild:r,...n}=e,d=r?s.Slot:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(d,{...n,ref:t})});return r.displayName=`Primitive.${a}`,{...e,[a]:r}},{});function n(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>r,"dispatchDiscreteCustomEvent",()=>n])},23750,10708,e=>{"use strict";var t=e.i(43476),a=e.i(47163);function s({className:e,type:s,...i}){return(0,t.jsx)("input",{type:s,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...i})}e.s(["Input",()=>s],23750);var i=e.i(71645),r=e.i(48425),n=i.forwardRef((e,a)=>(0,t.jsx)(r.Primitive.label,{...e,ref:a,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));function d({className:e,...s}){return(0,t.jsx)(n,{"data-slot":"label",className:(0,a.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...s})}n.displayName="Label",e.s(["Label",()=>d],10708)},61659,e=>{"use strict";let t=(0,e.i(75254).default)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);e.s(["CreditCard",()=>t],61659)},40160,e=>{"use strict";let t=(0,e.i(75254).default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);e.s(["Download",()=>t],40160)},63209,e=>{"use strict";let t=(0,e.i(75254).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>t],63209)},2968,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(22016),i=e.i(67881),r=e.i(70065),n=e.i(94179),d=e.i(23750),o=e.i(10708),l=e.i(71689),c=e.i(40160),m=e.i(61659),u=e.i(63209);function x(){let[e,x]=(0,a.useState)([{id:1,description:"Tuition Fee - 2024/2025 Session",amount:2e5,status:"paid",date:"2024-01-15"},{id:2,description:"Development Fee",amount:3e4,status:"pending",dueDate:"2024-02-28"},{id:3,description:"Registration Fee",amount:5e3,status:"paid",date:"2024-01-10"},{id:4,description:"Library & ID Card Fee",amount:1e4,status:"overdue",dueDate:"2024-01-31"}]),p=(0,a.useMemo)(()=>e.reduce((e,t)=>e+t.amount,0),[e]),h=(0,a.useMemo)(()=>e.filter(e=>"paid"===e.status).reduce((e,t)=>e+t.amount,0),[e]),g=(0,a.useMemo)(()=>e.filter(e=>"paid"!==e.status).reduce((e,t)=>e+t.amount,0),[e]),f=(0,a.useMemo)(()=>e.filter(e=>"overdue"===e.status).reduce((e,t)=>e+t.amount,0),[e]),[b,y]=(0,a.useState)(!1),[v,j]=(0,a.useState)(!1),[w,N]=(0,a.useState)(0),[k,C]=(0,a.useState)(""),[S,P]=(0,a.useState)(null),[$,D]=(0,a.useState)("Online Payment Gateway"),L=(e=0,t="",a=null)=>{N(e),C(t),P(a),D("Online Payment Gateway"),y(!0)},O=async()=>{if(!w||w<=0)return void alert("Please enter a valid amount");j(!0),await new Promise(e=>setTimeout(e,1500));let e=new Date().toISOString().slice(0,10);S?x(t=>t.map(t=>t.id===S?{...t,status:"paid",date:e}:t)):x(t=>[...t,{id:Date.now(),description:k||"Online Payment",amount:Number(w),status:"paid",date:e}]),j(!1),y(!1),alert("Payment successful (mock).")},M=e=>`₦${e.toLocaleString()}`,A=()=>`TX-${Date.now().toString(36)}-${Math.floor(1e4*Math.random())}`;return(0,t.jsx)("div",{className:"min-h-screen bg-background p-6",children:(0,t.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)(s.default,{href:"/student/dashboard",children:(0,t.jsxs)(i.Button,{variant:"ghost",className:"gap-2 mb-4",children:[(0,t.jsx)(l.ArrowLeft,{className:"w-4 h-4"}),"Back to Dashboard"]})}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Fees & Payments"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"View and manage your academic fees and payments"})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-4 gap-4 mb-8",children:[(0,t.jsxs)(r.Card,{className:"p-6",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Total Due"}),(0,t.jsxs)("p",{className:"text-2xl font-bold text-foreground",children:["₦",p.toLocaleString()]})]}),(0,t.jsxs)(r.Card,{className:"p-6",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Paid"}),(0,t.jsxs)("p",{className:"text-2xl font-bold text-green-600",children:["₦",h.toLocaleString()]})]}),(0,t.jsxs)(r.Card,{className:"p-6",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Outstanding"}),(0,t.jsxs)("p",{className:"text-2xl font-bold text-destructive",children:["₦",g.toLocaleString()]})]}),(0,t.jsxs)(r.Card,{className:"p-6",children:[(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Overdue"}),(0,t.jsxs)("p",{className:"text-2xl font-bold text-orange-600",children:["₦",f.toLocaleString()]})]})]}),(0,t.jsx)(r.Card,{className:"p-4 mb-8 border-orange-200 bg-orange-50",children:(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)(u.AlertCircle,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-orange-900",children:"Outstanding Balance Alert"}),(0,t.jsx)("p",{className:"text-sm text-orange-800 mt-1",children:"You have ₦45,000 in outstanding fees. Please pay to avoid academic sanctions."})]})]})}),(0,t.jsxs)(r.Card,{className:"p-6 mb-8",children:[(0,t.jsx)("h2",{className:"text-xl font-bold mb-6 text-foreground",children:"Payment Details"}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("th",{className:"text-left py-3 px-4 text-foreground font-semibold",children:"Description"}),(0,t.jsx)("th",{className:"text-right py-3 px-4 text-foreground font-semibold",children:"Amount"}),(0,t.jsx)("th",{className:"text-center py-3 px-4 text-foreground font-semibold",children:"Status"}),(0,t.jsx)("th",{className:"text-right py-3 px-4 text-foreground font-semibold",children:"Date"}),(0,t.jsx)("th",{className:"text-right py-3 px-4 text-foreground font-semibold",children:"Actions"})]})}),(0,t.jsx)("tbody",{children:e.map(e=>(0,t.jsxs)("tr",{className:"border-b border-border hover:bg-secondary/50",children:[(0,t.jsx)("td",{className:"py-4 px-4 text-foreground",children:e.description}),(0,t.jsxs)("td",{className:"py-4 px-4 text-right font-semibold text-foreground",children:["₦",e.amount.toLocaleString()]}),(0,t.jsx)("td",{className:"py-4 px-4 text-center",children:(0,t.jsx)(n.Badge,{variant:"paid"===e.status?"default":"pending"===e.status?"secondary":"destructive",children:e.status.charAt(0).toUpperCase()+e.status.slice(1)})}),(0,t.jsx)("td",{className:"py-4 px-4 text-right text-muted-foreground",children:e.date||e.dueDate}),(0,t.jsx)("td",{className:"py-4 px-4 text-right",children:"paid"!==e.status?(0,t.jsx)(i.Button,{size:"sm",onClick:()=>L(e.amount,e.description,e.id),children:"Pay"}):(0,t.jsxs)(i.Button,{variant:"outline",size:"sm",className:"gap-2",onClick:()=>{let t,a,s,i,r,n,d,o;return t=A(),a=new Date().toISOString().slice(0,10),s=localStorage.getItem("studentName")||localStorage.getItem("userEmail")||"Student",i=`${window.location.origin}/logo.png`,r={transactionId:t,date:e.date||a,description:e.description,amount:e.amount,paidBy:s,method:e.method||"Online Payment Gateway"},n=new Blob([`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Receipt ${t}</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; padding: 20px; color: #102a43 }
          .receipt { max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 20px }
          .header { display:flex; gap:12px; align-items:center }
          .logo { width:72px; height:72px; object-fit:contain }
          h2{ margin:0 0 6px 0 }
          table{ width:100%; border-collapse:collapse; margin-top:12px }
          td{ padding:8px 0 }
          .total{ font-weight:700; font-size:1.1rem }
          .muted{ color:#6b7280 }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <img src="${i}" alt="Logo" class="logo" />
            <div>
              <h2>Munau College</h2>
              <div class="muted">Official Payment Receipt</div>
            </div>
          </div>

          <div style="margin-top:16px">
            <div><strong>Transaction ID:</strong> ${r.transactionId}</div>
            <div><strong>Date:</strong> ${r.date}</div>
            <div><strong>Payer:</strong> ${r.paidBy}</div>
            <div><strong>Method:</strong> ${r.method}</div>
          </div>

          <table>
            <tr>
              <td>${r.description}</td>
              <td style="text-align:right">${M(r.amount)}</td>
            </tr>
            <tr>
              <td class="total">Amount Paid</td>
              <td class="total" style="text-align:right">${M(r.amount)}</td>
            </tr>
          </table>

          <p class="muted" style="margin-top:18px">This is a system generated receipt for demonstration purposes.</p>
        </div>
      </body>
    </html>`],{type:"text/html"}),d=URL.createObjectURL(n),void((o=document.createElement("a")).href=d,o.download=`receipt-${t}.html`,document.body.appendChild(o),o.click(),setTimeout(()=>{URL.revokeObjectURL(d),o.remove()},1e3))},children:[(0,t.jsx)(c.Download,{className:"w-4 h-4"}),"Receipt"]})})]},e.id))})]})})]}),(0,t.jsxs)(r.Card,{className:"p-6 mb-8",children:[(0,t.jsx)("h2",{className:"text-xl font-bold mb-6 text-foreground",children:"Payment Methods"}),(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"Bank Transfer",icon:"🏦"},{name:"Online Payment Gateway",icon:"💳"},{name:"Mobile Money",icon:"📱"}].map(e=>(0,t.jsxs)(r.Card,{className:"p-4 border border-border hover:border-primary hover:shadow-lg transition cursor-pointer",children:[(0,t.jsx)("p",{className:"text-3xl mb-2",children:e.icon}),(0,t.jsx)("p",{className:"font-semibold text-foreground",children:e.name})]},e.name))})]}),b&&(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:(0,t.jsxs)(r.Card,{className:"p-6 w-full max-w-md",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Mock Payment Gateway"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"This is a simulated payment flow for demo purposes."}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Label,{htmlFor:"amount",children:"Amount"}),(0,t.jsx)(d.Input,{id:"amount",type:"number",value:w,onChange:e=>N(Number(e.target.value)),className:"mt-1"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Label,{htmlFor:"method",children:"Payment Method"}),(0,t.jsxs)("select",{id:"method",value:$,onChange:e=>D(e.target.value),className:"w-full mt-1 rounded-md border px-3 py-2",children:[(0,t.jsx)("option",{children:"Online Payment Gateway"}),(0,t.jsx)("option",{children:"Bank Transfer"}),(0,t.jsx)("option",{children:"Mobile Money"})]})]}),(0,t.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,t.jsxs)(i.Button,{loading:v,onClick:O,className:"flex-1",children:[(0,t.jsx)(m.CreditCard,{className:"w-4 h-4"}),"Pay Now"]}),(0,t.jsx)(i.Button,{variant:"outline",className:"flex-1",onClick:()=>y(!1),children:"Cancel"})]})]})]})}),(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsxs)(i.Button,{className:"flex-1 gap-2",size:"lg",onClick:()=>L(g,"Outstanding Fees"),children:[(0,t.jsx)(m.CreditCard,{className:"w-5 h-5"}),"Pay Outstanding Fees"]}),(0,t.jsxs)(i.Button,{variant:"outline",className:"flex-1 gap-2 bg-transparent",size:"lg",onClick:()=>{let t,a,s,i,r,n,d,o;return t=A(),a=`${window.location.origin}/logo.png`,s=localStorage.getItem("studentName")||localStorage.getItem("userEmail")||"Student",i=e.map(e=>`
      <tr>
        <td>${e.description}</td>
        <td style="text-align:right">${M(e.amount)}</td>
        <td style="text-align:center">${e.status}</td>
        <td style="text-align:right">${e.date||e.dueDate||""}</td>
      </tr>
    `).join(""),r=e.reduce((e,t)=>e+t.amount,0),n=new Blob([`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Payment Summary ${t}</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; padding: 20px; color: #102a43 }
          .receipt { max-width: 800px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 20px }
          .logo { width:72px; height:72px; object-fit:contain }
          table{ width:100%; border-collapse:collapse; margin-top:12px }
          th, td{ padding:8px 0; border-bottom:1px solid #eef2f7 }
          .total{ font-weight:700; font-size:1.1rem }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div style="display:flex; gap:12px; align-items:center">
            <img src="${a}" alt="Logo" class="logo" />
            <div>
              <h2>Munau College</h2>
              <div class="muted">Payment Summary</div>
            </div>
          </div>

          <p><strong>Payer:</strong> ${s}</p>

          <table>
            <thead>
              <tr>
                <th style="text-align:left">Description</th>
                <th style="text-align:right">Amount</th>
                <th style="text-align:center">Status</th>
                <th style="text-align:right">Date</th>
              </tr>
            </thead>
            <tbody>
              ${i}
              <tr>
                <td class="total">Total</td>
                <td class="total" style="text-align:right">${M(r)}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>`],{type:"text/html"}),d=URL.createObjectURL(n),void((o=document.createElement("a")).href=d,o.download=`payment-summary-${t}.html`,document.body.appendChild(o),o.click(),setTimeout(()=>{URL.revokeObjectURL(d),o.remove()},1e3))},children:[(0,t.jsx)(c.Download,{className:"w-5 h-5"}),"Download Receipt"]})]})]})})}e.s(["default",()=>x])}]);