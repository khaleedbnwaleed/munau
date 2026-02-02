module.exports=[64781,(a,b,c)=>{"use strict";b.exports=a.r(75411).vendored["react-ssr"].ReactJsxRuntime},72146,(a,b,c)=>{"use strict";b.exports=a.r(75411).vendored["react-ssr"].ReactServerDOMTurbopackClient},59947,(a,b,c)=>{"use strict";b.exports=a.r(75411).vendored["react-ssr"].ReactDOM},54161,a=>{"use strict";var b=a.i(64781),c=a.i(12668),d=a.i(42261),e=a.i(97895);let f=(0,d.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function g({className:a,variant:d,asChild:g=!1,...h}){let i=g?c.Slot:"span";return(0,b.jsx)(i,{"data-slot":"badge",className:(0,e.cn)(f({variant:d}),a),...h})}a.s(["Badge",()=>g])},11374,a=>{"use strict";let b=(0,a.i(61237).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);a.s(["ArrowLeft",()=>b],11374)},61237,a=>{"use strict";var b=a.i(89982);let c=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let e=(0,b.forwardRef)(({color:a="currentColor",size:e=24,strokeWidth:f=2,absoluteStrokeWidth:g,className:h="",children:i,iconNode:j,...k},l)=>(0,b.createElement)("svg",{ref:l,...d,width:e,height:e,stroke:a,strokeWidth:g?24*Number(f)/Number(e):f,className:c("lucide",h),...k},[...j.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(i)?i:[i]])),f=(a,d)=>{let f=(0,b.forwardRef)(({className:f,...g},h)=>(0,b.createElement)(e,{ref:h,iconNode:d,className:c(`lucide-${a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,f),...g}));return f.displayName=`${a}`,f};a.s(["default",()=>f],61237)},3643,a=>{"use strict";var b=a.i(89982),c=a.i(59947),d=a.i(12668),e=a.i(64781),f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((a,c)=>{let f=b.forwardRef((a,b)=>{let{asChild:f,...g}=a,h=f?d.Slot:c;return(0,e.jsx)(h,{...g,ref:b})});return f.displayName=`Primitive.${c}`,{...a,[c]:f}},{});function g(a,b){a&&c.flushSync(()=>a.dispatchEvent(b))}a.s(["Primitive",()=>f,"dispatchDiscreteCustomEvent",()=>g])},5522,17171,a=>{"use strict";var b=a.i(64781),c=a.i(97895);function d({className:a,type:d,...e}){return(0,b.jsx)("input",{type:d,"data-slot":"input",className:(0,c.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...e})}a.s(["Input",()=>d],5522);var e=a.i(89982),f=a.i(3643),g=e.forwardRef((a,c)=>(0,b.jsx)(f.Primitive.label,{...a,ref:c,onMouseDown:b=>{b.target.closest("button, input, select, textarea")||(a.onMouseDown?.(b),!b.defaultPrevented&&b.detail>1&&b.preventDefault())}}));function h({className:a,...d}){return(0,b.jsx)(g,{"data-slot":"label",className:(0,c.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",a),...d})}g.displayName="Label",a.s(["Label",()=>h],17171)},33038,a=>{"use strict";let b=(0,a.i(61237).default)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);a.s(["CreditCard",()=>b],33038)},69617,a=>{"use strict";let b=(0,a.i(61237).default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);a.s(["Download",()=>b],69617)},12582,a=>{"use strict";let b=(0,a.i(61237).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);a.s(["AlertCircle",()=>b],12582)},69967,a=>{"use strict";var b=a.i(64781),c=a.i(89982),d=a.i(30505),e=a.i(40695),f=a.i(3130),g=a.i(54161),h=a.i(5522),i=a.i(17171),j=a.i(11374),k=a.i(69617),l=a.i(33038),m=a.i(12582);function n(){let[a,n]=(0,c.useState)([{id:1,description:"Tuition Fee - 2024/2025 Session",amount:2e5,status:"paid",date:"2024-01-15"},{id:2,description:"Development Fee",amount:3e4,status:"pending",dueDate:"2024-02-28"},{id:3,description:"Registration Fee",amount:5e3,status:"paid",date:"2024-01-10"},{id:4,description:"Library & ID Card Fee",amount:1e4,status:"overdue",dueDate:"2024-01-31"}]),o=(0,c.useMemo)(()=>a.reduce((a,b)=>a+b.amount,0),[a]),p=(0,c.useMemo)(()=>a.filter(a=>"paid"===a.status).reduce((a,b)=>a+b.amount,0),[a]),q=(0,c.useMemo)(()=>a.filter(a=>"paid"!==a.status).reduce((a,b)=>a+b.amount,0),[a]),r=(0,c.useMemo)(()=>a.filter(a=>"overdue"===a.status).reduce((a,b)=>a+b.amount,0),[a]),[s,t]=(0,c.useState)(!1),[u,v]=(0,c.useState)(!1),[w,x]=(0,c.useState)(0),[y,z]=(0,c.useState)(""),[A,B]=(0,c.useState)(null),[C,D]=(0,c.useState)("Online Payment Gateway"),E=(a=0,b="",c=null)=>{x(a),z(b),B(c),D("Online Payment Gateway"),t(!0)},F=async()=>{if(!w||w<=0)return void alert("Please enter a valid amount");v(!0),await new Promise(a=>setTimeout(a,1500));let a=new Date().toISOString().slice(0,10);A?n(b=>b.map(b=>b.id===A?{...b,status:"paid",date:a}:b)):n(b=>[...b,{id:Date.now(),description:y||"Online Payment",amount:Number(w),status:"paid",date:a}]),v(!1),t(!1),alert("Payment successful (mock).")},G=a=>`₦${a.toLocaleString()}`,H=()=>`TX-${Date.now().toString(36)}-${Math.floor(1e4*Math.random())}`;return(0,b.jsx)("div",{className:"min-h-screen bg-background p-6",children:(0,b.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,b.jsxs)("div",{className:"mb-8",children:[(0,b.jsx)(d.default,{href:"/student/dashboard",children:(0,b.jsxs)(e.Button,{variant:"ghost",className:"gap-2 mb-4",children:[(0,b.jsx)(j.ArrowLeft,{className:"w-4 h-4"}),"Back to Dashboard"]})}),(0,b.jsx)("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Fees & Payments"}),(0,b.jsx)("p",{className:"text-muted-foreground",children:"View and manage your academic fees and payments"})]}),(0,b.jsxs)("div",{className:"grid md:grid-cols-4 gap-4 mb-8",children:[(0,b.jsxs)(f.Card,{className:"p-6",children:[(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Total Due"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-foreground",children:["₦",o.toLocaleString()]})]}),(0,b.jsxs)(f.Card,{className:"p-6",children:[(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Paid"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-green-600",children:["₦",p.toLocaleString()]})]}),(0,b.jsxs)(f.Card,{className:"p-6",children:[(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Outstanding"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-destructive",children:["₦",q.toLocaleString()]})]}),(0,b.jsxs)(f.Card,{className:"p-6",children:[(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-2",children:"Overdue"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-orange-600",children:["₦",r.toLocaleString()]})]})]}),(0,b.jsx)(f.Card,{className:"p-4 mb-8 border-orange-200 bg-orange-50",children:(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsx)(m.AlertCircle,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"font-semibold text-orange-900",children:"Outstanding Balance Alert"}),(0,b.jsx)("p",{className:"text-sm text-orange-800 mt-1",children:"You have ₦45,000 in outstanding fees. Please pay to avoid academic sanctions."})]})]})}),(0,b.jsxs)(f.Card,{className:"p-6 mb-8",children:[(0,b.jsx)("h2",{className:"text-xl font-bold mb-6 text-foreground",children:"Payment Details"}),(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{className:"border-b border-border",children:[(0,b.jsx)("th",{className:"text-left py-3 px-4 text-foreground font-semibold",children:"Description"}),(0,b.jsx)("th",{className:"text-right py-3 px-4 text-foreground font-semibold",children:"Amount"}),(0,b.jsx)("th",{className:"text-center py-3 px-4 text-foreground font-semibold",children:"Status"}),(0,b.jsx)("th",{className:"text-right py-3 px-4 text-foreground font-semibold",children:"Date"}),(0,b.jsx)("th",{className:"text-right py-3 px-4 text-foreground font-semibold",children:"Actions"})]})}),(0,b.jsx)("tbody",{children:a.map(a=>(0,b.jsxs)("tr",{className:"border-b border-border hover:bg-secondary/50",children:[(0,b.jsx)("td",{className:"py-4 px-4 text-foreground",children:a.description}),(0,b.jsxs)("td",{className:"py-4 px-4 text-right font-semibold text-foreground",children:["₦",a.amount.toLocaleString()]}),(0,b.jsx)("td",{className:"py-4 px-4 text-center",children:(0,b.jsx)(g.Badge,{variant:"paid"===a.status?"default":"pending"===a.status?"secondary":"destructive",children:a.status.charAt(0).toUpperCase()+a.status.slice(1)})}),(0,b.jsx)("td",{className:"py-4 px-4 text-right text-muted-foreground",children:a.date||a.dueDate}),(0,b.jsx)("td",{className:"py-4 px-4 text-right",children:"paid"!==a.status?(0,b.jsx)(e.Button,{size:"sm",onClick:()=>E(a.amount,a.description,a.id),children:"Pay"}):(0,b.jsxs)(e.Button,{variant:"outline",size:"sm",className:"gap-2",onClick:()=>{let b,c,d,e,f,g;return b=H(),c=new Date().toISOString().slice(0,10),d={transactionId:b,date:a.date||c,description:a.description,amount:a.amount,paidBy:"Student",method:a.method||"Online Payment Gateway"},e=new Blob([`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Receipt ${b}</title>
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
            <img src="/logo.png" alt="Logo" class="logo" />
            <div>
              <h2>Munau College</h2>
              <div class="muted">Official Payment Receipt</div>
            </div>
          </div>

          <div style="margin-top:16px">
            <div><strong>Transaction ID:</strong> ${d.transactionId}</div>
            <div><strong>Date:</strong> ${d.date}</div>
            <div><strong>Payer:</strong> ${d.paidBy}</div>
            <div><strong>Method:</strong> ${d.method}</div>
          </div>

          <table>
            <tr>
              <td>${d.description}</td>
              <td style="text-align:right">${G(d.amount)}</td>
            </tr>
            <tr>
              <td class="total">Amount Paid</td>
              <td class="total" style="text-align:right">${G(d.amount)}</td>
            </tr>
          </table>

          <p class="muted" style="margin-top:18px">This is a system generated receipt for demonstration purposes.</p>
        </div>
      </body>
    </html>`],{type:"text/html"}),f=URL.createObjectURL(e),void((g=document.createElement("a")).href=f,g.download=`receipt-${b}.html`,document.body.appendChild(g),g.click(),setTimeout(()=>{URL.revokeObjectURL(f),g.remove()},1e3))},children:[(0,b.jsx)(k.Download,{className:"w-4 h-4"}),"Receipt"]})})]},a.id))})]})})]}),(0,b.jsxs)(f.Card,{className:"p-6 mb-8",children:[(0,b.jsx)("h2",{className:"text-xl font-bold mb-6 text-foreground",children:"Payment Methods"}),(0,b.jsx)("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"Bank Transfer",icon:"🏦"},{name:"Online Payment Gateway",icon:"💳"},{name:"Mobile Money",icon:"📱"}].map(a=>(0,b.jsxs)(f.Card,{className:"p-4 border border-border hover:border-primary hover:shadow-lg transition cursor-pointer",children:[(0,b.jsx)("p",{className:"text-3xl mb-2",children:a.icon}),(0,b.jsx)("p",{className:"font-semibold text-foreground",children:a.name})]},a.name))})]}),s&&(0,b.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:(0,b.jsxs)(f.Card,{className:"p-6 w-full max-w-md",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Mock Payment Gateway"}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"This is a simulated payment flow for demo purposes."}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(i.Label,{htmlFor:"amount",children:"Amount"}),(0,b.jsx)(h.Input,{id:"amount",type:"number",value:w,onChange:a=>x(Number(a.target.value)),className:"mt-1"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(i.Label,{htmlFor:"method",children:"Payment Method"}),(0,b.jsxs)("select",{id:"method",value:C,onChange:a=>D(a.target.value),className:"w-full mt-1 rounded-md border px-3 py-2",children:[(0,b.jsx)("option",{children:"Online Payment Gateway"}),(0,b.jsx)("option",{children:"Bank Transfer"}),(0,b.jsx)("option",{children:"Mobile Money"})]})]}),(0,b.jsxs)("div",{className:"flex gap-2 mt-4",children:[(0,b.jsxs)(e.Button,{loading:u,onClick:F,className:"flex-1",children:[(0,b.jsx)(l.CreditCard,{className:"w-4 h-4"}),"Pay Now"]}),(0,b.jsx)(e.Button,{variant:"outline",className:"flex-1",onClick:()=>t(!1),children:"Cancel"})]})]})]})}),(0,b.jsxs)("div",{className:"flex gap-4",children:[(0,b.jsxs)(e.Button,{className:"flex-1 gap-2",size:"lg",onClick:()=>E(q,"Outstanding Fees"),children:[(0,b.jsx)(l.CreditCard,{className:"w-5 h-5"}),"Pay Outstanding Fees"]}),(0,b.jsxs)(e.Button,{variant:"outline",className:"flex-1 gap-2 bg-transparent",size:"lg",onClick:()=>{let b,c,d,e,f,g;return b=H(),c=a.map(a=>`
      <tr>
        <td>${a.description}</td>
        <td style="text-align:right">${G(a.amount)}</td>
        <td style="text-align:center">${a.status}</td>
        <td style="text-align:right">${a.date||a.dueDate||""}</td>
      </tr>
    `).join(""),d=a.reduce((a,b)=>a+b.amount,0),e=new Blob([`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Payment Summary ${b}</title>
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
            <img src="/logo.png" alt="Logo" class="logo" />
            <div>
              <h2>Munau College</h2>
              <div class="muted">Payment Summary</div>
            </div>
          </div>

          <p><strong>Payer:</strong> Student</p>

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
              ${c}
              <tr>
                <td class="total">Total</td>
                <td class="total" style="text-align:right">${G(d)}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>`],{type:"text/html"}),f=URL.createObjectURL(e),void((g=document.createElement("a")).href=f,g.download=`payment-summary-${b}.html`,document.body.appendChild(g),g.click(),setTimeout(()=>{URL.revokeObjectURL(f),g.remove()},1e3))},children:[(0,b.jsx)(k.Download,{className:"w-5 h-5"}),"Download Receipt"]})]})]})})}a.s(["default",()=>n])}];

//# sourceMappingURL=_7a893b71._.js.map