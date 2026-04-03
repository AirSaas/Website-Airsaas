import{n as e}from"./chunk-vNrZSFDR.js";import{d as t}from"./iframe-DR_rn_OD.js";import{n,r,t as i}from"./AnimateOnScroll-BpURAHN9.js";function a({label:e}){return(0,o.jsx)(`div`,{className:`rounded-[1.25rem] bg-primary-2 border border-primary-40 p-8 text-center`,children:(0,o.jsx)(`span`,{className:`font-bold text-primary`,style:{fontSize:`1.5rem`},children:e})})}var o,s,c,l;e((()=>{o=t(),r(),s={title:`Primitives/AnimateOnScroll`,component:n,parameters:{layout:`fullscreen`}},c={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-[6rem] p-10 max-w-[60rem] mx-auto`,children:[(0,o.jsxs)(`div`,{className:`text-center py-20`,children:[(0,o.jsx)(`h1`,{className:`font-black text-foreground`,style:{fontSize:`2rem`},children:`Scroll down to see animations`}),(0,o.jsx)(`p`,{className:`text-text-muted mt-2`,children:`Each section triggers when it enters the viewport`})]}),(0,o.jsx)(`div`,{className:`h-[30rem]`}),(0,o.jsx)(n,{animation:`fade-up`,children:(0,o.jsx)(a,{label:`fade-up (default)`})}),(0,o.jsx)(n,{animation:`fade-down`,children:(0,o.jsx)(a,{label:`fade-down`})}),(0,o.jsx)(n,{animation:`fade-left`,children:(0,o.jsx)(a,{label:`fade-left`})}),(0,o.jsx)(n,{animation:`fade-right`,children:(0,o.jsx)(a,{label:`fade-right`})}),(0,o.jsx)(n,{animation:`scale-up`,children:(0,o.jsx)(a,{label:`scale-up`})}),(0,o.jsx)(n,{animation:`fade`,children:(0,o.jsx)(a,{label:`fade`})}),(0,o.jsx)(n,{animation:`fade-up`,stagger:150,children:(0,o.jsxs)(`div`,{className:`grid grid-cols-4 gap-4`,children:[(0,o.jsx)(i,{children:(0,o.jsx)(a,{label:`1`})}),(0,o.jsx)(i,{children:(0,o.jsx)(a,{label:`2`})}),(0,o.jsx)(i,{children:(0,o.jsx)(a,{label:`3`})}),(0,o.jsx)(i,{children:(0,o.jsx)(a,{label:`4`})})]})}),(0,o.jsx)(n,{animation:`fade-up`,delay:300,children:(0,o.jsx)(a,{label:`fade-up with 300ms delay`})}),(0,o.jsx)(`div`,{className:`h-[10rem]`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-[6rem] p-10 max-w-[60rem] mx-auto">
      <div className="text-center py-20">
        <h1 className="font-black text-foreground" style={{
        fontSize: "2rem"
      }}>
          Scroll down to see animations
        </h1>
        <p className="text-text-muted mt-2">Each section triggers when it enters the viewport</p>
      </div>

      <div className="h-[30rem]" />

      <AnimateOnScroll animation="fade-up">
        <DemoCard label="fade-up (default)" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down">
        <DemoCard label="fade-down" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left">
        <DemoCard label="fade-left" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-right">
        <DemoCard label="fade-right" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up">
        <DemoCard label="scale-up" />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade">
        <DemoCard label="fade" />
      </AnimateOnScroll>

      {/* Stagger demo */}
      <AnimateOnScroll animation="fade-up" stagger={150}>
        <div className="grid grid-cols-4 gap-4">
          <AnimateChild><DemoCard label="1" /></AnimateChild>
          <AnimateChild><DemoCard label="2" /></AnimateChild>
          <AnimateChild><DemoCard label="3" /></AnimateChild>
          <AnimateChild><DemoCard label="4" /></AnimateChild>
        </div>
      </AnimateOnScroll>

      {/* Delayed */}
      <AnimateOnScroll animation="fade-up" delay={300}>
        <DemoCard label="fade-up with 300ms delay" />
      </AnimateOnScroll>

      <div className="h-[10rem]" />
    </div>
}`,...c.parameters?.docs?.source}}},l=[`AllAnimations`]}))();export{c as AllAnimations,l as __namedExportsOrder,s as default};