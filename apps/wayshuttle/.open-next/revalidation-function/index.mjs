globalThis.openNextDebug = false;globalThis.openNextVersion = "3.0.0-rc.16";
var N=Object.defineProperty;var m=(e,r)=>()=>(e&&(r=e(e=0)),r);var l=(e,r)=>{for(var t in r)N(e,t,{get:r[t],enumerable:!0})};function s(...e){globalThis.openNextDebug&&console.log(...e)}function b(...e){console.warn(...e)}function f(...e){if(e.some(r=>S(r))){b(...e);return}console.error(...e)}var _,S,p=m(()=>{_=[{clientName:"S3Client",commandName:"GetObjectCommand",errorName:"NoSuchKey"}],S=e=>_.some(r=>r.clientName===e?.clientName&&r.commandName===e?.commandName&&(r.errorName===e?.error?.name||r.errorName===e?.error?.Code))});var d={};l(d,{default:()=>C});var P,C,u=m(()=>{P={convertFrom(e){let r=e.Records.map(t=>{let{host:o,url:n}=JSON.parse(t.body);return{host:o,url:n}});return Promise.resolve({type:"revalidate",records:r})},convertTo(){return Promise.resolve({type:"revalidate"})},name:"sqs-revalidate"},C=P});var v={};l(v,{default:()=>T});import{Writable as E}from"stream";function O(e){return new Promise(r=>{setTimeout(()=>{r({serverId,type:"warmer"})},e.delay)})}var R,T,w=m(()=>{R=async(e,r)=>async t=>{if("type"in t)return O(t);let o=await r.convertFrom(t),a=await e(o,{writeHeaders:()=>new E({write:(c,i,x)=>{x()}}),onFinish:()=>{}});return r.convertTo(a,t)},T={wrapper:R,name:"aws-lambda",supportStreaming:!1}});import D from"node:fs";import H from"node:https";import W from"node:path";p();async function y(e){return typeof e=="function"?e():(await Promise.resolve().then(()=>(u(),d))).default}async function h(e){return typeof e=="function"?e():(await Promise.resolve().then(()=>(w(),v))).default}async function g(e){let r=await import("./open-next.config.mjs").then(a=>a.default);globalThis.openNextConfig=r;let t=r[e.type]?.override,o=await y(t?.converter),n=await h(t?.wrapper);return s("Using wrapper",n.name),n.wrapper(e.handler,o)}p();var j=G(),F=async e=>{for(let r of e.records){let{host:t,url:o}=r;s("Revalidating stale page",{host:t,url:o}),await new Promise((n,a)=>{let c=H.request(`https://${t}${o}`,{method:"HEAD",headers:{"x-prerender-revalidate":j.preview.previewModeId,"x-isr":"1"}},i=>n(i));c.on("error",i=>{f("Error revalidating page",{host:t,url:o}),a(i)}),c.end()})}return{type:"revalidate"}},Q=await g({handler:F,type:"revalidate"});function G(){let e=W.join("prerender-manifest.json"),r=D.readFileSync(e,"utf-8");return JSON.parse(r)}export{Q as handler};