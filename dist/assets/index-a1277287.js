(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.getElementById("chatbot-conversation");let l="";document.addEventListener("submit",r=>{r.preventDefault();const n=document.getElementById("user-input");l+=` ${n.value} ->`,u();const o=document.createElement("div");o.classList.add("speech","speech-human"),c.appendChild(o),o.textContent=n.value,n.value="",c.scrollTop=c.scrollHeight});async function u(){const o=await(await fetch("https://resplendent-sopapillas-b992a7.netlify.app/.netlify/functions/fetchAI",{method:"POST",headers:{"Content-Type":"text/plain"},body:l})).json();console.log(o)}
