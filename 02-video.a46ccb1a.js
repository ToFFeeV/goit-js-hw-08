!function(){var e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var r=Number(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(r).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.a46ccb1a.js.map
