import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as M,i as T}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("button[data-start]"),i=document.querySelector("#datetime-picker"),f=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");let u="";n.disabled=!0;const L={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<Date.now()?T.show(notifOpt):(u=e[0],console.log(u),n.disabled=!1)}};M(i,L);n.addEventListener("click",S);function S(e){e.preventDefault(),n.disabled=!0,i.disabled=!0;const l=setInterval(()=>{const m=Date.now(),s=u-m;if(s<=0){clearInterval(l),n.disabled=!1,i.disabled=!1,f.innerHTML="00",h.innerHTML="00",y.innerHTML="00",p.innerHTML="00";return}const t=b(s),r=o(t.days),a=o(t.hours),c=o(t.minutes),d=o(t.seconds);f.innerHTML=r,h.innerHTML=a,y.innerHTML=c,p.innerHTML=d},1e3)}function b(e){const r=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:c,seconds:d}}function o(e){return e.toString().padStart(2,0)}
//# sourceMappingURL=1-timer.js.map
