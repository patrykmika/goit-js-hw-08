!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("1WSnx"),i=document.querySelector("iframe"),a=new Vimeo.Player(i);a.on("timeupdate",(0,o.throttle)((function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time","".concat(t))}),1e3));var l=localStorage.getItem("videoplayer-current-time");a.setCurrentTime(l).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.1ca7cfae.js.map
