(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(4),o=t.n(r),s=(t(10),t(1)),c=t(2);var u=function(e){var a=e.timeData,t=e.buttonState,n=e.formatTime,r=e.modifyDuration;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"input-group input-group-lg mb-2"},i.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",n(a.focusDuration)),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",name:"decrease-focus",disabled:t.modifyDurationButtonsDisabled,onClick:r},i.a.createElement("span",{style:{zIndex:-1},className:"oi oi-minus"})),i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",name:"increase-focus",disabled:t.modifyDurationButtonsDisabled,onClick:r},i.a.createElement("span",{style:{zIndex:-1},className:"oi oi-plus"}))))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"float-right"},i.a.createElement("div",{className:"input-group input-group-lg mb-2"},i.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",n(a.breakDuration)),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",name:"decrease-break",disabled:t.modifyDurationButtonsDisabled,onClick:r},i.a.createElement("span",{style:{zIndex:-1},className:"oi oi-minus"})),i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",name:"increase-break",disabled:t.modifyDurationButtonsDisabled,onClick:r},i.a.createElement("span",{style:{zIndex:-1},className:"oi oi-plus"})))))))};var l=function(e){var a,t=e.buttonState,n=e.playPause,r=e.stop,o=e.isTimerRunning;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},i.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",disabled:t.playButtonDisabled,onClick:n},i.a.createElement("span",{className:(a={oi:!0,"oi-media-play":!o,"oi-media-pause":o},Object.entries(a).reduce((function(e,a){var t=Object(c.a)(a,2),n=t[0],i=t[1];return e.concat(i?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})),i.a.createElement("button",{type:"button",className:"btn btn-secondary",title:"Stop the session",disabled:t.stopButtonDisabled,onClick:r},i.a.createElement("span",{className:"oi oi-media-stop"})))))};var m=function(e){var a=e.timeData,t=e.pageState,n=e.formatTime;return i.a.createElement("div",{style:{display:t.showSession?"block":"none"}},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col"},i.a.createElement("h2",{"data-testid":"session-title"},t.sessionTitle),i.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},n(a.currentRemaining)," remaining"))),i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"progress",style:{height:"20px"}},i.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":100*a.remainingAriaValue,style:{width:"".concat(100*a.remainingAriaValue,"%")}})))))};var b=function(){var e={focusDuration:1500,breakDuration:300,focusRemaining:1500,breakRemaining:300,remainingAriaValue:0,currentRemaining:1500},a={showSession:!1,sessionTitle:"Focusing for 25:00 minutes"},t={modifyDurationButtonsDisabled:!1,playButtonDisabled:!1,stopButtonDisabled:!0},r={modifyDurationButtonsDisabled:!0,playButtonDisabled:!1,stopButtonDisabled:!1},o=function(e){var a=parseInt(e,10),t=Math.floor(a/60),n=a-60*t;return t<10&&n<10?"0".concat(t,":0").concat(n):t<10&&n>9?"0".concat(t,":").concat(n):t>9&&n<10?"".concat(t,":0").concat(n):t>9&&n>9?"".concat(t,":").concat(n):void 0},b=Object(n.useState)(e),d=Object(c.a)(b,2),f=d[0],p=d[1],g=Object(n.useState)(t),D=Object(c.a)(g,2),E=D[0],v=D[1],k=Object(n.useState)(a),y=Object(c.a)(k,2),R=y[0],N=y[1],j=Object(n.useState)(!1),O=Object(c.a)(j,2),h=O[0],S=O[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){f.focusRemaining>0&&(R.sessionTitle="Focusing for ".concat(o(f.focusDuration)," minutes"),console.log(f.currentRemaining),f.currentRemaining=f.currentRemaining-1,f.focusRemaining=f.currentRemaining,f.remainingAriaValue=1-f.currentRemaining/f.focusDuration,0===f.focusRemaining&&(new Audio("".concat("","/alarm/submarine-dive-horn.mp3")).play(),f.currentRemaining=f.breakRemaining,f.remainingAriaValue=0)),0===f.focusRemaining&&f.breakRemaining>0&&(R.sessionTitle="On Break for ".concat(o(f.breakDuration)," minutes"),console.log(f.currentRemaining),f.breakRemaining=f.currentRemaining,f.currentRemaining=f.currentRemaining-1,f.remainingAriaValue=1-f.currentRemaining/f.breakDuration,0===f.breakRemaining&&(new Audio("".concat("","/alarm/submarine-dive-horn.mp3")).play(),f.focusRemaining=f.focusDuration,f.breakRemaining=f.breakDuration,f.currentRemaining=f.focusDuration,console.log(f.focusRemaining,f.breakRemaining,f.currentRemaining))),p(Object(s.a)({},f))}),h?1e3:null),i.a.createElement("div",{className:"pomodoro"},i.a.createElement(u,{timeData:f,buttonState:E,formatTime:o,modifyDuration:function(e){var a=e.target;"decrease-focus"===a.name&&f.focusDuration>300&&f.focusDuration<=3600?(f.focusDuration=f.focusDuration-300,f.focusRemaining=f.focusDuration,f.currentRemaining=f.focusDuration,R.sessionTitle="Focusing for ".concat(o(f.focusDuration)," minutes"),console.log(R.sessionTitle),N(Object(s.a)({},R)),p(Object(s.a)({},f))):"increase-focus"===a.name&&f.focusDuration>=300&&f.focusDuration<3600?(f.focusDuration=f.focusDuration+300,f.currentRemaining=f.focusDuration,f.focusRemaining=f.focusDuration,R.sessionTitle="Focusing for ".concat(o(f.focusDuration)," minutes"),N(Object(s.a)({},R)),p(Object(s.a)({},f))):"decrease-break"===a.name&&f.breakDuration>60&&f.breakDuration<=900?(f.breakDuration=f.breakDuration-60,f.breakRemaining=f.breakDuration,N(Object(s.a)({},R)),p(Object(s.a)({},f))):"increase-break"===a.name&&f.breakDuration>=60&&f.breakDuration<900&&(f.breakDuration=f.breakDuration+60,f.breakRemaining=f.breakDuration,N(Object(s.a)({},R)),p(Object(s.a)({},f))),console.log("target name:",a,"focus duration:",f.focusDuration,"break duration:",f.breakDuration)}}),i.a.createElement(l,{buttonState:E,playPause:function(){R.showSession=!0,N(Object(s.a)({},R)),v(r),S((function(e){return!e}))},stop:function(){p(e),v(t),N(a),S(!1)},isTimerRunning:h}),i.a.createElement(m,{timeData:f,pageState:R,formatTime:o}))};var d=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header container"},i.a.createElement("h1",null,"Pomodoro Timer")),i.a.createElement("div",{className:"container"},i.a.createElement(b,null)))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.0e0b1b6a.chunk.js.map