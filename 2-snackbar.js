import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");i.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.delay.value,t=new FormData(i).get("state");return console.log(t),new Promise((r,l)=>setTimeout(()=>{t==="fulfilled"?r(s.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"black",messageSize:"14px",position:"topRight",timeout:4e3,color:"green",closeOnClick:!0})):l(s.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"black",messageSize:"14px",position:"topRight",timeout:4e3,color:"red",closeOnClick:!0}))},e))});
//# sourceMappingURL=2-snackbar.js.map
