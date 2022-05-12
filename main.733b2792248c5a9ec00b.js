/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "733b2792248c5a9ec00b" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1,"4":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + "." + {"2":"c96c785b5b2c55348c99","3":"927de8b218be0652b471","4":"275c8cd4ed68960c6b62"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				var onLinkComplete = function (event) {
/******/ 					// avoid mem leaks.
/******/ 					linkTag.onerror = linkTag.onload = null;
/******/ 					if (event.type === 'load') {
/******/ 						resolve();
/******/ 					} else {
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realHref = event && event.target && event.target.href || fullhref;
/******/ 						var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 						err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 						err.type = errorType;
/******/ 						err.request = realHref;
/******/ 						delete installedCssChunks[chunkId]
/******/ 						linkTag.parentNode.removeChild(linkTag)
/******/ 						reject(err);
/******/ 					}
/******/ 				};
/******/ 				linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				document.head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/tiv/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([466,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDY0OCwgMjAyMS8wMS8xMi0xNTo1MjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNjdGNEUxNjJENkVENUE2Q0NGMTA4NDZBMkY0RDA2QjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkEzMkI5NzA2RDBBMTFFQkEzMURDMTc4NkRDRjBEOUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkEzMkI5NkY2RDBBMTFFQkEzMURDMTc4NkRDRjBEOUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NjRiNDQwYi04MmUyLTRiNDktYmVmMC04MGFjNGFmZDZmNDIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZTUyNDVlOS1hNWRmLTYyNDItOWMzMi05MTQ0NjBiMGIzMGYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6n3UF5AAAC80lEQVR42uzcMW5UMRSFYa41QpSULIAlsAIKalBKlIYCAQVbQEiICgmRjoI1UKSlZBc0tFlEMK+gGgR6jmbe2L7faV4RS5nr+59z7ZlMotZ6i/Kq2AIAEAAIAAQAAgABgABAAKAc2j25+PWvn3mL8P+6+vq63FuzcNnj+8vjRwevOf4CQONvrDcNa1928prrPghl74eav1KL+z83LH/W2cuv+wBofJsu1i5c4v/B8rjbYQ3VIfDmet+w9kXvtwDub9O3Jf6vGtafd1xLlQDtetsQ/w+Xx23vA8yjn4v7vzesf9V7QQBo07vG9WcAmEfXi/u/NMT/2QhFAWC9Pjaufz4KAKG3q/Shwf13lsejAWoKCbBOl41Xv6ejFBaPP11rb2JJAAAQAAgABAACAAGAAEAAoCTarViT7S+GWj8bqSPXIwHmbv5BRoBPCydORgkwN+hxKACkwHjuDwmQ2/0HHwGh+XO5XwJQMwDB/XPVVDbYNHIN5P5eD7Nlq1/k2tfnTaZwvxFgE5O6/xAJENw/dj3ZRkC6T/u2AGDWUVBnd3+2BHDwOyIAwf1jAl24P3c9JcEmO/htmADm7GBpVmxWXvcfC4BRU6Bmc//sCWAcnRCA4P4x9rRwf+56iibk/mfZZUInxmTNj5EBEP3JE6DnplRAz5UA3N8xAMH9fe5ZmaQg177EI8D7/QMBcGqniv7JEsDBb0AAgvv72ZsycKHcn3gE+GLnBABsVbDmT5YAon8iAIL7Twt04X4JMEpTHfwmTgDONgK4PzsAmVIgJEBu9xsBR3KG6J8gAcLh0Ahw8EsOAOdLAO4HgOYDgADA/QAgAHA/AAZTSIDc7jcCRD8ACABmPwAIAEkcFgDIu9EhAQgASR0XACAAJHVeAMCdHwCaAIBsEAQACABJUyAAQABImgIBAAJA0hQIAOSFICQAASBpCgQACABJUyAAkFchATQRAEkhCADkhSBNauySzvRqXPwpuFZftHUGIAAQAAgAlE2/BRgAZfhdPUZ1RlQAAAAASUVORK5CYII="

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjQiIHdpZHRoPSI4OTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzc3NyIgZD0iTTEyOCA3NjhoMjU2djY0SDEyOHYtNjR6IG0zMjAtMzg0SDEyOHY2NGgzMjB2LTY0eiBtMTI4IDE5MlY0NDhMMzg0IDY0MGwxOTIgMTkyVjcwNGgzMjBWNTc2SDU3NnogbS0yODgtNjRIMTI4djY0aDE2MHYtNjR6TTEyOCA3MDRoMTYwdi02NEgxMjh2NjR6IG01NzYgNjRoNjR2MTI4Yy0xIDE4LTcgMzMtMTkgNDVzLTI3IDE4LTQ1IDE5SDY0Yy0zNSAwLTY0LTI5LTY0LTY0VjE5MmMwLTM1IDI5LTY0IDY0LTY0aDE5MkMyNTYgNTcgMzEzIDAgMzg0IDBzMTI4IDU3IDEyOCAxMjhoMTkyYzM1IDAgNjQgMjkgNjQgNjR2MzIwaC02NFYzMjBINjR2NTc2aDY0MFY3Njh6TTEyOCAyNTZoNTEyYzAtMzUtMjktNjQtNjQtNjRoLTY0Yy0zNSAwLTY0LTI5LTY0LTY0cy0yOS02NC02NC02NC02NCAyOS02NCA2NC0yOSA2NC02NCA2NGgtNjRjLTM1IDAtNjQgMjktNjQgNjR6IiAvPgo8L3N2Zz4K"

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./carousel.md": 467,
	"./click-outside.md": 468,
	"./count-card.md": 469,
	"./img-hotspot.md": 470,
	"./index-text.md": 471,
	"./no-data.md": 472,
	"./overlay.md": 480,
	"./pagination.md": 473,
	"./quick-start.md": 481,
	"./scale-view.md": 474,
	"./tag-cloud.md": 475,
	"./tag-select.md": 476,
	"./text-marquee.md": 477,
	"./word-cloud.md": 478
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 271;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5cb846b6c1e2d147250b0f0130289e72.jpeg";

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAB1FBMVEUAAADr7fD////6+vv////5+vv+/v729/n6+vv9/f7////4+Pr3+Pn5+vv9/v79/f73+Pr4+fr8/P339/n19ff9/f34+fr7+/z39/n9/f3+/v78/P319ff+/v77+/z5+fr3+Pn+/v76+/v+/v74+Pn29/j7/Pz29/n////5+vv7+/zy8/b9/f77+/v4+fr19fjz9Pb6+vv7+/z+/v729/j29/j19vj7+/v8/P309ff4+fr4+fr8/f7////09fb5+vv29/j19vf29/n19vjz9Pb09fbz9fbz9Pf6+/v19vj4+fr09vj+///y9Pb7+/z5+fny9PXy9Pb09ff4+fr8/P3y8/Xx8vXg4uTz9ffy8vXz8/Xv8fPw8vTk5ujy8/Xe3+H+/v7y8/Xy8/Xz8/by8/Ty8/Ty8/b09ffv8PPx8/Xw8fPz9Pby9Pbo6evy8/bu8fPx8vTv8PLy8vXw8vTn6Ort7/Ly8/bw8vTo6uvq6+3////u7/Lz9Pft7u/t7/Ly9Pbv8PH8/Pzw8fLx8/Xs7vHg5OTt7fXd3+Lk5uf7+/v////d3+Hm6ezo6u7i5Obf4ePg4uXx8vTl5+vk5unq7PDj5ejv8PL4+fro6uzs7vDr7O719viRTpWFAAAAinRSTlMAmWuQaJd0rJJ3cKWplX0Zo557rrseoI2oJBMvuA00RVYIiHlbbDqwbZk/x4CLm7TAS4JysnF9hn+OYWaEA5NQtYN3uZ7EycOMiJy9KaSEKqnMwKGJtLmZmcuYxb+Zr5kCUYKtS2BVPdB7y3RmmYjWatuLRMLuY3jDxE3hQcbmppm4yLv3KBjjjXTHZKqqAAAfJklEQVR42uzbz2saURAH8Ll5EXJwhahx3YXaHHpwC0nAgiXBJFJCMREMxoYSTVTEEsSAvQgtBPp3d3yrO/tL83ZXpVvm8wbfzOjpy4b+SAKMMcYYY4wxxhj7J+mzYfvR+NY8HxaywILKPBsfLLVuHVgQf05qLs/8FAaglgyP5gyYpL5yr9xjKUvm3Acmpf8q3L7eYtl7DZgEtXlrKd2WsKxxAOxNf66bK13znyRvO/6+xgjYG9KPa/HfB98yul7rGNha+tdfeOYv/r7mga2jfrU5X15mmW1rMuzVK8D8Tc+ltHv8JPobtVrnK4+9/d3hp9BPt+3RarewvPuf/BD6KH+Wd7YHbEWA5XmV6Ta55y4/gw7ZwnRYLk/wuHl3E1HFCki7CaAHMZQeT4IrcIALlc5zGAG+iO9ubu5u7iw4YJk3cvbxC1D/1O2edc8EbLCct8ma6bMf5QN0ury7FLDBct7xC7Ay7YY0rIAkCskd3BIFGbsACyem4UlgGZDkDQ/5z7ELcG8YXkE6wADeQbxoP8PTQBJ+e/kSa/EimL3PHbMAs6MIpvIBokvzhVBvm+MWoFosHhePsRy3hWbqTfN2DJI8QfmLY4Cdoq8xnpXGolCwAMn/FKA2jkDbUIAXHy6w4hng9EcETyDpgmBQWHTTfhFmzALsTSN4Lx2gvLgF2OlFsMcBwsu78LRKwABrFzUsx41cu8gBZkbXxmtrlIadqGtaX+tjLY81I2shuPu+CrIwHFlRA9SHhul+N992yPdD6+ggq7azAPX2q+WzDjsw6HT6HUxDwBZ7UWIQa2u2fWZ+6iCtUas1ag0LDghfTbiY12KIFuBJ0+YMdiDbQU8dm494HCOWj0EFpJmxWccFF7SLFmDu0SEHO1B/CuVFB3lGo2E0DKwGon5+m2iOFuDPXw5n9T8PsG0PaqHwFPjM8hAxQO9OaGgQXqV17lbu52HLKpjgS+HFDkfaUU9UHYIwpEQPMNv2McnAtmVmAaUfIBAjgAgB6oOyn0kati2fGwSQ0YFEDfDKuMLaRID56fMXYfJlImCDhfewAlun79XVwUCtD9ZQsXKZ7AMEdrVEYWHjK3SA6WF3JRVi7iqAkAHq4+FqMfv39coAlSsFi3qEl+hJyAAHozWKEHOKxR6VQeHZg/WECjLeFdcYQ8wpLvdKENH/Zzj2X8KKx/2mA9R6a8T+t6yUSEDGTFsj9j8NqiivVaW6hO18PsAyb5yxqoK5ox4PyNjrrBb7BxCqkYCU3NMqMx3i7qBaPageCNh44BLLv0cgpVJ/8ZeLf36OAD39mzuQlK2/H6gDJzXzX/ws90EkwDjAjQR4al7Ue3antOcA7U6dMB4s70x7Rw/sNCwO0FQykyidlrCwIbSj3r0DVlodGMLGEZ5APQeIAYbFAXKAG3FEaRyVjgRssMyb3vPusQF2JIsCJBwgBSiNA/QEeHh0iEU3mg9Nv73Zc4DkMBJgHOBmA0wdpgRssOh27jhAknKhoLyzF7CULA6QA9yKRCKRSqSwxI2o97mR43PAEotY6KbeO6fEsXCAGGBwHCAHuPkAk4kkFt0mmqnnAJ2SS4/LAB8XSdEbaPmemGgGloyCA+QAI9vf30/uJ+1wlN4B8w3HPzzq+Qn8y875+zYNBXHcCIEaoZZSocLC0k4VbZG6pEMHNkoQSCid2FkZkDqzh7S0CQlJ+s/y5Q7n6+ae/fz64JGUfHzwzmdblj+c+SGsI09jWHbgUuAfEviAm+wUVi0y12OSLQWCB7NQntm3ZEseRJEl4eGX08t/xOmXh4sv8GFKfVahx+C6mlh/sI6whniMa6GepeCteagrrqwh3DvIY67/4hFIOYQ1D1kKTvmoVoat2YNx1596BFYxHwLLzQQQcf1tEpjAWbDAdnu9vY7gCiQHWEx+Y4Hva2IEJiRcYDuKLAQORQ8TOLwUhpdDBBIDj+lq6nHXZ5Vsttub7U2ErAbWmRdqYQI53xsiEVwBZ357OtAjxdYjr/cJjCILgUPSKcvWrEDtDGAeXIPHCznrl5HXz5FA55h+i1ugboqRo1lJHnl9vMBHm48Qf0igxS+QDzoVQTl0IZgcRF6fVaJyEFwBc0DMOVkI3mHppQLp4aqThKshJXsEPooiC+F5TYxAkHdNJxHDKbdEoDCfAlutRy210WJeCs9bClRaIuSmZCEU5nsjAWbut+YLJlDZb+0LSBStIWzO/UCB9VgwgftRLAWmFPhK9DhnfLO2cAJ39vd39ncEJAISxPUVsMbzwgTWZMEE1oDyZslCyMdRczS1wNptFkgiBCpiy8LirRF4b+ceorKe3XDisnvy8itdywWO0woc1xF4rxKIEmFlhHYgxdkcuAXqk4wRyTtwjM0nMIq/MXHZCBR1YyGZQNzq9za+FQJzxp1EFH/R7szw6eOzfyPwDScsA6TFUdXM35hXWNoBkbID5Z7C+I7h87OCwNXVe6s0gh2gNX8eKLAmpgNJYoHahXcsH7Mpq1FkIXAgsPBYN8TMgOAKgeleYeIS+OmfCHSOp9aMNSQLIPBOQeDKyupKmLUVXhPagX4WowMLAldEiIAEYdcc1qcilwKzqZuVUj5gKzkhC0EHAl8fDMwa0HzxBFKN5IziMU1Zxo9ggTUJE3h18TXnG7gQzpXB+WDQ7yN6Qvc3Z8L3s+/K8EeUwCiyEMxwYLPeRGDRnxiEw3OEGgTwB375Q1AgDOYMYwTeVRN3V+4iinmtWhaCaxgwVx4zAieT8WQsTDqGrwoNagdSoHRgXzswhwKFjqF4T69AiAD42cCayjP5X5l36+jASf5ALoFEG1CgwX7egWzAnHKBk/odGEEygUAlOjuQ+hT6GyBUoejr5f3n78BJ/os2VwJ1fq3C2bbMdTUCJwV8HZj34PkFO1AEUmGhBX0ClbkR+LImRqB0AqKWwAtl+qdw0WBXGPGPYc/vgYgaAp/IBrCYTdDcboECq2faktAOdLegMhD6M3+ROaPBsg4kHoFPCIwguG9qdj8L4YVToCX2FRbOL7QFRR/fYfWHoL9YgRGECvQRL1AVXvtNEPAVzg0qf0bg8fGTYxo55n4pPC9KIEezRgm8MH8PpD+2oOMdpr9hjMBjlaGoPEqszkEWgnsMq62FCcQ/5QgNqkL+MawtyL/HKOrvR5TAeuwd7yFM2UqKwy8wEbzjyCNwj2KQCEgQ7hUUa0agjlwFZuxqcQUm53G3wDM8S0KBxCeQ4sJxCIzHIRDqRoiEHSh3O6slsIQtbMzzjeWEAkVe6leYjKoFnpyc7J3sIWQFzF0rKJ5XNc/RjmFlHWApOSebYSQdqHQSgTtiEyZegUW2TrYQJ5XwHJfAeKxAYYRI9wpr1yN8ArdUiCJiEHYlFIwkjUBBH6iTiFEBj8AorEA7NZRUTRZlXvEKJ+xA4uvAZnOred1Kk7VggXRFZ9xK4VGsRiCZxw5sToE0hKbMWWcuq1tgPAsmsBnFUmB21GweNY8Q4fZwkRHIaaFOUHYe4/TRxRMYhRVokcmhgHDfyf8u0I4btDWbk6eLJfCdcvROjSAhPIawOXAPg7OCuPK4Yo8tmMADNXHw7gCBhHjrwC2QUIzdt7USgV0+S7eTiO7v+426Xb9AlYRNc4H5a9lnDSulW4HxWIHyIMLI+2VC+LcxwNGB9QVGYYfBPQWc4SgpmKmZGY+suQTiIUSiW2DktzFugbiXnP/rCq/A3YNdBBLCmjOvFAgLHijPWc9mKD5Mqm9jevKLJngE7qoQ/OTBeZ4VGI8RqPK0C1N9G9PtAb1vzyMwlPQCe9KBSqpvY7q8ZzdI4OHuIcLktQVyTqOsM7DO3NaMQDxELjHVtzHFe1YLPCQFcS5QNseswBLUVD2swJxRL9W3MWJOGPkERmEFxmMF4iFGXYleqm9jcE/d/B24tna4dojgCiQHWEzuE8gxgxb/SELUXB3Y7yJgIdW3MTgXlyC8AteiqD+OkJPzfBiB+vjQhzXVtzF96T2R2E8qcNNgxhBy39QVI7A3pe8QGPltjFugdp924TwIDMEKJM4OjPw2xt2BFOjrwI2NtY01BFfCmj1HcvcwON/UPMLzmBuB+iBKJxG8p68DNyxr062U/KgRaCbpEc8kPV7n6kB9oF46gYI0Yd8jMAorMB6XwF7+o5MItYcNUS1wW01sb2wLSIjUTa14fiKBVNhJhN5S8AkkFEhxutqaYgW2rk/JA1jMvsm5ugSS1K9wfYEUg7whpigVW2OjoedgJQ6BHuxgOMv8CAztwHDsLDOR46XF82y+kAIb2w0Ezdia85gVGM+CCWyEA3EISY1ADn8zeIbE8bwKgYNOClQg/gKO8AuMwjGKK5556ECIU26FwIHQHyTswOI9kwqczivjSliz+8QIHMjrJKTtQL2vrwPv32/cbyC4KuV1HncJjMfRgf1cYicRg9odeP8GUGYSgQOSTiC7Pl6g5T8QSNIKXOUMMzuzzNbscYfA84Eg/0nZSUThnvECf5JzBrltw0AUBQSjCAT0Ellp00206KYH6AF6hJ6ivYGEioRbw9ftgOPyix5SY5vE2HWeGJIm5Rh5GS/iEH/8MFLLrkmBDZACI4tVbszC8ghV4JiBhVFXhIXaCDywCVSgQW4M2w8s2wLHKgoCX8pxXNiXe6UKBAerszGrX5oisIeNfuypjQq4lxACz0K3bkIKBFZnYxagCWRp1F0OnpMXiDgzdB/juljDY11g87Mx9QKrkAKr0AW2PRvzgAIRr4WkqPwaUbg3I5CEsBOrszH+bgJv5qWY5sPyGKuzMQvw2wKHYeiHnloYCcwzI5Hc10wgkAJ9qEDG6mzMgtdcFIEX0f8bwwWsBBL8NrY6G8PfgZousAYpkIONqF2dJIXnCYGoKW+VG+NXNBXYDR21OEqBDdh4Cy9WuTEeKBXYXcuwntQIRJaPJnDFZMB1FUgirroITHSBkARZWCeeQGAFUuDXBrxvgTIISSd9zvsW+KkB/53AXbejFqXscMUFMS8LfA1XjOaJc6zjcRi+8W3xKgl03rkHFLirQghEyFEB7PMo1x+jAvHBmCqwS510mGCHCw/rXUlgmt1DyPwewOsM9kUckoM/NxnhQsUHbCvwtQFSIH6YKc9TCVRye/R9IRAYvoWBqcCY0QOQ1YO9jbkU6B2YjHD4u1oR+KMKKbCeUgXaC9QrsD1fwGdk+lBL1gnsiXs2BM5TnqcUeDOPUIHzvQSKiBkeGTxOx7M9IRCflppV4Po1TQWmcTMYkabCyHsiQuDsXGizfQXOJNK4At9WCInJbkYsP85U4MngbFaB870q8K0BogKBnUCu+oCpwDQZhaYidkZf3xJ4nEw4ogKtBdazKXBvYvC4n4GtwEtSU7Skle8//5zxiy9B+Bdvyj504HfoThyoha8TC7Vwggb40AEXOjBzR9eJv9TczWsTQRjHcdaDGvEFPAmi+HYQctOLHjwIkpsvF0WMKVbtpRApFGwDLoZAVVAoSKVC/1mf7NPsN892ZveZ7gr620li4vby4ZmdmW0zXzc7BWRnFLtLCu9j4ZyAnzyO4MFn/H5qw0+/s6p88hA3+NAj+teF+O2KnzEUu/mjFOwWsINU+YraE0XLpwUYMFQ+onwqKM0KhgBFkMzppFm+7yadAp43YSeVwPvoZ3tHgh4J48lhClCOoqnfr6LhRwFWenGJJ0fRKvmbgO1TtRO8ohk+fUCHIVFDE9EjvgK00dnNvP0vgOIHX2MBaqMAtTGCaBmCFyy/EnGXi+CyH3zdA17EQTf58P2bjUAAtENIqBOHEH+WfnRiBMUuegmE0Nag4CkfhPB1D3j8lIrWT/WO9uCInuHTAZhQfpTggpBZTHQEQe+fBCxT4YvNYoLTGNuBQaQP189h6MAaOjCEgvhXAe1+FYENQc6dvqjvI3tbVPz0GuirQEpQ8dAL1R+Ey903qIdfYgU+uHr5TQrgTQKM3S3l1GBwdoEKLNAAMg8kvpk0iRLil1aAifPAj9PprSTAxtwbDAb98/aznhzE6OlTCA898KCLLkPA+xUcgfVJ8QJ++uQGvDKVXE8AZD+KWM71B/3+6V7NXheBeSCEBL+mQVizWAajiKFvCKYPuwGvTiWXEwB7jbm0Pltff1Z3RmASuBfE02fs1A87/ERODjuHgS9hCpPahdem02x6rVPA133Jay9grAdLYkMwARBECLkTE7gGAthuLfwhy6bZ2y4Bn/Rn89xxAIIHIdfAWAcGDz/GD6Yx6CUWYMoofCEr8iUBMLjdQuGi71/OirwsueRD+zMnj6xD4MMPw4ZRRB4YMgmURG4jyANAbmWxDk4YRDYV8JMf8GRTVhTwXc0pdRWIYR0fN2KoQKYw6AVWIaoHnzT4sHMCbijgRneAvaECDnsNgMSzDEbQGnIra4GohmIXm8ZYQeqPGvRX4IOxAo4fdAZ4YzacSRsOb7gAxS4g6B9BtIFH4uPH8s3A2DTaCbiTHWbHDXjXbqsgkRfen3w0PMyjyvYLvFYqMDSESPMVID2YKaDgaQsYUn8YkuSVyOo4G0vLsvd+wIY8z/NhPpQ8j59je29kGiOAv5sL0M4DKzey4GMEkWeDp8+MIMWzG3BrfJitrgBvFnzylOe9GkDi+XUcgnsH+8fMwY9CED5WcgQ7H+CVcZkrbsDYDgL6+f28zH37v/zccgVGRpAYIH7pgo5ZNP3XB3gVQPdq7kx9PgP4OHoSfAtEAiKEzGHmEMc89ss+XDsCJ02k1wBc6wjwRZ5Pcs12IyDjb+A+VvBe/n6L+OvPC/jm22g8Gmu+dQP4sKCbyCHtYRSwcSEcuxVNAaYfvpuB0tyAF0YLQHnxruZul2GXAPKq0CuST15xjk0Qj0RHYAFsEfVDLjqEuAE3R0vZTAYkCD0TPWmaZ4ETi4MOzCBccwFEsV0F6jKYRP6iw38N3FgG3PAC6hfa7Rfci8+kndkWN3KGc835jCERP7oweJKW10DLtytH5HdJTsDrIxPnak69CN/nlvZhYvKQ77+b86NzQADDaVWBzrtZfsCnFnDHC6hkHMCceGQBX9qTJfpihuBgAWLINbB9BRo98QreSN11A65awFU3YDwr28uZrEROWx6CQ2NwaAqj3figRQmaMSS6EE6owC0LuNUe8A9vd/PaRBDGcVzBiycv7cH3CNWDNxGFKtTXi2iJl5oQNSpBkIKpWgWh4EtVVKQK6sE/19/O7vrtzrNPZpcN/poIbePW/fDMzs5kpn59HeWsB8goxLsN/GMMs3QZykW3MImJmDTg0d16g/uDwdE2gOzLJvuWY8AX+qp9PRVIL+yNg+GrTqfmv+WEqVQms5jIMpOpQRC+4k8mUxmHNAE8NigivZBjjQD3zchqDHjdbFIOSSwKDI/myyqZzSdWkB4EwkQPkgB8PIjSbDRnOSB6WeZ1eCjRC4qkCtBb1VYaMhP9kxUxZlEMiCyq/B6NgxH8lj/TgIzjYsAvDztW4PmXJvtrX+gVIAM5I5h6Q44alB98tgARTBRgCnBxYHKgI+CKBVx2AalA5z463YDx05NkhPARtwFj2OY+cNMCbnYEfGsBVz3AncYzqbRgxbRg9H4ZvVYtuPU18Jnxe/BsT6eceJAfZvBAj/KYtctuKkujmy7KymsQRDphEP01HUwG2nEwhI5gi7Ptkk/54croEz0+eYBUYFpPdFEFwlde/kpC9AwfePV8etSn+dl2A+RwxAXMBRsRCi/a2sBdDPeBib0NlUVtCu03PZ3Q4mw75ZE94qPanr3A86ZSGy0s5yYm/IFfiWh7kPBkEqFCyDC4Jm3Otnse5gfjC24FOob4RQMRvxOmD6ENm7jvx6HopNXZdgccZEkBsiKm2e6QqAD1VGQoONYkuAujSz3acK7HMC7HcwiTZzt3QGU24E5RgQ5g8h11u7icGMDAF+3vYjrV9CGtAZW5At7PkgCUIBWYLMDw4WytKfF+UYAmdlEWDbj9NTB9tt0BlbYVSC+iZ2J/cGSoVOsPQ/zCB31w+HAWVrYFVOYK+FRv9iUAuQg23FsjRXsRNDs0RUcFztyeVLfH0E/qbOcNGDIbUHDObLQezSeyuA/0+mBmAWnFP1hVZIbB7QFD5g64NwGo+IO4hntcGceltwij9w+xewVytvMFTP/ShlB8EEaGye1d0Q6vAEe8QTAFyHT+zHEwSZ/tXAHfaeH/u9mATMaYSyCEdCLuL0ngf/RjJtXfIIcffAi2B+Rs5wwYMuslW96qXiowcR/t7g3BrmsXQj6nz/Y/A25u0YLtXeBOG730TMLsUQh6P1y/zbkBHlAWFxcPKv3+rf5h5Zhy6tSp08px5YxyRPlwpNdbWlq6oFxUTirnlKtXr55Xrig3lGVlRRmOhteVVeW2Mh6PJ2tra3eUe8pdZX19ffuJsrGx8VzZUt4or4p8VH6HfFTKr75RtpTniv7iE2VbB7qr3FPuKPoxY+W2sqpcV0aj4YqyrNxQrijnFf3TzyknlYvKBUUn2Ot9WDiinFGOK5mDODKVTEdItzItoWV2OWAumH0LQAlWARcyQCUGVOoAld2Ak/F4rSq4rgTAWBDDIiVe4MOvAFxXdvspk8l4sgtwNBwCOC0A5WcBlwLgQgQoPwCF1M/8DKByK1QggAheUxZuFoAIAohgATgajkaUIIIAxoIQBkEb+CK/bQow94sKUK1hVABSgADiVwDeXLim4BcAqUAVoANICRrAhSwAOiU4pQQlOIwEJ9SgJaQKhVikIlfgUX2UX1R/Y/2oyK+uBeNnAZXLBjD3UyqAh3a3YenWlqAA3ys9KwigbcT2MmgERbgtQgxRzIIbduiJbzvwGT+n/mwB1vr13mdne80rwEoLPhQAacMirO1GMj4BNhCcVvoRatBeCDFUGYIoRT8b4KnzQA++ScGH37DSg0yTfgJUIkD8ihYMYEWwL8K6EswBLzmCURFOk4TWMFeE0Qa6vOFaPUXHj/hGI7/8HL9L+dnWFWDmU/ETYFXQacQFYBNBmjGdsQhLw6yDxBDEvDXnLdpPeE3ebsFDb0LnkfMpK6XftKlfAYhfpQuu+OWAUSuuvwwqlxRX0CVUEYqwUobUYYkIoyALJcLn+jZ0wkNPh6wUX1598MXl5/spZ9weOKo/AR49ZGuw356QIqQ7piEXHbIMacuql7VcEUYgbYCDTnZltzEp8NAb0ndQfVna8lF+1u9v9XaT20QQRAGYa2TBIsdgYU5gyVcYiT33X1KutvkkP1XGw5/MyzCKBRHJl1fdPZHy+dPnFLw8KbjXQoZdQz3UxD7bcESZwbbkTC08enaOKt9O+571M7/8CjAFz7EQPkmohmnYB8NArHxbjO3I8jHUlG7tGAMevSjfk3zZv/RrwBLMEs4r4UyYNexR/s6wz4aNiPGeBuk+LcyMv7/CBV0/szUevR7dLN/MN69+Ob7lV4Dv73XPEvZesk9oLVRDhguxCKuIFK+GFYw/JaWV7t2sm7JxQ3fbbzVP9XQvyrfWvn2+cXwr7+8F2IK5Ek6EBlkNR0OIFYr3VbGfl0kKUGDCrSe2rnXYYwdv0lO+x+FNvksl+NqvAE91U8KHpfAShGo4GQ6I/ZSii8XY6d6sRmZoRfrD+s9XdOwmvFlvWvvy4UP9Ktun02lLQi28IMwajoYQU1EZOd5Gu8vUb+u9+fVX+YIu7eCNelk+fM4uA9/pVICVuYVnZxo1HAwHxFDkCJKlZKhJ71MtN9gl3qinfLaOuX2n8rv+Mt1p2xDGhvx2bbAaMoxZDsRQbEaODdlfft9h7sZHFRw5dGGXeCaXnvLZeWPr1b7m65x6kHM7YXjZMQzEUMTYjiTlhkInXzPjRg5d2CXerOfYd9OzdWhf60kPctbQhmJTfgqRIsZ2BIkS536QYQPXcujYPYWne1a+LF9F+aQmOWtYYXgeDSGmIkaOIFHiFEkybODIoQs7eKGnexd6Ub6rU/KZ5NlwFdEwQ9REihjDESRKoHOAJRs4cujYad5QvUvjpZ7ybQ9s0cPZ0L4MMapIESNHkiwlSJNLqHEjh45dFg/eOvAd10vChx4OiOdEpIiRI0iSLIWp0BJq3MCRQ8cu8c6qBy/0dvn0cDQ0zdZEisHIESRJmJFBSqBxA0cu6Nh5ztW8Sc+u+6zhNYmoia14jSoqI0aOIUnzeJgNbuSKLmqneG2neUP1DurpYRmOiKrY50SM2giSJEqch4MMGzdw5JKuR4hd4t2rt9GT40WEmIrrrF0TjZEjSJIocR4JMmzcwJFD11tt0aVd4Bnc30k/620QJ8VuYy/GgyNJljyPhRg1bqNcf35vH9nBi+b9HmLnY0WM19ynGiRKlkCPBRg1bOBucpV+NkP3kZ1F7w+nz+ChiJFjZ33DQaKEKSz2wwtasvXJDhw5dGG3Oav8+dhaKAZjODbkulDCFKSRmQua+P/eQi7p2Bnav59tfauCkSNIkn0E7zcncaE6hFXk3E8RNlZu4Mihs9z9I7t8du6Z5piQJFnaufs6rzWK65z893Uxo8Yt4Fqusz5/I/vvY3/ZOIIkyXLgDNl1aytLmSQZNW7gQq6vTy+UZtRHkihh8pyTRCLEoGHj9sJy4ueKJFGyHDwPh1ioYbND1PXKcEMl7TUwhejh8BJododXL9yBVZJmih5Peqla5X+r2yFOX6Uz5S+FVb/33zftl9Pt7Nu69l+/zFz+AHdKHfIuzf5PAAAAAElFTkSuQmCC"

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(170);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/App.vue?vue&type=template&id=5ca66e12

var _hoisted_1 = {
  "class": "main-app"
};
var _hoisted_2 = {
  "class": "main"
};
var _hoisted_3 = {
  "class": "container"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("div", {
  "class": "footer"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_header_com = Object(vue_esm_browser["D" /* resolveComponent */])("header-com");

  var _component_router_view = Object(vue_esm_browser["D" /* resolveComponent */])("router-view");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser["j" /* createVNode */])(_component_header_com, {
    "class": "header"
  }), Object(vue_esm_browser["j" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["j" /* createVNode */])(_component_router_view)])]), _hoisted_4]);
}
// CONCATENATED MODULE: ./website/App.vue?vue&type=template&id=5ca66e12

// EXTERNAL MODULE: ./website/images/tiv-logo.png
var tiv_logo = __webpack_require__(171);
var tiv_logo_default = /*#__PURE__*/__webpack_require__.n(tiv_logo);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/Header.vue?vue&type=template&id=71d166b5&scoped=true



var _withId = /*#__PURE__*/Object(vue_esm_browser["Q" /* withScopeId */])("data-v-71d166b5");

Object(vue_esm_browser["y" /* pushScopeId */])("data-v-71d166b5");

var Headervue_type_template_id_71d166b5_scoped_true_hoisted_1 = {
  "class": "header"
};

var Headervue_type_template_id_71d166b5_scoped_true_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("img", {
  "class": "logo",
  src: tiv_logo_default.a,
  alt: ""
}, null, -1);

var Headervue_type_template_id_71d166b5_scoped_true_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", {
  "class": "name"
}, "Tiv UI", -1);

var Headervue_type_template_id_71d166b5_scoped_true_hoisted_4 = {
  "class": "links"
};

Object(vue_esm_browser["w" /* popScopeId */])();

var Headervue_type_template_id_71d166b5_scoped_true_render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(vue_esm_browser["D" /* resolveComponent */])("router-link");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Headervue_type_template_id_71d166b5_scoped_true_hoisted_1, [Headervue_type_template_id_71d166b5_scoped_true_hoisted_2, Headervue_type_template_id_71d166b5_scoped_true_hoisted_3, Object(vue_esm_browser["j" /* createVNode */])("ul", Headervue_type_template_id_71d166b5_scoped_true_hoisted_4, [(Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])($data.links, function (item) {
    return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("li", {
      key: item.path,
      "class": "item"
    }, [item.blank ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("a", {
      key: 0,
      href: item.path,
      target: "blank"
    }, Object(vue_esm_browser["H" /* toDisplayString */])(item.name), 9, ["href"])) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])(_component_router_link, {
      key: 1,
      to: item.path
    }, {
      "default": _withId(function () {
        return [Object(vue_esm_browser["i" /* createTextVNode */])(Object(vue_esm_browser["H" /* toDisplayString */])(item.name), 1)];
      }),
      _: 2
    }, 1032, ["to"]))]);
  }), 128))])]);
});
// CONCATENATED MODULE: ./website/components/Header.vue?vue&type=template&id=71d166b5&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/Header.vue?vue&type=script&lang=js
/* harmony default export */ var Headervue_type_script_lang_js = ({
  name: 'Header',
  data: function data() {
    return {
      links: [{
        name: '首页',
        path: '/home'
      }, {
        name: '组件',
        path: '/component'
      }, {
        name: '更新日志',
        path: '/change-log'
      }, {
        name: 'GitHub',
        path: 'https://github.com/CDTRSFE/tiv',
        blank: true
      }]
    };
  }
});
// CONCATENATED MODULE: ./website/components/Header.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--11-0!./website/components/Header.vue?vue&type=style&index=0&id=71d166b5&scoped=true&lang=less
var Headervue_type_style_index_0_id_71d166b5_scoped_true_lang_less = __webpack_require__(150);
var Headervue_type_style_index_0_id_71d166b5_scoped_true_lang_less_default = /*#__PURE__*/__webpack_require__.n(Headervue_type_style_index_0_id_71d166b5_scoped_true_lang_less);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--11-0!./website/components/Header.vue?vue&type=style&index=0&id=71d166b5&scoped=true&lang=less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Headervue_type_style_index_0_id_71d166b5_scoped_true_lang_less_default.a, options);



/* harmony default export */ var components_Headervue_type_style_index_0_id_71d166b5_scoped_true_lang_less = (Headervue_type_style_index_0_id_71d166b5_scoped_true_lang_less_default.a.locals || {});
// CONCATENATED MODULE: ./website/components/Header.vue?vue&type=style&index=0&id=71d166b5&scoped=true&lang=less

// CONCATENATED MODULE: ./website/components/Header.vue





Headervue_type_script_lang_js.render = Headervue_type_template_id_71d166b5_scoped_true_render
Headervue_type_script_lang_js.__scopeId = "data-v-71d166b5"

/* harmony default export */ var Header = (Headervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/App.vue?vue&type=script&lang=js

/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'MainApp',
  components: {
    HeaderCom: Header
  }
});
// CONCATENATED MODULE: ./website/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--11-0!./website/App.vue?vue&type=style&index=0&id=5ca66e12&lang=less
var Appvue_type_style_index_0_id_5ca66e12_lang_less = __webpack_require__(151);
var Appvue_type_style_index_0_id_5ca66e12_lang_less_default = /*#__PURE__*/__webpack_require__.n(Appvue_type_style_index_0_id_5ca66e12_lang_less);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--11-0!./website/App.vue?vue&type=style&index=0&id=5ca66e12&lang=less

            

var Appvue_type_style_index_0_id_5ca66e12_lang_less_options = {};

Appvue_type_style_index_0_id_5ca66e12_lang_less_options.insert = "head";
Appvue_type_style_index_0_id_5ca66e12_lang_less_options.singleton = false;

var Appvue_type_style_index_0_id_5ca66e12_lang_less_update = injectStylesIntoStyleTag_default()(Appvue_type_style_index_0_id_5ca66e12_lang_less_default.a, Appvue_type_style_index_0_id_5ca66e12_lang_less_options);



/* harmony default export */ var dist_ref_11_0_website_Appvue_type_style_index_0_id_5ca66e12_lang_less = (Appvue_type_style_index_0_id_5ca66e12_lang_less_default.a.locals || {});
// CONCATENATED MODULE: ./website/App.vue?vue&type=style&index=0&id=5ca66e12&lang=less

// CONCATENATED MODULE: ./website/App.vue





Appvue_type_script_lang_js.render = render

/* harmony default export */ var App = (Appvue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/github-markdown-css/github-markdown.css
var github_markdown = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./website/styles/hljs.css
var hljs = __webpack_require__(153);
var hljs_default = /*#__PURE__*/__webpack_require__.n(hljs);

// CONCATENATED MODULE: ./website/styles/hljs.css

            

var hljs_options = {};

hljs_options.insert = "head";
hljs_options.singleton = false;

var hljs_update = injectStylesIntoStyleTag_default()(hljs_default.a, hljs_options);



/* harmony default export */ var styles_hljs = (hljs_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./website/styles/common.less
var common = __webpack_require__(154);
var common_default = /*#__PURE__*/__webpack_require__.n(common);

// CONCATENATED MODULE: ./website/styles/common.less

            

var common_options = {};

common_options.insert = "head";
common_options.singleton = false;

var common_update = injectStylesIntoStyleTag_default()(common_default.a, common_options);



/* harmony default export */ var styles_common = (common_default.a.locals || {});
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less
var styles = __webpack_require__(155);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./src/styles/index.less

            

var styles_options = {};

styles_options.insert = "head";
styles_options.singleton = false;

var styles_update = injectStylesIntoStyleTag_default()(styles_default.a, styles_options);



/* harmony default export */ var src_styles = (styles_default.a.locals || {});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/scale-view/Index.vue?vue&type=template&id=049fbbd0

var Indexvue_type_template_id_049fbbd0_hoisted_1 = {
  key: 1,
  "class": "t-scale-view t-scale-box"
};
function Indexvue_type_template_id_049fbbd0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.scaleBody ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    key: 0,
    style: _ctx.containerStyle,
    "class": "t-scale-view"
  }, [_ctx.show ? Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    key: 0
  }) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true)], 4)) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_049fbbd0_hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("div", {
    ref: "containerEle",
    style: _ctx.containerStyle,
    "class": "t-container"
  }, [_ctx.show ? Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    key: 0
  }) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true)], 4)]));
}
// CONCATENATED MODULE: ./src/packages/scale-view/Index.vue?vue&type=template&id=049fbbd0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(69);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(89);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(110);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(191);

// CONCATENATED MODULE: ./src/packages/hooks/resizeEvent.ts






var handler = function handler(entries) {
  entries.forEach(function (entry) {
    var target = entry.target;
    var listeners = target.__resizeListeners__ || [];
    listeners.forEach(function (fn) {
      return fn();
    });
  });
};

var removeListener = function removeListener(el, fn) {
  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1);

  if (el.__resizeListeners__.length === 0) {
    el.__ro__.disconnect();
  }
};

/* harmony default export */ var resizeEvent = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(element, fn, time) {
    var cb, el, handle;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (time === void 0) {
              time = 100;
            }

            if (element) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            cb = debounce_default()(fn, time);
            Object(vue_esm_browser["u" /* onUnmounted */])(function () {
              removeListener(el, cb);
            });

            handle = function handle() {
              if (!el.__resizeListeners__) {
                el.__resizeListeners__ = [];
                el.__ro__ = new ResizeObserver_es["a" /* default */](handler);

                el.__ro__.observe(el);
              }

              el.__resizeListeners__.push(cb);
            };

            if (Object(vue_esm_browser["o" /* isRef */])(element)) {
              // 保证节点存在
              Object(vue_esm_browser["p" /* nextTick */])(function () {
                el = element.value;
                handle();
              });
            } else {
              el = element;
              handle();
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());
// CONCATENATED MODULE: ./src/packages/hooks/windowResize.ts


/* harmony default export */ var windowResize = (function (fn, time) {
  if (time === void 0) {
    time = 100;
  }

  var cb = debounce_default()(fn, time);
  window.addEventListener('resize', cb);
  Object(vue_esm_browser["u" /* onUnmounted */])(function () {
    window.removeEventListener('resize', cb);
  });
});
// EXTERNAL MODULE: ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
var bodyScrollLock_esm = __webpack_require__(156);

// CONCATENATED MODULE: ./src/packages/hooks/lockScreen.ts


/* harmony default export */ var lockScreen = (function (targetElement, trigger) {
  Object(vue_esm_browser["M" /* watch */])(trigger, function (val) {
    if (val) {
      Object(bodyScrollLock_esm["a" /* disableBodyScroll */])(targetElement, {
        reserveScrollBarGap: true
      });
    } else {
      Object(bodyScrollLock_esm["b" /* enableBodyScroll */])(targetElement);
    }
  });
});
// CONCATENATED MODULE: ./src/packages/hooks/useModalEscape.ts

var modals = [];
/* harmony default export */ var useModalEscape = (function (modal, visible) {
  Object(vue_esm_browser["M" /* watch */])(visible, function (val) {
    if (val) {
      modals.push(modal);
    } else {
      modals = modals.filter(function (item) {
        return item !== modal;
      });
    }
  });
});
document.addEventListener('keydown', function (e) {
  if (modals.length === 0) return;

  if (e.code === 'Escape') {
    e.stopPropagation();
    modals[modals.length - 1].handleClose();
  }
});
// CONCATENATED MODULE: ./src/packages/hooks/useModalBlur.ts

var useModalBlur_modals = [];

var blurIn = function blurIn(el) {
  el.classList.remove('t-blur-out');
  el.classList.add('t-blur-in');
};

var blurOut = function blurOut(el) {
  el.classList.remove('t-blur-in');
  el.classList.add('t-blur-out');
};

/* harmony default export */ var useModalBlur = (function (modal, visible) {
  Object(vue_esm_browser["M" /* watch */])(visible, function (val) {
    if (val) {
      if (useModalBlur_modals.length === 0) {
        blurIn(modal.rootEl);
      } else {
        blurIn(useModalBlur_modals[useModalBlur_modals.length - 1].overlayEle.value);
      }

      useModalBlur_modals.push(modal);
    } else {
      useModalBlur_modals = useModalBlur_modals.filter(function (item) {
        return item !== modal;
      });

      if (useModalBlur_modals.length === 0) {
        blurOut(modal.rootEl);
      } else {
        blurOut(useModalBlur_modals[useModalBlur_modals.length - 1].overlayEle.value);
      }
    }
  });
});
// CONCATENATED MODULE: ./src/packages/hooks/index.ts
// export { default as observeDom } from './observeDom';





// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/scale-view/Index.vue?vue&type=script&lang=ts





var defaultSize = '1920*1080';

var splitStrToNum = function splitStrToNum(str) {
  return str.split('*').map(function (item) {
    return Number(item);
  });
};

var resolveSize = function resolveSize(size) {
  var _splitStrToNum = splitStrToNum(sizeValidator(size) ? size : defaultSize),
      w = _splitStrToNum[0],
      h = _splitStrToNum[1];

  return {
    w: w,
    h: h
  };
};

var sizeValidator = function sizeValidator(value) {
  var size = splitStrToNum(value);
  return typeof value === 'string' && size.length === 2 && size.every(function (item) {
    return item > 0;
  });
};

/* harmony default export */ var Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TScaleView',
  props: {
    baseSize: {
      type: String,
      "default": defaultSize,
      validator: sizeValidator
    },
    scaleBody: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    // 设置宽高前不显示内容
    var show = Object(vue_esm_browser["A" /* ref */])(false); // 容器

    var containerEle = Object(vue_esm_browser["A" /* ref */])(null); // 容器的宽高样式

    var containerStyle = Object(vue_esm_browser["A" /* ref */])({}); // 容器父级

    var parentEle = Object(vue_esm_browser["A" /* ref */])(); // 根节点

    var htmlEle;

    var setParentEle = function setParentEle() {
      htmlEle = document.querySelector('html');
      parentEle.value = props.scaleBody ? htmlEle : containerEle.value.parentElement;
    };

    var setSize = function setSize() {
      var wrapW = parentEle.value.clientWidth;
      var wrapH = parentEle.value.clientHeight;
      var size = resolveSize(props.baseSize);
      var ratio = 1;

      if (size.w / size.h > wrapW / wrapH) {
        ratio = wrapW / size.w;
      } else {
        ratio = wrapH / size.h;
      }

      var style = {
        width: size.w + 'px',
        height: size.h + 'px'
      };

      if (props.scaleBody) {
        containerStyle.value = style;
        htmlEle.classList.add('t-flex');

        var bodyStyle = extends_default()({}, style, {
          flex: '0 0 auto'
        });

        for (var k in bodyStyle) {
          document.body.style[k] = style[k];
        }

        document.body.style.transform = "scale(" + ratio + ")";
      } else {
        containerStyle.value = extends_default()({}, style, {
          transform: "scale(" + ratio + ")"
        });
      }

      show.value = true;
    };

    Object(vue_esm_browser["t" /* onMounted */])(setParentEle);
    resizeEvent(parentEle, setSize);
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.baseSize;
    }, /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(vue_esm_browser["p" /* nextTick */])();

            case 2:
              setSize();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return {
      show: show,
      containerEle: containerEle,
      containerStyle: containerStyle,
      setSize: setSize
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/scale-view/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/scale-view/Index.vue



Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_049fbbd0_render

/* harmony default export */ var Index = (Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/scale-view/index.ts


Index.install = function (app) {
  app.component(Index.name, Index);
};

var _ScaleView = Index;
/* harmony default export */ var scale_view = (_ScaleView);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/carousel/Index.vue?vue&type=template&id=dd670824

var Indexvue_type_template_id_dd670824_hoisted_1 = {
  ref: "contentEle",
  "class": "t-content"
};
var Indexvue_type_template_id_dd670824_hoisted_2 = {
  key: 0,
  "class": "t-content"
};
function Indexvue_type_template_id_dd670824_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    "class": "t-carousel",
    onMouseenter: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.hoverPause && _ctx.pause();
    }),
    onMouseleave: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.hoverPause && _ctx.run();
    })
  }, [Object(vue_esm_browser["j" /* createVNode */])("div", {
    ref: "boxEle",
    style: _ctx.boxStyle,
    "class": "t-box"
  }, [Object(vue_esm_browser["j" /* createVNode */])("div", {
    style: _ctx.contentStyle,
    "class": [_ctx.isRow ? 't-row' : '']
  }, [Object(vue_esm_browser["j" /* createVNode */])("div", Indexvue_type_template_id_dd670824_hoisted_1, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default")], 512), _ctx.scroll ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_dd670824_hoisted_2, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default")])) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true)], 6)], 4)], 32);
}
// CONCATENATED MODULE: ./src/packages/carousel/Index.vue?vue&type=template&id=dd670824

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/carousel/Index.vue?vue&type=script&lang=ts

/* harmony default export */ var carousel_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TCarousel',
  props: {
    direction: {
      type: String,
      "default": 'left'
    },
    step: {
      type: Number,
      "default": 60
    },
    delay: {
      type: Number,
      "default": 0
    },
    hoverPause: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    var contentEle = Object(vue_esm_browser["A" /* ref */])(); // 是否暂停轮播

    var stop = Object(vue_esm_browser["A" /* ref */])(false); // 内容宽高，用于判断是否需要轮播

    var width = Object(vue_esm_browser["A" /* ref */])(0);
    var height = Object(vue_esm_browser["A" /* ref */])(0); // 是否需要轮播

    var scroll = Object(vue_esm_browser["A" /* ref */])(false); // 是否横向滚动

    var isRow = Object(vue_esm_browser["d" /* computed */])(function () {
      return !['up', 'down'].includes(props.direction);
    }); // 轮播动画样式

    var contentStyle = Object(vue_esm_browser["d" /* computed */])(function () {
      if (!scroll.value) return {};
      var distance = isRow.value ? width.value : height.value;
      return {
        animation: "\n                    " + distance / props.step + "s linear\n                    " + (props.delay || 0) + "ms both\n                    " + (stop.value ? 'paused' : 'running') + " infinite\n                    t-carousel-move-" + props.direction + "\n                "
      };
    }); // 包裹内容的容器

    var boxEle = Object(vue_esm_browser["A" /* ref */])(); // 容器偏移量样式

    var boxStyle = Object(vue_esm_browser["d" /* computed */])(function () {
      if (!scroll.value) return {};
      var d = props.direction;
      return d === 'right' ? {
        transform: 'translateX(100%)'
      } : d === 'down' ? {
        transform: 'translateY(100%)'
      } : {};
    }); // 判断是否需要轮播

    var controlScroll = function controlScroll() {
      var diffW = width.value - boxEle.value.clientWidth;
      var diffH = height.value - boxEle.value.clientHeight;
      scroll.value = true;
      if (isRow.value && diffW <= 0) scroll.value = false;
      if (!isRow.value && diffH <= 0) scroll.value = false;
    }; // 初始化


    var init = function init() {
      scroll.value = false;
      width.value = contentEle.value.offsetWidth;
      height.value = contentEle.value.offsetHeight;
      setTimeout(controlScroll, props.delay);
    }; // 监听 dom，变化后重置轮播


    var setObserver = function setObserver() {
      var observer = new MutationObserver(init);
      observer.observe(contentEle.value, {
        childList: true,
        subtree: true
      });
      Object(vue_esm_browser["u" /* onUnmounted */])(function () {
        return observer.disconnect();
      });
    };

    Object(vue_esm_browser["t" /* onMounted */])(function () {
      init();
      setObserver();
    });

    var run = function run() {
      stop.value = false;
    };

    var pause = function pause() {
      stop.value = true;
    };

    return {
      contentEle: contentEle,
      boxStyle: boxStyle,
      isRow: isRow,
      scroll: scroll,
      contentStyle: contentStyle,
      boxEle: boxEle,
      run: run,
      pause: pause
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/carousel/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/carousel/Index.vue



carousel_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_dd670824_render

/* harmony default export */ var carousel_Index = (carousel_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/carousel/index.ts


carousel_Index.install = function (app) {
  app.component(carousel_Index.name, carousel_Index);
};

var _Carousel = carousel_Index;
/* harmony default export */ var carousel = (_Carousel);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/tag-select/Index.vue?vue&type=template&id=3bed5a54

var Indexvue_type_template_id_3bed5a54_hoisted_1 = {
  "class": "t-wrap"
};
var Indexvue_type_template_id_3bed5a54_hoisted_2 = {
  ref: "optionsEle",
  "class": "t-options"
};
var Indexvue_type_template_id_3bed5a54_hoisted_3 = {
  key: 0,
  "class": "t-text"
};
var Indexvue_type_template_id_3bed5a54_hoisted_4 = {
  key: 1,
  "class": "t-text"
};
function Indexvue_type_template_id_3bed5a54_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    ref: "containerEle",
    "class": [{
      't-all': _ctx.expand
    }, "t-tag-select"]
  }, [Object(vue_esm_browser["j" /* createVNode */])("div", Indexvue_type_template_id_3bed5a54_hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("ul", Indexvue_type_template_id_3bed5a54_hoisted_2, [_ctx.multiple && _ctx.checkAll ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("li", {
    key: 0,
    "class": [{
      't-active': _ctx.checkedAll
    }, "t-tag"],
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.handleCheckAll && _ctx.handleCheckAll.apply(_ctx, arguments);
    })
  }, Object(vue_esm_browser["H" /* toDisplayString */])(_ctx.checkAllText), 3)) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true), (Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])(_ctx.options, function (item) {
    return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("li", {
      key: item.value,
      "class": [{
        't-active': _ctx.multiple && _ctx.modelValue.includes(item.value) || !_ctx.multiple && _ctx.modelValue === item.value,
        't-disabled': item.disabled || _ctx.disabled
      }, "t-tag"],
      onClick: Object(vue_esm_browser["P" /* withModifiers */])(function ($event) {
        return _ctx.handleCheck(item);
      }, ["stop"])
    }, Object(vue_esm_browser["H" /* toDisplayString */])(item.name), 11, ["onClick"]);
  }), 128))], 512)]), _ctx.foldable ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    key: 0,
    "class": "t-expand-btn",
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.handleToggleExpand && _ctx.handleToggleExpand.apply(_ctx, arguments);
    })
  }, [_ctx.expand ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("span", Indexvue_type_template_id_3bed5a54_hoisted_3, Object(vue_esm_browser["H" /* toDisplayString */])(_ctx.collapseText), 1)) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("span", Indexvue_type_template_id_3bed5a54_hoisted_4, Object(vue_esm_browser["H" /* toDisplayString */])(_ctx.expandText), 1)), Object(vue_esm_browser["j" /* createVNode */])("i", {
    "class": [{
      't-up': _ctx.expand
    }, "t-icon tiv-font t-icon-arrow"]
  }, null, 2)])) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true)], 2);
}
// CONCATENATED MODULE: ./src/packages/tag-select/Index.vue?vue&type=template&id=3bed5a54

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/tag-select/Index.vue?vue&type=script&lang=ts


/* harmony default export */ var tag_select_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TTagSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      "default": ''
    },
    expandable: {
      type: Boolean,
      "default": false
    },
    collapseText: {
      type: String,
      "default": '收起'
    },
    expandText: {
      type: String,
      "default": '展开'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    checkAll: {
      type: Boolean,
      "default": false
    },
    checkAllText: {
      type: String,
      "default": '全部'
    }
  },
  emits: ['update:modelValue', 'change'],
  setup: function setup(props, ctx) {
    // 是否多选
    var multiple = Object(vue_esm_browser["d" /* computed */])(function () {
      return Array.isArray(props.modelValue);
    }); // 选择

    var emit = function emit(value) {
      ctx.emit('update:modelValue', value);
      ctx.emit('change', value);
    };

    var handleCheck = function handleCheck(item) {
      if (props.disabled || item.disabled) return;

      if (multiple.value) {
        // todo
        var value = props.modelValue;
        var result = value.includes(item.value) ? value.filter(function (v) {
          return v !== item.value;
        }) : [].concat(value, [item.value]);
        emit(result);
      } else {
        emit(item.value);
      }
    }; // 展开收起


    var expand = Object(vue_esm_browser["A" /* ref */])(false);

    var handleToggleExpand = function handleToggleExpand() {
      expand.value = !expand.value;
    }; // 是否需要折叠，宽度充足不显示


    var foldable = Object(vue_esm_browser["A" /* ref */])(false);
    var optionsEle = Object(vue_esm_browser["A" /* ref */])();
    var containerEle = Object(vue_esm_browser["A" /* ref */])();

    var init = function init() {
      if (props.expandable) {
        if (!optionsEle.value) return;
        var height = optionsEle.value.clientHeight;
        var item = optionsEle.value.querySelector('li');

        if (!item) {
          foldable.value = false;
          return;
        }

        var itemHeight = item.clientHeight;
        var marginTop = window.getComputedStyle(item).marginTop;
        var marginBottom = window.getComputedStyle(item).marginBottom;
        var childHeight = itemHeight + parseInt(marginTop) + parseInt(marginBottom);
        foldable.value = height > childHeight;

        if (!foldable.value) {
          expand.value = false;
        }
      } else {
        expand.value = true;
      }
    };

    props.expandable ? resizeEvent(containerEle, init, 0) : Object(vue_esm_browser["t" /* onMounted */])(init); // 选择全部

    var handleCheckAll = function handleCheckAll() {
      var value = props.modelValue;
      var all = props.options.every(function (item) {
        return value.includes(item.value);
      });

      if (all) {
        emit([]);
      } else {
        emit(props.options.map(function (item) {
          return item.value;
        }));
      }
    }; // 是否已选择全部


    var checkedAll = Object(vue_esm_browser["d" /* computed */])(function () {
      if (!multiple.value || !props.checkAll) return false;
      return props.options.every(function (item) {
        var value = props.modelValue;
        return value.includes(item.value);
      });
    });
    return {
      multiple: multiple,
      handleCheck: handleCheck,
      expand: expand,
      handleToggleExpand: handleToggleExpand,
      foldable: foldable,
      optionsEle: optionsEle,
      handleCheckAll: handleCheckAll,
      checkedAll: checkedAll,
      containerEle: containerEle
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/tag-select/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/tag-select/Index.vue



tag_select_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_3bed5a54_render

/* harmony default export */ var tag_select_Index = (tag_select_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/tag-select/index.ts


tag_select_Index.install = function (app) {
  app.component(tag_select_Index.name, tag_select_Index);
};

var _TagSelect = tag_select_Index;
/* harmony default export */ var tag_select = (_TagSelect);
// CONCATENATED MODULE: ./src/packages/click-outside/index.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var nodeList = new Map();

var clickHandler = function clickHandler(e) {
  for (var _iterator = _createForOfIteratorHelperLoose(nodeList.values()), _step; !(_step = _iterator()).done;) {
    var documentHandler = _step.value;
    documentHandler(e);
  }
}; // 使用事件捕获，外部元素可能用了 @click.stop 阻止冒泡


document.addEventListener('click', clickHandler, true);

function createDocumentHandler(el, binding) {
  return function (e) {
    if (el.contains(e.target)) {
      return false;
    } // 此回调处于事件捕获阶段，执行先于外部元素的点击事件


    setTimeout(function () {
      binding.value(e);
    }, 0);
  };
}

var clickOutside = {
  beforeMount: function beforeMount(el, binding) {
    nodeList.set(el, createDocumentHandler(el, binding));
  },
  updated: function updated(el, binding) {
    nodeList.set(el, createDocumentHandler(el, binding));
  },
  unmounted: function unmounted(el) {
    nodeList["delete"](el);

    if (nodeList.size === 0) {
      document.removeEventListener('click', clickHandler, true);
    }
  }
};
/* harmony default export */ var click_outside = (clickOutside);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/pagination/Index.vue?vue&type=template&id=489e4a37


var Indexvue_type_template_id_489e4a37_hoisted_1 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("div", {
  "class": "t-left-bg"
}, null, -1);

var Indexvue_type_template_id_489e4a37_hoisted_2 = {
  "class": "t-page"
};
var Indexvue_type_template_id_489e4a37_hoisted_3 = {
  key: 0,
  "class": "t-prev t-disabled"
};

var Indexvue_type_template_id_489e4a37_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("div", {
  "class": "t-space"
}, null, -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("div", {
  "class": "t-space"
}, null, -1);

var _hoisted_6 = {
  "class": "t-pagers"
};
var _hoisted_7 = {
  "class": "t-text"
};

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("li", {
  "class": "t-space"
}, null, -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("div", {
  "class": "t-space"
}, null, -1);

var _hoisted_10 = {
  key: 2,
  "class": "t-next t-disabled"
};

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("div", {
  "class": "t-right-bg"
}, null, -1);

function Indexvue_type_template_id_489e4a37_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    "class": ['t-type-' + _ctx.type, "t-pagination"]
  }, [Indexvue_type_template_id_489e4a37_hoisted_1, Object(vue_esm_browser["j" /* createVNode */])("div", Indexvue_type_template_id_489e4a37_hoisted_2, [_ctx.pageIndex === 1 ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_489e4a37_hoisted_3)) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    key: 1,
    "class": "t-prev",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.handelChange(_ctx.pageIndex - 1);
    })
  })), Indexvue_type_template_id_489e4a37_hoisted_4, _hoisted_5, Object(vue_esm_browser["j" /* createVNode */])("ul", _hoisted_6, [(Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])(_ctx.pagers, function (p) {
    return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], {
      key: p
    }, [Object(vue_esm_browser["j" /* createVNode */])("li", {
      "class": [{
        't-active': _ctx.pageIndex === p
      }, "t-item"],
      onClick: function onClick($event) {
        return _ctx.handelChange(p);
      }
    }, [Object(vue_esm_browser["j" /* createVNode */])("p", _hoisted_7, Object(vue_esm_browser["H" /* toDisplayString */])(p), 1)], 10, ["onClick"]), _hoisted_8], 64);
  }), 128))]), _hoisted_9, _ctx.pageIndex === _ctx.pagerLength ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", _hoisted_10)) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    key: 3,
    "class": "t-next",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.handelChange(_ctx.pageIndex + 1);
    })
  }))]), _hoisted_11], 2);
}
// CONCATENATED MODULE: ./src/packages/pagination/Index.vue?vue&type=template&id=489e4a37

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/pagination/Index.vue?vue&type=script&lang=ts

/* harmony default export */ var pagination_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TPagination',
  props: {
    total: {
      type: Number,
      "default": 0
    },
    pageSize: {
      type: Number,
      "default": 10
    },
    pageIndex: {
      type: Number,
      "default": 1
    },
    // 最大页码按钮数
    pagerCount: {
      type: Number,
      "default": 7
    },
    type: {
      type: String,
      "default": 'circle'
    }
  },
  emits: ['change', 'update:pageIndex'],
  setup: function setup(props, ctx) {
    var pagerLength = Object(vue_esm_browser["d" /* computed */])(function () {
      return Math.ceil(props.total / props.pageSize);
    });
    var pagers = Object(vue_esm_browser["d" /* computed */])(function () {
      var pageIndex = props.pageIndex;
      var pagerCount = props.pagerCount < 1 ? 7 : props.pagerCount;
      return Array.from({
        length: pagerLength.value
      }).map(function (_, i) {
        return i + 1;
      }).filter(function (i) {
        if (pagerLength.value <= pagerCount) return true;
        var half = Math.floor(pagerCount / 2);
        var range = i >= pageIndex - half && i <= pageIndex + half;
        var moreLeft = pageIndex <= pagerCount - half && i <= pagerCount;
        var moreRight = pageIndex >= pagerLength.value - half && i > pagerLength.value - pagerCount;
        return range || moreLeft || moreRight;
      });
    }); // 当前页数变化后

    var handelChange = function handelChange(index) {
      // 使用 v-model
      ctx.emit('update:pageIndex', index);
      ctx.emit('change', index);
    };

    return {
      pagers: pagers,
      handelChange: handelChange,
      pagerLength: pagerLength
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/pagination/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/pagination/Index.vue



pagination_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_489e4a37_render

/* harmony default export */ var pagination_Index = (pagination_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/pagination/index.ts


pagination_Index.install = function (app) {
  app.component(pagination_Index.name, pagination_Index);
};

var _Pagination = pagination_Index;
/* harmony default export */ var pagination = (_Pagination);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/no-data/Index.vue?vue&type=template&id=1ef6c37a

var Indexvue_type_template_id_1ef6c37a_hoisted_1 = {
  "class": "t-no-data"
};
var Indexvue_type_template_id_1ef6c37a_hoisted_2 = {
  key: 1,
  "class": "tiv-font t-icon-empty t-icon"
};
var Indexvue_type_template_id_1ef6c37a_hoisted_3 = {
  "class": "t-des"
};
function Indexvue_type_template_id_1ef6c37a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_1ef6c37a_hoisted_1, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {}, function () {
    return [_ctx.image ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("img", {
      key: 0,
      src: _ctx.image,
      "class": "t-image",
      alt: ""
    }, null, 8, ["src"])) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("i", Indexvue_type_template_id_1ef6c37a_hoisted_2)), Object(vue_esm_browser["j" /* createVNode */])("p", Indexvue_type_template_id_1ef6c37a_hoisted_3, Object(vue_esm_browser["H" /* toDisplayString */])(_ctx.description), 1)];
  })]);
}
// CONCATENATED MODULE: ./src/packages/no-data/Index.vue?vue&type=template&id=1ef6c37a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/no-data/Index.vue?vue&type=script&lang=ts

/* harmony default export */ var no_data_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TNoData',
  props: {
    image: {
      type: String,
      "default": ''
    },
    description: {
      type: String,
      "default": '暂无数据'
    }
  }
}));
// CONCATENATED MODULE: ./src/packages/no-data/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/no-data/Index.vue



no_data_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_1ef6c37a_render

/* harmony default export */ var no_data_Index = (no_data_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/no-data/index.ts


no_data_Index.install = function (app) {
  app.component(no_data_Index.name, no_data_Index);
};

var _NoData = no_data_Index;
/* harmony default export */ var no_data = (_NoData);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/overlay/Index.vue?vue&type=template&id=dabac92c

function Indexvue_type_template_id_dabac92c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["b" /* Teleport */], {
    disabled: !_ctx.appendToBody,
    to: "body"
  }, [Object(vue_esm_browser["j" /* createVNode */])(vue_esm_browser["c" /* Transition */], {
    name: "t-fade",
    onAfterEnter: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$emit('opened');
    }),
    onAfterLeave: _ctx.closed
  }, {
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["O" /* withDirectives */])(Object(vue_esm_browser["j" /* createVNode */])("div", {
        ref: "overlayEle",
        "class": [[_ctx.$attrs["class"], {
          't-overlay-bg': !_ctx.blur
        }], "t-overlay"],
        style: _ctx.$attrs.style,
        onClick: _cache[2] || (_cache[2] = function () {
          return _ctx.handleClickModal && _ctx.handleClickModal.apply(_ctx, arguments);
        })
      }, [Object(vue_esm_browser["j" /* createVNode */])(vue_esm_browser["c" /* Transition */], {
        name: "t-move"
      }, {
        "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
          return [Object(vue_esm_browser["O" /* withDirectives */])(Object(vue_esm_browser["j" /* createVNode */])("div", {
            onClick: _cache[1] || (_cache[1] = Object(vue_esm_browser["P" /* withModifiers */])(function () {
              return _ctx.handleClickModal && _ctx.handleClickModal.apply(_ctx, arguments);
            }, ["stop", "self"]))
          }, [!_ctx.destroySlot ? Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
            key: 0
          }) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true)], 512), [[vue_esm_browser["L" /* vShow */], _ctx.modelValue]])];
        }),
        _: 1
      })], 6), [[vue_esm_browser["L" /* vShow */], _ctx.modelValue]])];
    }),
    _: 1
  }, 8, ["onAfterLeave"])], 8, ["disabled"]);
}
// CONCATENATED MODULE: ./src/packages/overlay/Index.vue?vue&type=template&id=dabac92c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/overlay/Index.vue?vue&type=script&lang=ts


/* harmony default export */ var overlay_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TOverlay',
  props: {
    modelValue: {
      type: Boolean,
      "default": false
    },
    appendToBody: {
      type: Boolean,
      "default": false
    },
    closeOnPressEscape: {
      type: Boolean,
      "default": true
    },
    destroyOnClose: {
      type: Boolean,
      "default": false
    },
    lockScroll: {
      type: Boolean,
      "default": true
    },
    closeOnClickModal: {
      type: Boolean,
      "default": true
    },
    blur: {
      type: String,
      "default": ''
    }
  },
  emits: ['opened', 'closed', 'change', 'update:modelValue'],
  setup: function setup(props, ctx) {
    var visible = Object(vue_esm_browser["I" /* toRef */])(props, 'modelValue'); // 是否销毁 overlay 中的内容，(destroy-on-close = true)

    var destroySlot = Object(vue_esm_browser["A" /* ref */])(false); // 关闭 overlay

    var closeOverlay = function closeOverlay() {
      return ctx.emit('update:modelValue', false);
    }; // 关闭动画结束时的回调


    var closed = function closed() {
      ctx.emit('closed');
      if (props.destroyOnClose) destroySlot.value = true;
    };

    Object(vue_esm_browser["M" /* watch */])(visible, function (val) {
      if (val) {
        destroySlot.value = false;
      }

      ctx.emit('change', val);
      ctx.emit('update:modelValue', val);
    }); // 组件卸载后关闭 overlay，例如切换路由后

    Object(vue_esm_browser["r" /* onBeforeUnmount */])(closeOverlay); // body 滚动锁定

    var overlayEle = Object(vue_esm_browser["A" /* ref */])();

    if (props.lockScroll) {
      Object(vue_esm_browser["t" /* onMounted */])(function () {
        lockScreen(overlayEle.value, visible);
      });
    } // escape 按键关闭 overlay


    if (props.closeOnPressEscape) {
      useModalEscape({
        handleClose: closeOverlay
      }, visible);
    } // 点击自身关闭 overlay


    var handleClickModal = function handleClickModal() {
      if (props.closeOnClickModal) {
        closeOverlay();
      }
    }; // body 模糊处理


    if (props.blur) {
      var el = document.querySelector(props.blur);
      if (!el) return;
      useModalBlur({
        rootEl: el,
        overlayEle: overlayEle
      }, visible);
    }

    return {
      destroySlot: destroySlot,
      closed: closed,
      overlayEle: overlayEle,
      handleClickModal: handleClickModal
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/overlay/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/overlay/Index.vue



overlay_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_dabac92c_render

/* harmony default export */ var overlay_Index = (overlay_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/overlay/index.ts


overlay_Index.install = function (app) {
  app.component(overlay_Index.name, overlay_Index);
};

var _Overlay = overlay_Index;
/* harmony default export */ var overlay = (_Overlay);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/index-text/Index.vue?vue&type=template&id=236f63db

function Indexvue_type_template_id_236f63db_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("span", {
    "class": [[_ctx.highlight ? 't-order-' + _ctx.index : '', {
      't-checked': _ctx.checked
    }, 't-type-' + _ctx.type], "t-index-text"]
  }, Object(vue_esm_browser["H" /* toDisplayString */])(_ctx.index), 3);
}
// CONCATENATED MODULE: ./src/packages/index-text/Index.vue?vue&type=template&id=236f63db

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/index-text/Index.vue?vue&type=script&lang=ts

/* harmony default export */ var index_text_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TIndexText',
  props: {
    index: {
      type: Number,
      required: true
    },
    checked: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": '1'
    },
    highlight: {
      type: Boolean,
      "default": false
    }
  }
}));
// CONCATENATED MODULE: ./src/packages/index-text/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/index-text/Index.vue



index_text_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_236f63db_render

/* harmony default export */ var index_text_Index = (index_text_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/index-text/index.ts


index_text_Index.install = function (app) {
  app.component(index_text_Index.name, index_text_Index);
};

var _IndexText = index_text_Index;
/* harmony default export */ var index_text = (_IndexText);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/word-cloud/Index.vue?vue&type=template&id=7163ad95

var Indexvue_type_template_id_7163ad95_hoisted_1 = {
  ref: "chartEle",
  "class": "t-word-cloud"
};
function Indexvue_type_template_id_7163ad95_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_7163ad95_hoisted_1, null, 512);
}
// CONCATENATED MODULE: ./src/packages/word-cloud/Index.vue?vue&type=template&id=7163ad95

// EXTERNAL MODULE: ./node_modules/echarts/index.js + 349 modules
var echarts = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/echarts-wordcloud/index.js + 5 modules
var echarts_wordcloud = __webpack_require__(479);

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(193);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/word-cloud/Index.vue?vue&type=script&lang=ts





/* harmony default export */ var word_cloud_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TWordCloud',
  props: {
    option: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    bindResize: {
      type: Boolean,
      "default": true
    }
  },
  emits: ['instance-created'],
  setup: function setup(props, ctx) {
    var chartEle = Object(vue_esm_browser["A" /* ref */])();
    var myChart;

    var setChart = function setChart() {
      if (!myChart) return;
      var option = merge_default()({
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        layoutAnimation: true,
        textStyle: {
          color: function color() {
            return 'rgb(' + [Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',') + ')';
          }
        },
        emphasis: {
          textStyle: {
            shadowBlur: '10px',
            shadowColor: '#333'
          }
        },
        data: []
      }, props.option);
      myChart.setOption({
        series: [option]
      });
    };

    Object(vue_esm_browser["M" /* watch */])(props.option, setChart);
    Object(vue_esm_browser["t" /* onMounted */])(function () {
      myChart = echarts["a" /* init */](chartEle.value);
      setChart();
      ctx.emit('instance-created', myChart);
      props.bindResize && windowResize(myChart.resize, 1000);
    });
    var once = true;
    resizeEvent(chartEle, function () {
      // 第一次不需调用 resize
      !once && myChart.resize();
      once = false;
    }, 1000);
    Object(vue_esm_browser["r" /* onBeforeUnmount */])(function () {
      myChart.dispose();
    });
    return {
      chartEle: chartEle
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/word-cloud/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/word-cloud/Index.vue



word_cloud_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_7163ad95_render

/* harmony default export */ var word_cloud_Index = (word_cloud_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/word-cloud/index.ts


word_cloud_Index.install = function (app) {
  app.component(word_cloud_Index.name, word_cloud_Index);
};

var _WordCloud = word_cloud_Index;
/* harmony default export */ var word_cloud = (_WordCloud);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/tag-cloud/Index.vue?vue&type=template&id=74bd78ea

var Indexvue_type_template_id_74bd78ea_hoisted_1 = {
  ref: "chartEle",
  "class": "t-tag-cloud"
};
function Indexvue_type_template_id_74bd78ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_74bd78ea_hoisted_1, null, 512);
}
// CONCATENATED MODULE: ./src/packages/tag-cloud/Index.vue?vue&type=template&id=74bd78ea

// EXTERNAL MODULE: ./node_modules/TagCloud/dist/TagCloud.js
var TagCloud = __webpack_require__(194);
var TagCloud_default = /*#__PURE__*/__webpack_require__.n(TagCloud);

// CONCATENATED MODULE: ./src/packages/utils/util.ts
// 在某个范围内获取随机整数
function getRandomInt(min, max) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 1;
  }

  return Math.floor(Math.random() * (max - min) + min);
} // 随机生成颜色

function randomColor() {
  return '#' + (Math.random() * 0xffffff << 0).toString(16);
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/tag-cloud/Index.vue?vue&type=script&lang=ts



/* harmony default export */ var tag_cloud_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TTagCloud',
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    option: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    colors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  emits: ['instance-created', 'click-tag'],
  setup: function setup(props, ctx) {
    var chartEle = Object(vue_esm_browser["A" /* ref */])();
    var myChart;
    var itemClass = '';

    var setChart = function setChart() {
      myChart && myChart.destroy();
      var option = Object.assign({
        radius: 140,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 45,
        keep: false,
        containerClass: 'tag-cloud-container',
        itemClass: 'tag-cloud-item',
        useContainerInlineStyles: true,
        useItemInlineStyles: true
      }, props.option);
      myChart = TagCloud_default()(chartEle.value, props.data, option);
      itemClass = option.itemClass;
      setColor();
    };

    var setColor = function setColor() {
      if (!props.colors.length) return; // eslint-disable-next-line no-undef

      var items = chartEle.value.querySelectorAll('.' + itemClass);
      items.forEach(function (item) {
        var index = getRandomInt(0, props.colors.length);
        item.style.color = props.colors[index];
      });
    };

    var handleTagClick = function handleTagClick(e) {
      var el = e.target;

      if (el.classList.contains(itemClass)) {
        ctx.emit('click-tag', el.innerText);
      }
    };

    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.option;
    }, setChart);
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.data;
    }, function (text) {
      myChart.update(text);
    });
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.colors;
    }, setColor);
    Object(vue_esm_browser["t" /* onMounted */])(function () {
      setChart();
      ctx.emit('instance-created', myChart);
      chartEle.value.addEventListener('click', handleTagClick);
    });
    Object(vue_esm_browser["r" /* onBeforeUnmount */])(function () {
      myChart.destroy();
      chartEle.value.removeEventListener('click', handleTagClick);
    });
    return {
      chartEle: chartEle
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/tag-cloud/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/tag-cloud/Index.vue



tag_cloud_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_74bd78ea_render

/* harmony default export */ var tag_cloud_Index = (tag_cloud_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/tag-cloud/index.ts


tag_cloud_Index.install = function (app) {
  app.component(tag_cloud_Index.name, tag_cloud_Index);
};

var _TagCloud = tag_cloud_Index;
/* harmony default export */ var tag_cloud = (_TagCloud);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/count-card/Index.vue?vue&type=template&id=aee165de

var Indexvue_type_template_id_aee165de_hoisted_1 = {
  "class": "t-count-card"
};
function Indexvue_type_template_id_aee165de_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_aee165de_hoisted_1, [(Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])(_ctx.textArr, function (t, i) {
    return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])(Object(vue_esm_browser["F" /* resolveDynamicComponent */])(_ctx.type + '-item'), {
      key: i,
      data: t
    }, {
      "default": Object(vue_esm_browser["N" /* withCtx */])(function (_ref) {
        var v = _ref.v;
        return [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
          val: v,
          index: i
        })];
      }),
      _: 2
    }, 1032, ["data"]);
  }), 128))]);
}
// CONCATENATED MODULE: ./src/packages/count-card/Index.vue?vue&type=template&id=aee165de

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/count-card/slideItem.vue?vue&type=template&id=b7a7a814

var slideItemvue_type_template_id_b7a7a814_hoisted_1 = {
  key: 0,
  ref: "boxEle",
  "class": "t-text-box"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_2 = {
  "class": "t-text t-new t-up"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_3 = {
  "class": "t-val"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_4 = {
  "class": "t-text t-old"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_5 = {
  "class": "t-val"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_6 = {
  "class": "t-text t-new t-down"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_7 = {
  "class": "t-val"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_8 = {
  key: 1,
  "class": "t-text"
};
var slideItemvue_type_template_id_b7a7a814_hoisted_9 = {
  "class": "t-val"
};
function slideItemvue_type_template_id_b7a7a814_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    "class": [{
      't-not-num': !$setup.isNum
    }, "t-slide-item"]
  }, [$setup.isNum ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", slideItemvue_type_template_id_b7a7a814_hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("div", slideItemvue_type_template_id_b7a7a814_hoisted_2, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.newText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", slideItemvue_type_template_id_b7a7a814_hoisted_3, Object(vue_esm_browser["H" /* toDisplayString */])($setup.newText), 1)];
  })]), Object(vue_esm_browser["j" /* createVNode */])("div", slideItemvue_type_template_id_b7a7a814_hoisted_4, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.oldText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", slideItemvue_type_template_id_b7a7a814_hoisted_5, Object(vue_esm_browser["H" /* toDisplayString */])($setup.oldText), 1)];
  })]), Object(vue_esm_browser["j" /* createVNode */])("div", slideItemvue_type_template_id_b7a7a814_hoisted_6, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.newText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", slideItemvue_type_template_id_b7a7a814_hoisted_7, Object(vue_esm_browser["H" /* toDisplayString */])($setup.newText), 1)];
  })])], 512)) : (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", slideItemvue_type_template_id_b7a7a814_hoisted_8, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $props.data
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", slideItemvue_type_template_id_b7a7a814_hoisted_9, Object(vue_esm_browser["H" /* toDisplayString */])($props.data), 1)];
  })]))], 2);
}
// CONCATENATED MODULE: ./src/packages/count-card/slideItem.vue?vue&type=template&id=b7a7a814

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(140);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/count-card/slideItem.vue?vue&type=script&lang=ts




/* harmony default export */ var slideItemvue_type_script_lang_ts = ({
  name: 'SlideItem',
  props: {
    data: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var boxEle = Object(vue_esm_browser["A" /* ref */])();
    var oldText = Object(vue_esm_browser["A" /* ref */])(props.data);
    var newText = Object(vue_esm_browser["A" /* ref */])(props.data);
    var isNum = Object(vue_esm_browser["d" /* computed */])(function () {
      return /\d/.test(props.data);
    }); // 动画时长

    var time = 300;

    var slide = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(v) {
        var box;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newText.value = v;
                _context.next = 3;
                return Object(vue_esm_browser["p" /* nextTick */])();

              case 3:
                box = boxEle.value;

                if (box) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                box.style.transition = time / 1000 + 's';
                box.classList.add(newText.value < oldText.value ? 't-down' : 't-up');
                setTimeout(function () {
                  box.style.transition = '0s';
                  box.classList.remove('t-up', 't-down');
                  oldText.value = v;
                }, time);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function slide(_x) {
        return _ref.apply(this, arguments);
      };
    }(); // 保证动画能完成


    var cb = throttle_default()(slide, time * 1.2);
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.data;
    }, cb);
    return {
      oldText: oldText,
      newText: newText,
      boxEle: boxEle,
      isNum: isNum
    };
  }
});
// CONCATENATED MODULE: ./src/packages/count-card/slideItem.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/count-card/slideItem.vue



slideItemvue_type_script_lang_ts.render = slideItemvue_type_template_id_b7a7a814_render

/* harmony default export */ var slideItem = (slideItemvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/count-card/flipItem.vue?vue&type=template&id=72dce5f2

var flipItemvue_type_template_id_72dce5f2_hoisted_1 = {
  ref: "oldEle",
  "class": "t-text-box t-old-top"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_2 = {
  "class": "t-text"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_3 = {
  "class": "t-val"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_4 = {
  "class": "t-text-box t-old-bottom"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_5 = {
  "class": "t-text"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_6 = {
  "class": "t-val"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_7 = {
  "class": "t-text-box t-new-top"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_8 = {
  "class": "t-text"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_9 = {
  "class": "t-val"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_10 = {
  ref: "newEle",
  "class": "t-text-box t-new-bottom"
};
var flipItemvue_type_template_id_72dce5f2_hoisted_11 = {
  "class": "t-text"
};
var _hoisted_12 = {
  "class": "t-val"
};
var _hoisted_13 = {
  "class": "t-text-copy"
};
var _hoisted_14 = {
  "class": "t-text"
};
var _hoisted_15 = {
  "class": "t-val"
};
function flipItemvue_type_template_id_72dce5f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", {
    ref: "flipEle",
    "class": [{
      't-not-num': !$setup.isNum
    }, "t-flip-item"]
  }, [Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_2, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.oldText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", flipItemvue_type_template_id_72dce5f2_hoisted_3, Object(vue_esm_browser["H" /* toDisplayString */])($setup.oldText), 1)];
  })])], 512), Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_4, [Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_5, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.oldText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", flipItemvue_type_template_id_72dce5f2_hoisted_6, Object(vue_esm_browser["H" /* toDisplayString */])($setup.oldText), 1)];
  })])]), Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_7, [Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_8, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.newText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", flipItemvue_type_template_id_72dce5f2_hoisted_9, Object(vue_esm_browser["H" /* toDisplayString */])($setup.newText), 1)];
  })])]), Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_10, [Object(vue_esm_browser["j" /* createVNode */])("div", flipItemvue_type_template_id_72dce5f2_hoisted_11, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.newText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", _hoisted_12, Object(vue_esm_browser["H" /* toDisplayString */])($setup.newText), 1)];
  })])], 512), Object(vue_esm_browser["j" /* createVNode */])("div", _hoisted_13, [Object(vue_esm_browser["j" /* createVNode */])("div", _hoisted_14, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default", {
    v: $setup.oldText
  }, function () {
    return [Object(vue_esm_browser["j" /* createVNode */])("span", _hoisted_15, Object(vue_esm_browser["H" /* toDisplayString */])($setup.oldText), 1)];
  })])])], 2);
}
// CONCATENATED MODULE: ./src/packages/count-card/flipItem.vue?vue&type=template&id=72dce5f2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/count-card/flipItem.vue?vue&type=script&lang=ts




/* harmony default export */ var flipItemvue_type_script_lang_ts = ({
  name: 'FlipItem',
  props: {
    data: {
      type: String,
      required: true
    }
  },
  setup: function setup(props) {
    var flipEle = Object(vue_esm_browser["A" /* ref */])();
    var oldEle = Object(vue_esm_browser["A" /* ref */])();
    var newEle = Object(vue_esm_browser["A" /* ref */])();
    var oldText = Object(vue_esm_browser["A" /* ref */])(props.data);
    var newText = Object(vue_esm_browser["A" /* ref */])(props.data);
    var isNum = Object(vue_esm_browser["d" /* computed */])(function () {
      return /\d/.test(props.data);
    }); // 动画时长

    var time = 800;

    var slide = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(v) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newText.value = v;
                _context.next = 3;
                return Object(vue_esm_browser["p" /* nextTick */])();

              case 3:
                oldEle.value.classList.add('t-flip-old');
                newEle.value.classList.add('t-flip-new');
                setTimeout(function () {
                  if (!oldEle.value || !newEle.value) return;
                  oldEle.value.classList.remove('t-flip-old');
                  newEle.value.classList.remove('t-flip-new');
                  oldText.value = v;
                }, time);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function slide(_x) {
        return _ref.apply(this, arguments);
      };
    }(); // 保证动画能完成


    var cb = throttle_default()(slide, time * 1.2);
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.data;
    }, cb);
    return {
      oldText: oldText,
      newText: newText,
      oldEle: oldEle,
      newEle: newEle,
      flipEle: flipEle,
      isNum: isNum
    };
  }
});
// CONCATENATED MODULE: ./src/packages/count-card/flipItem.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/count-card/flipItem.vue



flipItemvue_type_script_lang_ts.render = flipItemvue_type_template_id_72dce5f2_render

/* harmony default export */ var flipItem = (flipItemvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/count-card/Index.vue?vue&type=script&lang=ts



/* harmony default export */ var count_card_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TCountCard',
  components: {
    SlideItem: slideItem,
    FlipItem: flipItem
  },
  props: {
    data: {
      type: [Number, String],
      "default": ''
    },
    type: {
      type: String,
      "default": 'slide'
    }
  },
  setup: function setup(props) {
    var textArr = Object(vue_esm_browser["d" /* computed */])(function () {
      return (props.data + '').split('').filter(function (s) {
        return !/\s/.test(s);
      });
    });
    return {
      textArr: textArr
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/count-card/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/count-card/Index.vue



count_card_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_aee165de_render

/* harmony default export */ var count_card_Index = (count_card_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/count-card/index.ts


count_card_Index.install = function (app) {
  app.component(count_card_Index.name, count_card_Index);
};

var _CountCard = count_card_Index;
/* harmony default export */ var count_card = (_CountCard);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/text-marquee/Index.vue?vue&type=template&id=5846f736

var Indexvue_type_template_id_5846f736_hoisted_1 = {
  ref: "wrapEle",
  "class": "t-text-marquee"
};
function Indexvue_type_template_id_5846f736_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_5846f736_hoisted_1, [(Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])(Object(vue_esm_browser["F" /* resolveDynamicComponent */])(_ctx.componentName), {
    "hover-pause": _ctx.hoverPause,
    step: _ctx.step,
    "class": "t-text-marquee-wrap"
  }, {
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])("ul", {
        style: {
          minWidth: _ctx.wrapWidth * 1.1 + 'px'
        },
        "class": "t-text-marquee-list"
      }, [(Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])(_ctx.dataGroup, function (list, index) {
        return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("li", {
          key: index,
          "class": "t-scroll-bar"
        }, [(Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])(list, function (item) {
          return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("span", {
            key: item.id,
            style: item.style,
            "class": "t-text-item",
            onClick: function onClick($event) {
              return _ctx.handleClick(item.data);
            }
          }, Object(vue_esm_browser["H" /* toDisplayString */])(item.data.text), 13, ["onClick"]);
        }), 128))]);
      }), 128))], 4)];
    }),
    _: 1
  }, 8, ["hover-pause", "step"]))], 512);
}
// CONCATENATED MODULE: ./src/packages/text-marquee/Index.vue?vue&type=template&id=5846f736

// CONCATENATED MODULE: ./src/packages/text-marquee/useStyle.ts


// 分组
function divideData(data, rows) {
  var index = 0;
  var array = [];

  while (index < data.length) {
    var i = index % rows;
    if (!array[i]) array[i] = [];
    array[i].push(data[index++]);
  }

  return array;
}

var genId = function genId(str) {
  return Math.random() + str;
}; // 获取容器的宽高


function getSize(el) {
  return {
    wrapW: el.clientWidth,
    wrapH: el.clientHeight
  };
}

function setStyle(el, _ref) {
  var data = _ref.data,
      colors = _ref.colors,
      maxFontSize = _ref.maxFontSize;

  var _getSize = getSize(el),
      wrapW = _getSize.wrapW,
      wrapH = _getSize.wrapH; // 权重范围


  var weight = data.map(function (item) {
    return item.weight;
  });
  var wRange = [Math.min.apply(Math, weight), Math.max.apply(Math, weight)]; // 字体大小范围

  var fRange = [14, maxFontSize]; // 文本行高

  var lineH = maxFontSize * 1.6; // 根据高度计算最多能够显示的行数

  var rows = Math.floor(wrapH / lineH); // 文字较少时，调整行数和行高

  if (data.length < rows) rows = data.length;
  lineH = Math.floor(wrapH / rows) * 0.9;
  var group = divideData(data, rows); // 每一行文本都需要错开显示

  var delta = wrapW / group.length;
  var spacing = group.map(function (_, i) {
    return (i + 1) * delta;
  }).sort(function () {
    return Math.random() - 0.5;
  });
  return group.map(function (row, index) {
    return row.map(function (item, idx) {
      // 根据权重计算字体大小
      var fontSize = (item.weight - wRange[0]) / (wRange[1] - wRange[0]) * (fRange[1] - fRange[0]) + fRange[0]; // 文本颜色

      var color = colors.length ? colors[getRandomInt(0, colors.length)] : randomColor();
      return {
        data: item,
        id: genId(index + '' + idx),
        style: {
          fontSize: fontSize + 'px',
          marginLeft: idx === 0 ? spacing[index] + 'px' : getRandomInt(100, 300) + 'px',
          color: color,
          lineHeight: lineH + 'px'
        }
      };
    });
  });
}


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/text-marquee/Index.vue?vue&type=script&lang=ts



/* harmony default export */ var text_marquee_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TTextMarquee',
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // 文字的颜色
    colors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // 字体最大值 (px)
    maxFontSize: {
      type: Number,
      "default": 30
    },
    // 鼠标移入暂停
    hoverPause: {
      type: Boolean,
      "default": false
    },
    // 1s移动的距离 (px)
    step: {
      type: Number,
      "default": 60
    }
  },
  emits: ['click'],
  setup: function setup(props, ctx) {
    var dataGroup = Object(vue_esm_browser["A" /* ref */])();
    var componentName = Object(vue_esm_browser["A" /* ref */])('div');
    var wrapWidth = Object(vue_esm_browser["A" /* ref */])(0);
    var wrapEle = Object(vue_esm_browser["A" /* ref */])();

    var init = function init() {
      var wrapSize = getSize(wrapEle.value);
      wrapWidth.value = wrapSize.wrapW;
      var params = {
        data: props.data,
        colors: props.colors,
        maxFontSize: props.maxFontSize
      };
      dataGroup.value = setStyle(wrapEle.value, params);
      Object(vue_esm_browser["p" /* nextTick */])(function () {
        // 列表渲染完成后再轮播
        componentName.value = props.data.length && wrapSize.wrapW && wrapSize.wrapH ? 't-carousel' : 'div';
      });
    }; // wrapEle 宽高变化时，执行 init


    resizeEvent(wrapEle, init);
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.data;
    }, function () {
      return init();
    });

    var handleClick = function handleClick(v) {
      return ctx.emit('click', v);
    };

    return {
      dataGroup: dataGroup,
      componentName: componentName,
      handleClick: handleClick,
      wrapWidth: wrapWidth,
      wrapEle: wrapEle
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/text-marquee/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/text-marquee/Index.vue



text_marquee_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_5846f736_render

/* harmony default export */ var text_marquee_Index = (text_marquee_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/text-marquee/index.ts


text_marquee_Index.install = function (app) {
  app.component(text_marquee_Index.name, text_marquee_Index);
};

var _TextMarquee = text_marquee_Index;
/* harmony default export */ var text_marquee = (_TextMarquee);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/packages/img-hotspot/Index.vue?vue&type=template&id=fc1e53b4

var Indexvue_type_template_id_fc1e53b4_hoisted_1 = {
  "class": "t-img-hotspot"
};
var Indexvue_type_template_id_fc1e53b4_hoisted_2 = {
  ref: "canvasEle",
  "class": "t-canvas"
};
function Indexvue_type_template_id_fc1e53b4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", Indexvue_type_template_id_fc1e53b4_hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("img", {
    ref: "imageEle",
    usemap: '#' + _ctx.mapName,
    src: _ctx.image,
    "class": "t-img"
  }, null, 8, ["usemap", "src"]), Object(vue_esm_browser["j" /* createVNode */])("canvas", Indexvue_type_template_id_fc1e53b4_hoisted_2, null, 512), Object(vue_esm_browser["j" /* createVNode */])("map", {
    id: _ctx.mapName,
    name: _ctx.mapName
  }, [(Object(vue_esm_browser["v" /* openBlock */])(true), Object(vue_esm_browser["f" /* createBlock */])(vue_esm_browser["a" /* Fragment */], null, Object(vue_esm_browser["B" /* renderList */])(_ctx.coordsList, function (item) {
    return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("area", {
      key: item.points,
      coords: item.points,
      shape: "poly",
      "class": "t-area",
      onMouseenter: function onMouseenter($event) {
        return _ctx.$emit('area-hover', item.data);
      },
      onClick: function onClick($event) {
        return _ctx.$emit('area-click', item.data);
      }
    }, null, 40, ["coords", "onMouseenter", "onClick"]);
  }), 128))], 8, ["id", "name"])]);
}
// CONCATENATED MODULE: ./src/packages/img-hotspot/Index.vue?vue&type=template&id=fc1e53b4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/packages/img-hotspot/Index.vue?vue&type=script&lang=ts


// 传入的坐标是相对于原图的
var setCoords = function setCoords(coords, width, height, originW, originH) {
  return (coords || '').split(',').map(function (v, index) {
    var val = Number(v);
    return index % 2 === 0 ? val / originW * width : val / originH * height;
  }).join(',');
};

/* harmony default export */ var img_hotspot_Indexvue_type_script_lang_ts = (Object(vue_esm_browser["k" /* defineComponent */])({
  name: 'TImgHotspot',
  props: {
    image: {
      type: String,
      required: true
    },
    hotspots: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    coverColor: {
      type: String,
      "default": 'rgba(71,134,255,0.2)'
    }
  },
  emits: ['area-hover', 'area-click'],
  setup: function setup(props) {
    var imageEle = Object(vue_esm_browser["A" /* ref */])();
    var imgWidth = 0;
    var imgHeight = 0;
    var coordsList = Object(vue_esm_browser["A" /* ref */])();

    var loadFn = function loadFn() {
      imgWidth = imageEle.value.width;
      imgHeight = imageEle.value.height;
      var img = new Image();
      img.src = props.image;

      img.onload = function () {
        coordsList.value = props.hotspots.map(function (data) {
          var points = setCoords(data.path, imgWidth, imgHeight, img.width, img.height) || '';
          return {
            points: points,
            data: data
          };
        });
        drawCover();
      };
    };

    var canvasEle = Object(vue_esm_browser["A" /* ref */])();

    var drawCover = function drawCover() {
      var canvas = canvasEle.value;
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      coordsList.value.forEach(function (item) {
        if (item.data.cover !== true) return;
        var points = item.points.split(',').map(function (item) {
          return Number(item);
        });
        ctx.moveTo(points[0], points[1]);

        for (var i = 2; points[i]; i = i + 2) {
          ctx.lineTo(points[i], points[i + 1]);
        }
      });
      ctx.closePath();
      ctx.fillStyle = props.coverColor;
      ctx.strokeStyle = 'transparent';
      ctx.fill();
      ctx.stroke();
    };

    Object(vue_esm_browser["t" /* onMounted */])(function () {
      imageEle.value.onload = loadFn;
    });
    Object(vue_esm_browser["M" /* watch */])(function () {
      return props.hotspots;
    }, loadFn);
    return {
      imageEle: imageEle,
      canvasEle: canvasEle,
      mapName: 't-map-' + Date.now(),
      coordsList: coordsList
    };
  }
}));
// CONCATENATED MODULE: ./src/packages/img-hotspot/Index.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/packages/img-hotspot/Index.vue



img_hotspot_Indexvue_type_script_lang_ts.render = Indexvue_type_template_id_fc1e53b4_render

/* harmony default export */ var img_hotspot_Index = (img_hotspot_Indexvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/packages/img-hotspot/index.ts


img_hotspot_Index.install = function (app) {
  app.component(img_hotspot_Index.name, img_hotspot_Index);
};

var _ImgHotspot = img_hotspot_Index;
/* harmony default export */ var img_hotspot = (_ImgHotspot);
// CONCATENATED MODULE: ./src/packages/tiv/index.ts













var components = [scale_view, carousel, tag_select, pagination, no_data, overlay, index_text, word_cloud, tag_cloud, count_card, text_marquee, img_hotspot];
/* harmony default export */ var tiv = ({
  install: function install(app) {
    components.forEach(function (c) {
      return app.component(c.name, c);
    });
    app.directive('click-outside', click_outside);
  }
});

// EXTERNAL MODULE: ./website/images/clippy.svg
var clippy = __webpack_require__(195);
var clippy_default = /*#__PURE__*/__webpack_require__.n(clippy);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/DemoBlock.vue?vue&type=template&id=14740f1e&scoped=true



var DemoBlockvue_type_template_id_14740f1e_scoped_true_withId = /*#__PURE__*/Object(vue_esm_browser["Q" /* withScopeId */])("data-v-14740f1e");

Object(vue_esm_browser["y" /* pushScopeId */])("data-v-14740f1e");

var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_1 = {
  "class": "demo-block"
};
var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_2 = {
  "class": "demo"
};
var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_3 = {
  key: 0,
  "class": "description"
};
var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_4 = {
  "class": "highlight"
};
var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_5 = {
  "class": "opt-btns"
};

var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("img", {
  src: clippy_default.a,
  "class": "bg",
  alt: ""
}, null, -1);

var DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_7 = {
  "class": "demo-control"
};

Object(vue_esm_browser["w" /* popScopeId */])();

var DemoBlockvue_type_template_id_14740f1e_scoped_true_render = /*#__PURE__*/DemoBlockvue_type_template_id_14740f1e_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_1, [Object(vue_esm_browser["j" /* createVNode */])("div", DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_2, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "demo")]), _ctx.$slots["default"] ? (Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_3, [Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "default")])) : Object(vue_esm_browser["g" /* createCommentVNode */])("", true), Object(vue_esm_browser["j" /* createVNode */])("div", DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_4, [Object(vue_esm_browser["j" /* createVNode */])("div", {
    ref: "codeWrapElm",
    "class": [{
      show: $data.visible
    }, "code-wrap"]
  }, [Object(vue_esm_browser["j" /* createVNode */])("div", DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_5, [Object(vue_esm_browser["j" /* createVNode */])("p", {
    "class": ["copy-icon", {
      'tooltip-ped': $data.copyTips
    }],
    "aria-label": $data.copyTips
  }, [DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_6], 10, ["aria-label"])]), Object(vue_esm_browser["C" /* renderSlot */])(_ctx.$slots, "highlight")], 2), Object(vue_esm_browser["j" /* createVNode */])("div", DemoBlockvue_type_template_id_14740f1e_scoped_true_hoisted_7, [Object(vue_esm_browser["j" /* createVNode */])("span", {
    "class": "visible-btn",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleCode && $options.toggleCode.apply($options, arguments);
    })
  }, Object(vue_esm_browser["H" /* toDisplayString */])($data.visible ? '隐藏' : '显示') + "代码", 1)])])]);
});
// CONCATENATED MODULE: ./website/components/DemoBlock.vue?vue&type=template&id=14740f1e&scoped=true

// EXTERNAL MODULE: ./node_modules/clipboard/dist/clipboard.js
var clipboard = __webpack_require__(196);
var clipboard_default = /*#__PURE__*/__webpack_require__.n(clipboard);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/DemoBlock.vue?vue&type=script&lang=js

/* harmony default export */ var DemoBlockvue_type_script_lang_js = ({
  name: 'DemoBlock',
  data: function data() {
    return {
      visible: false,
      copyTips: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.clipboard = new clipboard_default.a('.copy-icon', {
      target: function target() {
        return _this.$refs.codeWrapElm;
      }
    });
    this.clipboard.on('success', function (e) {
      _this.copyTips = 'copied!';

      _this.clearTips();

      e.clearSelection();
    });
    this.clipboard.on('error', function () {
      _this.copyTips = 'falied!';

      _this.clearTips();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.clipboard.destroy();
  },
  methods: {
    toggleCode: function toggleCode() {
      this.visible = !this.visible;
    },
    clearTips: function clearTips() {
      var _this2 = this;

      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.copyTips = '';
      }, 3000);
    }
  }
});
// CONCATENATED MODULE: ./website/components/DemoBlock.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--11-0!./website/components/DemoBlock.vue?vue&type=style&index=0&id=14740f1e&scoped=true&lang=less
var DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less = __webpack_require__(157);
var DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_default = /*#__PURE__*/__webpack_require__.n(DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--11-0!./website/components/DemoBlock.vue?vue&type=style&index=0&id=14740f1e&scoped=true&lang=less

            

var DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_options = {};

DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_options.insert = "head";
DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_options.singleton = false;

var DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_update = injectStylesIntoStyleTag_default()(DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_default.a, DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_options);



/* harmony default export */ var components_DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less = (DemoBlockvue_type_style_index_0_id_14740f1e_scoped_true_lang_less_default.a.locals || {});
// CONCATENATED MODULE: ./website/components/DemoBlock.vue?vue&type=style&index=0&id=14740f1e&scoped=true&lang=less

// CONCATENATED MODULE: ./website/components/DemoBlock.vue





DemoBlockvue_type_script_lang_js.render = DemoBlockvue_type_template_id_14740f1e_scoped_true_render
DemoBlockvue_type_script_lang_js.__scopeId = "data-v-14740f1e"

/* harmony default export */ var DemoBlock = (DemoBlockvue_type_script_lang_js);
// CONCATENATED MODULE: ./website/routes.js
var files = __webpack_require__(271);

var comRoutes = {
  path: '/component',
  name: 'component',
  component: function component() {
    return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 490));
  },
  redirect: '/component/quick-start',
  children: []
};
var routes = [{
  path: '/home',
  name: 'home',
  component: function component() {
    return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 491));
  }
}, {
  path: '/change-log',
  name: 'changeLog',
  component: function component() {
    return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 492));
  }
}, comRoutes, {
  path: '/',
  redirect: '/home'
}];
files.keys().forEach(function (key) {
  var name = key.replace(/.\/(.*).md$/, '$1');
  comRoutes.children.push({
    path: name,
    name: name,
    meta: {
      baseUrl: '/component'
    },
    component: files(key)["default"]
  });
});
/* harmony default export */ var website_routes = (routes);
// CONCATENATED MODULE: ./website/main.js










var router = Object(vue_router_esm_bundler["a" /* createRouter */])({
  history: Object(vue_router_esm_bundler["b" /* createWebHashHistory */])(),
  routes: website_routes,
  scrollBehavior: function scrollBehavior() {
    return {
      top: 0
    };
  }
});
var main_app = Object(vue_esm_browser["e" /* createApp */])(App);
main_app.component('DemoBlock', DemoBlock);
main_app.use(router).use(tiv).mount('#app');

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/carousel.md?vue&type=template&id=6e841f2a

var carouselvue_type_template_id_6e841f2a_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var carouselvue_type_template_id_6e841f2a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "lun-bo"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#lun-bo"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 轮播")], -1);

var carouselvue_type_template_id_6e841f2a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "平滑无限轮播，支持鼠标移入暂停，需要显示的内容通过 slot 传入。", -1);

var carouselvue_type_template_id_6e841f2a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-chu-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("默认向左轮播，通过 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "hover-pause"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 属性开启鼠标移入暂停。")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-carousel hover-pause class=\"margin\">\n        <ul class=\"list\">\n            <li v-for=\"(item, index) in data\" :key=\"index\" class=\"item center color-blue bg-blue\">{{ index + 1 }}      </li>\n        </ul>\n    </t-carousel>\n    <t-carousel direction=\"right\">\n        <ul class=\"list\">\n            <li v-for=\"(item, index) in data\" :key=\"index\" class=\"item center color-blue bg-blue\">{{ index + 1 }}      </li>\n        </ul>\n    </t-carousel>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const data = ref(Array.from({ length: 15 }));\n        return { data };\n    },\n};\n</script>\n\n<style lang=\"less\">\n.margin {\n    margin-bottom: 20px;\n}\n.list {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n}\n.item {\n    width: 200px;\n    height: 80px;\n    padding: 0;\n    margin: 0;\n    margin-right: 20px;\n}\n</style>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "shu-zhi-lun-bo"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#shu-zhi-lun-bo"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 竖直轮播")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "上下轮播需要限制组件的高度，防止被撑开。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-carousel direction=\"down\" class=\"com margin\">\n            <ul class=\"list\">\n                <li v-for=\"(item, index) in data\" :key=\"index\" class=\"item center bg-blue color-blue\">{{ index + 1 }}</li>\n            </ul>\n        </t-carousel>\n        <t-carousel direction=\"up\" class=\"com\">\n            <ul class=\"list\">\n                <li v-for=\"(item, index) in data\" :key=\"index\" class=\"item center bg-blue color-blue\">{{ index + 1 }}</li>\n            </ul>\n        </t-carousel>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const data = ref(Array.from({ length: 15 }));\n        return { data };\n    },\n};\n</script>\n\n<style lang=\"less\">\n.wrap {\n    display: flex;\n}\n.com {\n    width: calc(50% - 10px);\n    height: 300px;\n}\n.margin {\n    margin-right: 20px;\n}\n.list {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n}\n.item {\n    height: 80px;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 20px;\n}\n</style>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "wen-zi-lun-bo"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#wen-zi-lun-bo"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 文字轮播")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "不限制 slot 的内容，可以是普通文本。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("宽度超出才会触发轮播，此例中 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "white-space: nowrap;"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 样式确保文字不换行。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-carousel :step=\"40\" :delay=\"1000\" class=\"com\">\n            <p class=\"text\">Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>\n        </t-carousel>\n    </div>\n</template>\n\n<script>\nexport default {};\n</script>\n\n<style lang=\"less\">\n.wrap {\n    background: #fffbe8;\n}\n.com {\n    margin: 0 20px;\n}\n.text {\n    padding: 14px 30px 14px 0;\n    margin: 0;\n    color: #ed6a0c;\n    white-space: nowrap;\n}\n</style>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>轮播方向</td><td>string</td><td>left/right/up/down</td><td>left</td></tr><tr><td>step</td><td>1秒内移动的距离，用来表示轮播动画速度，单位 px</td><td>number</td><td>-</td><td>60</td></tr><tr><td>delay</td><td>渲染后延迟轮播的时间，单位 ms</td><td>number</td><td>-</td><td>0</td></tr><tr><td>hover-pause</td><td>是否开启鼠标移入暂停轮播</td><td>boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\">#</a> 方法</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>pause</td><td>暂停轮播</td><td>-</td><td>-</td></tr><tr><td>run</td><td>继续轮播</td><td>-</td><td>-</td></tr></tbody></table>", 4);

function carouselvue_type_template_id_6e841f2a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  var _component_ComponentDemo2 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo2");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", carouselvue_type_template_id_6e841f2a_hoisted_1, [carouselvue_type_template_id_6e841f2a_hoisted_2, carouselvue_type_template_id_6e841f2a_hoisted_3, carouselvue_type_template_id_6e841f2a_hoisted_4, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14], 512);
}
// CONCATENATED MODULE: ./website/docs/carousel.md?vue&type=template&id=6e841f2a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/carousel.md?vue&type=script&lang=ts



/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        "class": "demo-carousel-0"
      };
      var _hoisted_2 = {
        "class": "list"
      };
      var _hoisted_3 = {
        "class": "list"
      };

      function render(_ctx, _cache) {
        var _component_t_carousel = _resolveComponent("t-carousel");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_carousel, {
          "hover-pause": "",
          "class": "margin"
        }, {
          "default": _withCtx(function () {
            return [_createVNode("ul", _hoisted_2, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.data, function (item, index) {
              return _openBlock(), _createBlock("li", {
                key: index,
                "class": "item center color-blue bg-blue"
              }, _toDisplayString(index + 1), 1);
            }), 128))])];
          }),
          _: 1
        }), _createVNode(_component_t_carousel, {
          direction: "right"
        }, {
          "default": _withCtx(function () {
            return [_createVNode("ul", _hoisted_3, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.data, function (item, index) {
              return _openBlock(), _createBlock("li", {
                key: index,
                "class": "item center color-blue bg-blue"
              }, _toDisplayString(index + 1), 1);
            }), 128))])];
          }),
          _: 1
        })]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var data = ref(Array.from({
            length: 15
          }));
          return {
            data: data
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        "class": "demo-carousel-1"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };
      var _hoisted_3 = {
        "class": "list"
      };
      var _hoisted_4 = {
        "class": "list"
      };

      function render(_ctx, _cache) {
        var _component_t_carousel = _resolveComponent("t-carousel");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_carousel, {
          direction: "down",
          "class": "com margin"
        }, {
          "default": _withCtx(function () {
            return [_createVNode("ul", _hoisted_3, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.data, function (item, index) {
              return _openBlock(), _createBlock("li", {
                key: index,
                "class": "item center bg-blue color-blue"
              }, _toDisplayString(index + 1), 1);
            }), 128))])];
          }),
          _: 1
        }), _createVNode(_component_t_carousel, {
          direction: "up",
          "class": "com"
        }, {
          "default": _withCtx(function () {
            return [_createVNode("ul", _hoisted_4, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.data, function (item, index) {
              return _openBlock(), _createBlock("li", {
                key: index,
                "class": "item center bg-blue color-blue"
              }, _toDisplayString(index + 1), 1);
            }), 128))])];
          }),
          _: 1
        })])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var data = ref(Array.from({
            length: 15
          }));
          return {
            data: data
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo2: function () {
      var _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-carousel-2"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", {
        "class": "text"
      }, "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。", -1);

      function render(_ctx, _cache) {
        var _component_t_carousel = _resolveComponent("t-carousel");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_carousel, {
          step: 40,
          delay: 1000,
          "class": "com"
        }, {
          "default": _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        })])]);
      }

      var obj = {};
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/carousel.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/carousel.md?vue&type=style&index=0&id=6e841f2a&lang=css
var carouselvue_type_style_index_0_id_6e841f2a_lang_css = __webpack_require__(158);
var carouselvue_type_style_index_0_id_6e841f2a_lang_css_default = /*#__PURE__*/__webpack_require__.n(carouselvue_type_style_index_0_id_6e841f2a_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/carousel.md?vue&type=style&index=0&id=6e841f2a&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(carouselvue_type_style_index_0_id_6e841f2a_lang_css_default.a, options);



/* harmony default export */ var docs_carouselvue_type_style_index_0_id_6e841f2a_lang_css = (carouselvue_type_style_index_0_id_6e841f2a_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/carousel.md?vue&type=style&index=0&id=6e841f2a&lang=css

// CONCATENATED MODULE: ./website/docs/carousel.md





carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_6e841f2a_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/click-outside.md?vue&type=template&id=0ab879b2

var click_outsidevue_type_template_id_0ab879b2_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var click_outsidevue_type_template_id_0ab879b2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "wai-bu-dian-ji"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#wai-bu-dian-ji"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 外部点击")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "点击目标元素以外的区域，调用指定的函数。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap center\">\n        <div v-click-outside=\"clickOutside\" class=\"item bg-blue\" @click=\"clickInside\">{{ text }}</div>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\n\nexport default {\n    setup() {\n        const text = ref('inside');\n        const clickInside = () => {\n            text.value = 'inside';\n        }\n        const clickOutside = () => {\n            text.value = 'outside';\n        };\n        return { text, clickInside, clickOutside };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    height: 200px\n}\n.item {\n    width: 180px;\n    height: 140px;\n    line-height: 140px;\n    text-align: center;\n    border-radius: 3px;\n    cursor: pointer;\n}\n</style>\n")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "can-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#can-shu"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 参数")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("th", null, "描述")])]), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("td", null, "(e: Event) => void"), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("td", null, "回调函数，参数是事件对象")])])], -1);

function click_outsidevue_type_template_id_0ab879b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", click_outsidevue_type_template_id_0ab879b2_hoisted_1, [click_outsidevue_type_template_id_0ab879b2_hoisted_2, _hoisted_3, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_4];
    }),
    _: 1
  }), _hoisted_5, _hoisted_6], 512);
}
// CONCATENATED MODULE: ./website/docs/click-outside.md?vue&type=template&id=0ab879b2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/click-outside.md?vue&type=script&lang=ts



/* harmony default export */ var click_outsidevue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _resolveDirective = vue_esm_browser["E" /* resolveDirective */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _withDirectives = vue_esm_browser["O" /* withDirectives */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-click-outside-0"
      };
      var _hoisted_2 = {
        "class": "wrap center"
      };

      function render(_ctx, _cache) {
        var _directive_click_outside = _resolveDirective("click-outside");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_withDirectives(_createVNode("div", {
          "class": "item bg-blue",
          onClick: _cache[1] || (_cache[1] = function () {
            return _ctx.clickInside && _ctx.clickInside.apply(_ctx, arguments);
          })
        }, _toDisplayString(_ctx.text), 513), [[_directive_click_outside, _ctx.clickOutside]])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var text = ref('inside');

          var clickInside = function clickInside() {
            text.value = 'inside';
          };

          var clickOutside = function clickOutside() {
            text.value = 'outside';
          };

          return {
            text: text,
            clickInside: clickInside,
            clickOutside: clickOutside
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/click-outside.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/click-outside.md?vue&type=style&index=0&id=0ab879b2&lang=css
var click_outsidevue_type_style_index_0_id_0ab879b2_lang_css = __webpack_require__(159);
var click_outsidevue_type_style_index_0_id_0ab879b2_lang_css_default = /*#__PURE__*/__webpack_require__.n(click_outsidevue_type_style_index_0_id_0ab879b2_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/click-outside.md?vue&type=style&index=0&id=0ab879b2&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(click_outsidevue_type_style_index_0_id_0ab879b2_lang_css_default.a, options);



/* harmony default export */ var docs_click_outsidevue_type_style_index_0_id_0ab879b2_lang_css = (click_outsidevue_type_style_index_0_id_0ab879b2_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/click-outside.md?vue&type=style&index=0&id=0ab879b2&lang=css

// CONCATENATED MODULE: ./website/docs/click-outside.md





click_outsidevue_type_script_lang_ts.render = click_outsidevue_type_template_id_0ab879b2_render

/* harmony default export */ var click_outside = __webpack_exports__["default"] = (click_outsidevue_type_script_lang_ts);

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/count-card.md?vue&type=template&id=79d8e317

var count_cardvue_type_template_id_79d8e317_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "shu-zi-qia-pian"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#shu-zi-qia-pian"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 数字卡片")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "用于展示动态变化的数字。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-chu-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "默认使用滑动切换效果（type=\"slide\"）。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "data 值可以是字符串，数字部分有切换效果。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-count-card :data=\"time\"></t-count-card>\n</template>\n\n<script>\nimport { ref, onUnmounted } from 'vue';\n\nexport default {\n    setup() {\n        const time = ref('');\n        const addZero = n => n < 10 ? '0' + n : n;\n        const setTime = () => {\n            const now = new Date();\n            const h = now.getHours();\n            const m = now.getMinutes();\n            const s = now.getSeconds();\n            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);\n            // clearInterval(timer);\n        };\n        const timer = setInterval(setTime, 1000);\n        onUnmounted(() => clearInterval(timer));\n\n        return { time };\n    },\n};\n</script>\n\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-count-card :data=\"num\" class=\"demo-1\"></t-count-card>\n</template>\n\n<script>\nimport { ref, onUnmounted } from 'vue';\n\nexport default {\n    setup() {\n        const num = ref('');\n        const timer = setInterval(() => {\n            num.value = (Math.random() + '').slice(2, 8);\n        }, 1500);\n        onUnmounted(() => clearInterval(timer));\n\n        return { num };\n    },\n};\n</script>\n<style lang=\"less\">\n    .demo-1 {\n        // scoped style ::v-deep(.t-slide-item)\n        .t-slide-item {\n            margin: 0 4px;\n            padding: 0 2px;\n            font-size: 24px;\n            color: @theme-color;\n            background-color: @theme-bg;\n            border-radius: 3px;\n        }\n    }\n</style>\n\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "fan-zhuan-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#fan-zhuan-xiao-guo"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 翻转效果")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-count-card :data=\"time\" type=\"flip\" class=\"demo-2\"></t-count-card>\n</template>\n\n<script>\nimport { ref, onUnmounted } from 'vue';\n\nexport default {\n    setup() {\n        const time = ref('');\n        const addZero = n => n < 10 ? '0' + n : n;\n        const setTime = () => {\n            const now = new Date();\n            const h = now.getHours();\n            const m = now.getMinutes();\n            const s = now.getSeconds();\n            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);\n        };\n        setTime();\n        const timer = setInterval(setTime, 1000);\n        onUnmounted(() => clearInterval(timer));\n\n        return { time };\n    },\n};\n</script>\n<style lang=\"less\">\n    .demo-2 {\n        font-size: 26px;\n    }\n</style>\n\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-count-card :data=\"time\" type=\"flip\" class=\"demo-3\"></t-count-card>\n</template>\n\n<script>\nimport { ref, onUnmounted } from 'vue';\n\nexport default {\n    setup() {\n        const time = ref('');\n        const addZero = n => n < 10 ? '0' + n : n;\n        const setTime = () => {\n            const now = new Date();\n            const h = now.getHours();\n            const m = now.getMinutes();\n            const s = now.getSeconds();\n            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);\n        };\n        setTime();\n        const timer = setInterval(setTime, 1000);\n        onUnmounted(() => clearInterval(timer));\n\n        return { time };\n    },\n};\n</script>\n<style lang=\"less\">\n    .demo-3 {\n        padding: 10px;\n        background: #030d2a;\n        font-size: 32px;\n        .t-flip-item {\n            margin: 0 4px;\n        }\n        .t-text {\n            color: #fff;\n            background: #030d2a url('*/images/count-card-bg.png') no-repeat center center / 100% 100%;\n        }\n    }\n</style>\n\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "shi-yong-cha-cao"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#shi-yong-cha-cao"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 使用插槽")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "可以自定义显示内容。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-count-card :data=\"num\" class=\"demo-4\" v-slot=\"{ val }\">\n        <span :class=\"val < 5 ? 'blue' : 'green'\" class=\"num\">{{ val }}</span>\n    </t-count-card>\n</template>\n\n<script>\nimport { ref, onUnmounted } from 'vue';\n\nexport default {\n    setup() {\n        const num = ref('3928196');\n        const timer = setInterval(() => {\n            num.value = (Math.random() + '').slice(2, 8);\n        }, 1000);\n        onUnmounted(() => clearInterval(timer));\n\n        return { num };\n    },\n};\n</script>\n<style lang=\"less\">\n    .demo-4 {\n        /* font-size: 16px; */\n        .blue {\n            color: rgb(84, 158, 230);\n        }\n        .green {\n            color: rgb(117, 230, 117);\n        }\n        .num {\n            display: inline-block;\n            font-size: 30px;\n            width: 0.8em;\n        }\n    }\n</style>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>需要显示的数据</td><td>string / number</td><td>-</td><td>-</td></tr><tr><td>type</td><td>切换类型</td><td>string</td><td>slide / filp</td><td>slide</td></tr></tbody></table><h3 id=\"slot-shu-xing\"><a class=\"header-anchor\" href=\"#slot-shu-xing\">#</a> Slot 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>val</td><td>单个字符的值</td><td>string</td></tr><tr><td>index</td><td>单个字符的索引</td><td>number</td></tr></tbody></table>", 4);

function count_cardvue_type_template_id_79d8e317_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  var _component_ComponentDemo2 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo2");

  var _component_ComponentDemo3 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo3");

  var _component_ComponentDemo4 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo4");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", count_cardvue_type_template_id_79d8e317_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo4)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15], 512);
}
// CONCATENATED MODULE: ./website/docs/count-card.md?vue&type=template&id=79d8e317

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/count-card.md?vue&type=script&lang=ts



/* harmony default export */ var count_cardvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-count-card-0"
      };

      function render(_ctx, _cache) {
        var _component_t_count_card = _resolveComponent("t-count-card");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_count_card, {
          data: _ctx.time
        }, null, 8, ["data"])]);
      }

      var ref = vue_esm_browser["A" /* ref */],
          onUnmounted = vue_esm_browser["u" /* onUnmounted */];
      var obj = {
        setup: function setup() {
          var time = ref('');

          var addZero = function addZero(n) {
            return n < 10 ? '0' + n : n;
          };

          var setTime = function setTime() {
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s); // clearInterval(timer);
          };

          var timer = setInterval(setTime, 1000);
          onUnmounted(function () {
            return clearInterval(timer);
          });
          return {
            time: time
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-count-card-1"
      };

      function render(_ctx, _cache) {
        var _component_t_count_card = _resolveComponent("t-count-card");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_count_card, {
          data: _ctx.num,
          "class": "demo-1"
        }, null, 8, ["data"])]);
      }

      var ref = vue_esm_browser["A" /* ref */],
          onUnmounted = vue_esm_browser["u" /* onUnmounted */];
      var obj = {
        setup: function setup() {
          var num = ref('');
          var timer = setInterval(function () {
            num.value = (Math.random() + '').slice(2, 8);
          }, 1500);
          onUnmounted(function () {
            return clearInterval(timer);
          });
          return {
            num: num
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo2: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-count-card-2"
      };

      function render(_ctx, _cache) {
        var _component_t_count_card = _resolveComponent("t-count-card");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_count_card, {
          data: _ctx.time,
          type: "flip",
          "class": "demo-2"
        }, null, 8, ["data"])]);
      }

      var ref = vue_esm_browser["A" /* ref */],
          onUnmounted = vue_esm_browser["u" /* onUnmounted */];
      var obj = {
        setup: function setup() {
          var time = ref('');

          var addZero = function addZero(n) {
            return n < 10 ? '0' + n : n;
          };

          var setTime = function setTime() {
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);
          };

          setTime();
          var timer = setInterval(setTime, 1000);
          onUnmounted(function () {
            return clearInterval(timer);
          });
          return {
            time: time
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo3: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-count-card-3"
      };

      function render(_ctx, _cache) {
        var _component_t_count_card = _resolveComponent("t-count-card");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_count_card, {
          data: _ctx.time,
          type: "flip",
          "class": "demo-3"
        }, null, 8, ["data"])]);
      }

      var ref = vue_esm_browser["A" /* ref */],
          onUnmounted = vue_esm_browser["u" /* onUnmounted */];
      var obj = {
        setup: function setup() {
          var time = ref('');

          var addZero = function addZero(n) {
            return n < 10 ? '0' + n : n;
          };

          var setTime = function setTime() {
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();
            time.value = addZero(h) + ':' + addZero(m) + ':' + addZero(s);
          };

          setTime();
          var timer = setInterval(setTime, 1000);
          onUnmounted(function () {
            return clearInterval(timer);
          });
          return {
            time: time
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo4: function () {
      var _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-count-card-4"
      };

      function render(_ctx, _cache) {
        var _component_t_count_card = _resolveComponent("t-count-card");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_count_card, {
          data: _ctx.num,
          "class": "demo-4"
        }, {
          "default": _withCtx(function (_ref) {
            var val = _ref.val;
            return [_createVNode("span", {
              "class": [val < 5 ? 'blue' : 'green', "num"]
            }, _toDisplayString(val), 3)];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var ref = vue_esm_browser["A" /* ref */],
          onUnmounted = vue_esm_browser["u" /* onUnmounted */];
      var obj = {
        setup: function setup() {
          var num = ref('3928196');
          var timer = setInterval(function () {
            num.value = (Math.random() + '').slice(2, 8);
          }, 1000);
          onUnmounted(function () {
            return clearInterval(timer);
          });
          return {
            num: num
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/count-card.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/count-card.md?vue&type=style&index=0&id=79d8e317&lang=css
var count_cardvue_type_style_index_0_id_79d8e317_lang_css = __webpack_require__(160);
var count_cardvue_type_style_index_0_id_79d8e317_lang_css_default = /*#__PURE__*/__webpack_require__.n(count_cardvue_type_style_index_0_id_79d8e317_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/count-card.md?vue&type=style&index=0&id=79d8e317&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(count_cardvue_type_style_index_0_id_79d8e317_lang_css_default.a, options);



/* harmony default export */ var docs_count_cardvue_type_style_index_0_id_79d8e317_lang_css = (count_cardvue_type_style_index_0_id_79d8e317_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/count-card.md?vue&type=style&index=0&id=79d8e317&lang=css

// CONCATENATED MODULE: ./website/docs/count-card.md





count_cardvue_type_script_lang_ts.render = count_cardvue_type_template_id_79d8e317_render

/* harmony default export */ var count_card = __webpack_exports__["default"] = (count_cardvue_type_script_lang_ts);

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/img-hotspot.md?vue&type=template&id=4191671a

var img_hotspotvue_type_template_id_4191671a_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var img_hotspotvue_type_template_id_4191671a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h2 id=\"tu-pian-re-qu\"><a class=\"header-anchor\" href=\"#tu-pian-re-qu\">#</a> 图片热区</h2><p>用于在图片上定义热点区域。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">#</a> 基础用法</h3><p><code>hotspots</code> 属性指定热区列表，<code>path</code> 字段表示热区的坐标，将会直接使用在 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/area\">&lt;area&gt;标签</a> 的 <code>coords</code> 属性上；<code>cover</code> 字段表示热区是否被浅色区域覆盖。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "cover"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 字段默认为 false。")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"hotspot-demo\">\n        <t-img-hotspot\n            :image=\"img\"\n            :hotspots=\"list\"\n            class=\"com\"\n            @area-click=\"fn\"\n        ></t-img-hotspot>\n    </div>\n</template>\n\n<script>\nimport img from '*/images/img-hotspot.jpeg';\nexport default {\n    setup() {\n        const list = [\n            {\n                title: '政府工作报告（摘要）',\n                path: '673.824,1211.7776,928.608,1211.8,928.6,1335.356,673.824,1335.356',\n                cover: true,\n            },\n            {\n                title: '政协委员分组讨论政府工作报告',\n                path: '660.576,1038.1404,939,1038.1404,939,1163.9,660.576,1163.9',\n                cover: true,\n            },\n            {\n                title: '自治区十三届人大四次会议各代表团审议政府工作报告',\n                path: '660.576,862.8664,939,862.8664,939,1011.1,660.576,1011.1',\n                cover: true,\n            },\n            {\n                title: '“十三五”成绩亮眼 “十四五”底气更足',\n                path: '660.576,244.838,942.9,244.838,942.9,836.4,660.576,836.4',\n                cover: true,\n            },\n            {\n                title: '自治区十三届人大四次会议开幕',\n                path: '19.872,821,628.032,821,628.032,1344.7,19.872,1344.7',\n                cover: true,\n            },\n            {\n                title: '十三届全国人大四次会议 全国政协十三届四次会议欢迎中外记者采访',\n                path: '487.5,27,939,27,939,207.8736,487.4,207.8736',\n                cover: true,\n            },\n            {\n                title: '习近平同党外人士共迎新春',\n                path: '19.872,247.0204,628.032,247.0204,628.032,791.12,19.872,791.12',\n                cover: true,\n            },\n        ];\n\n        return {\n            img,\n            list,\n            fn(data) {\n                console.log(data);\n            },\n        };\n    },\n};\n</script>\n\n<style lang=\"less\">\n.hotspot-demo {\n    text-align: center;\n    .com {\n        width: 400px;\n    }\n}\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>image</td><td>图片地址</td><td>string</td><td>-</td><td>-</td></tr><tr><td>hotspots</td><td>热区列表</td><td>array[{ path, cover }]</td><td>-</td><td>-</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>area-click</td><td>点击热区时触发</td><td>被点击的热区数据</td></tr><tr><td>area-hover</td><td>移入热区时触发</td><td>移入的热区数据</td></tr></tbody></table>", 4);

function img_hotspotvue_type_template_id_4191671a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", img_hotspotvue_type_template_id_4191671a_hoisted_1, [img_hotspotvue_type_template_id_4191671a_hoisted_2, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8], 512);
}
// CONCATENATED MODULE: ./website/docs/img-hotspot.md?vue&type=template&id=4191671a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/img-hotspot.md?vue&type=script&lang=ts



/* harmony default export */ var img_hotspotvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-img-hotspot-0"
      };
      var _hoisted_2 = {
        "class": "hotspot-demo"
      };

      function render(_ctx, _cache) {
        var _component_t_img_hotspot = _resolveComponent("t-img-hotspot");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_img_hotspot, {
          image: _ctx.img,
          hotspots: _ctx.list,
          "class": "com",
          onAreaClick: _ctx.fn
        }, null, 8, ["image", "hotspots", "onAreaClick"])])]);
      }

      var img = __webpack_require__(464);

      var obj = {
        setup: function setup() {
          var list = [{
            title: '政府工作报告（摘要）',
            path: '673.824,1211.7776,928.608,1211.8,928.6,1335.356,673.824,1335.356',
            cover: true
          }, {
            title: '政协委员分组讨论政府工作报告',
            path: '660.576,1038.1404,939,1038.1404,939,1163.9,660.576,1163.9',
            cover: true
          }, {
            title: '自治区十三届人大四次会议各代表团审议政府工作报告',
            path: '660.576,862.8664,939,862.8664,939,1011.1,660.576,1011.1',
            cover: true
          }, {
            title: '“十三五”成绩亮眼 “十四五”底气更足',
            path: '660.576,244.838,942.9,244.838,942.9,836.4,660.576,836.4',
            cover: true
          }, {
            title: '自治区十三届人大四次会议开幕',
            path: '19.872,821,628.032,821,628.032,1344.7,19.872,1344.7',
            cover: true
          }, {
            title: '十三届全国人大四次会议 全国政协十三届四次会议欢迎中外记者采访',
            path: '487.5,27,939,27,939,207.8736,487.4,207.8736',
            cover: true
          }, {
            title: '习近平同党外人士共迎新春',
            path: '19.872,247.0204,628.032,247.0204,628.032,791.12,19.872,791.12',
            cover: true
          }];
          return {
            img: img,
            list: list,
            fn: function fn(data) {
              console.log(data);
            }
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/img-hotspot.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/img-hotspot.md?vue&type=style&index=0&id=4191671a&lang=css
var img_hotspotvue_type_style_index_0_id_4191671a_lang_css = __webpack_require__(161);
var img_hotspotvue_type_style_index_0_id_4191671a_lang_css_default = /*#__PURE__*/__webpack_require__.n(img_hotspotvue_type_style_index_0_id_4191671a_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/img-hotspot.md?vue&type=style&index=0&id=4191671a&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(img_hotspotvue_type_style_index_0_id_4191671a_lang_css_default.a, options);



/* harmony default export */ var docs_img_hotspotvue_type_style_index_0_id_4191671a_lang_css = (img_hotspotvue_type_style_index_0_id_4191671a_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/img-hotspot.md?vue&type=style&index=0&id=4191671a&lang=css

// CONCATENATED MODULE: ./website/docs/img-hotspot.md





img_hotspotvue_type_script_lang_ts.render = img_hotspotvue_type_template_id_4191671a_render

/* harmony default export */ var img_hotspot = __webpack_exports__["default"] = (img_hotspotvue_type_script_lang_ts);

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/index-text.md?vue&type=template&id=4f8048d7

var index_textvue_type_template_id_4f8048d7_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var index_textvue_type_template_id_4f8048d7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "suo-yin-hao"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#suo-yin-hao"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 索引号")], -1);

var index_textvue_type_template_id_4f8048d7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "几种不同样式的列表索引序号。", -1);

var index_textvue_type_template_id_4f8048d7_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-chu-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基础用法")], -1);

var index_textvue_type_template_id_4f8048d7_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-index-text v-for=\"i in num\" :key=\"i\" :index=\"i\" type=\"1\" highlight class=\"text\"></t-index-text>\n</template>\n\n<script>\nexport default {\n    setup() {\n        const num = Array.from({ length: 10 }).map((_, index) => index + 1);\n        return { num };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.text {\n    margin-right: 6px;\n}\n</style>\n\n")], -1);

var index_textvue_type_template_id_4f8048d7_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "highlight = true"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 表示前三项高亮显示，"), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "checked = true"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 表示此项处于选中状态。")], -1);

var index_textvue_type_template_id_4f8048d7_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap bg-data-v-item\">\n        <t-index-text v-for=\"i in num\" :key=\"i\" :index=\"i\" type=\"2\"></t-index-text>\n        <br><br>\n        <t-index-text v-for=\"i in num\" :key=\"i\" :index=\"i\" type=\"2\" highlight></t-index-text>\n        <br><br>\n        <t-index-text v-for=\"i in num\" :key=\"i\" :index=\"i\" type=\"4\" highlight></t-index-text>\n        <br><br>\n        <t-index-text v-for=\"i in num\" :key=\"i\" :index=\"i\" :checked=\"i === 1 || i === 5\" type=\"3\" highlight></t-index-text>\n    </div>\n</template>\n\n<script>\n\nexport default {\n    setup() {\n        const num = Array.from({ length: 10 }).map((_, index) => index + 1);\n        return { num };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    padding: 20px;\n}\n.wrap span {\n    margin-right: 6px;\n}\n</style>\n\n")], -1);

var index_textvue_type_template_id_4f8048d7_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>索引号，必传</td><td>number</td><td>-</td><td>-</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>1 / 2 / 3 / 4</td><td>1</td></tr><tr><td>highlight</td><td>是否高亮前三项</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>checked</td><td>是否处于选中状态，(type = 3 支持)</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table>", 2);

function index_textvue_type_template_id_4f8048d7_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", index_textvue_type_template_id_4f8048d7_hoisted_1, [index_textvue_type_template_id_4f8048d7_hoisted_2, index_textvue_type_template_id_4f8048d7_hoisted_3, index_textvue_type_template_id_4f8048d7_hoisted_4, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [index_textvue_type_template_id_4f8048d7_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [index_textvue_type_template_id_4f8048d7_hoisted_7];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [index_textvue_type_template_id_4f8048d7_hoisted_6];
    }),
    _: 1
  }), index_textvue_type_template_id_4f8048d7_hoisted_8], 512);
}
// CONCATENATED MODULE: ./website/docs/index-text.md?vue&type=template&id=4f8048d7

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/index-text.md?vue&type=script&lang=ts



/* harmony default export */ var index_textvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */];
      var _hoisted_1 = {
        "class": "demo-index-text-0"
      };

      function render(_ctx, _cache) {
        var _component_t_index_text = _resolveComponent("t-index-text");

        return _openBlock(), _createBlock("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.num, function (i) {
          return _openBlock(), _createBlock(_component_t_index_text, {
            key: i,
            index: i,
            type: "1",
            highlight: "",
            "class": "text"
          }, null, 8, ["index"]);
        }), 128))]);
      }

      var obj = {
        setup: function setup() {
          var num = Array.from({
            length: 10
          }).map(function (_, index) {
            return index + 1;
          });
          return {
            num: num
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */];
      var _hoisted_1 = {
        "class": "demo-index-text-1"
      };
      var _hoisted_2 = {
        "class": "wrap bg-data-v-item"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("br", null, null, -1);

      function render(_ctx, _cache) {
        var _component_t_index_text = _resolveComponent("t-index-text");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.num, function (i) {
          return _openBlock(), _createBlock(_component_t_index_text, {
            key: i,
            index: i,
            type: "2"
          }, null, 8, ["index"]);
        }), 128)), _hoisted_3, _hoisted_4, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.num, function (i) {
          return _openBlock(), _createBlock(_component_t_index_text, {
            key: i,
            index: i,
            type: "2",
            highlight: ""
          }, null, 8, ["index"]);
        }), 128)), _hoisted_5, _hoisted_6, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.num, function (i) {
          return _openBlock(), _createBlock(_component_t_index_text, {
            key: i,
            index: i,
            type: "4",
            highlight: ""
          }, null, 8, ["index"]);
        }), 128)), _hoisted_7, _hoisted_8, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.num, function (i) {
          return _openBlock(), _createBlock(_component_t_index_text, {
            key: i,
            index: i,
            checked: i === 1 || i === 5,
            type: "3",
            highlight: ""
          }, null, 8, ["index", "checked"]);
        }), 128))])]);
      }

      var obj = {
        setup: function setup() {
          var num = Array.from({
            length: 10
          }).map(function (_, index) {
            return index + 1;
          });
          return {
            num: num
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/index-text.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/index-text.md?vue&type=style&index=0&id=4f8048d7&lang=css
var index_textvue_type_style_index_0_id_4f8048d7_lang_css = __webpack_require__(162);
var index_textvue_type_style_index_0_id_4f8048d7_lang_css_default = /*#__PURE__*/__webpack_require__.n(index_textvue_type_style_index_0_id_4f8048d7_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/index-text.md?vue&type=style&index=0&id=4f8048d7&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(index_textvue_type_style_index_0_id_4f8048d7_lang_css_default.a, options);



/* harmony default export */ var docs_index_textvue_type_style_index_0_id_4f8048d7_lang_css = (index_textvue_type_style_index_0_id_4f8048d7_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/index-text.md?vue&type=style&index=0&id=4f8048d7&lang=css

// CONCATENATED MODULE: ./website/docs/index-text.md





index_textvue_type_script_lang_ts.render = index_textvue_type_template_id_4f8048d7_render

/* harmony default export */ var index_text = __webpack_exports__["default"] = (index_textvue_type_script_lang_ts);

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/no-data.md?vue&type=template&id=2f3bf093

var no_datavue_type_template_id_2f3bf093_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var no_datavue_type_template_id_2f3bf093_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "wu-shu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#wu-shu-ju"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 无数据")], -1);

var no_datavue_type_template_id_2f3bf093_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "无数据时占位提示组件。", -1);

var no_datavue_type_template_id_2f3bf093_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-chu-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "显示默认的图标和描述文字。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-no-data></t-no-data>\n    </div>\n</template>\n\n<script>\nexport default {};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    height: 200px;\n}\n</style>\n\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "zi-ding-yi-tu-pian-he-miao-shu-wen-zi"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#zi-ding-yi-tu-pian-he-miao-shu-wen-zi"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 自定义图片和描述文字")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("需要自定义图片时，可以给 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "image"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 属性传图片 URL，描述文字通过 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 设置。")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-no-data :image=\"emptyImg\" description=\"数据为空\"></t-no-data>\n    </div>\n</template>\n\n<script>\nimport emptyImg from '*/images/empty-image.png';\nexport default {\n    data() {\n        return {\n            emptyImg,\n        };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    height: 200px;\n}\n</style>\n\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 自定义内容")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 传递任意 html 内容。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-no-data>\n            <p class=\"text\">(X﹏X)</p>\n            <p class=\"text\">暂无数据，请稍后重试</p>\n        </t-no-data>\n    </div>\n</template>\n\n<script>\nexport default {};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    height: 200px;\n}\n.text {\n    margin: 2px 0;\n    text-align: center;\n    font-size: 16px;\n}\n</style>\n\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>image</td><td>占位图 URL</td><td>string</td><td>-</td><td>-</td></tr><tr><td>description</td><td>描述文字</td><td>string</td><td>-</td><td>暂无数据</td></tr></tbody></table>", 2);

function no_datavue_type_template_id_2f3bf093_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  var _component_ComponentDemo2 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo2");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", no_datavue_type_template_id_2f3bf093_hoisted_1, [no_datavue_type_template_id_2f3bf093_hoisted_2, no_datavue_type_template_id_2f3bf093_hoisted_3, no_datavue_type_template_id_2f3bf093_hoisted_4, _hoisted_5, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13], 512);
}
// CONCATENATED MODULE: ./website/docs/no-data.md?vue&type=template&id=2f3bf093

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/no-data.md?vue&type=script&lang=ts



/* harmony default export */ var no_datavue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-no-data-0"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };

      function render(_ctx, _cache) {
        var _component_t_no_data = _resolveComponent("t-no-data");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_no_data)])]);
      }

      var obj = {};
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-no-data-1"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };

      function render(_ctx, _cache) {
        var _component_t_no_data = _resolveComponent("t-no-data");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_no_data, {
          image: _ctx.emptyImg,
          description: "数据为空"
        }, null, 8, ["image"])])]);
      }

      var emptyImg = __webpack_require__(465);

      var obj = {
        data: function data() {
          return {
            emptyImg: emptyImg
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo2: function () {
      var _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-no-data-2"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", {
        "class": "text"
      }, "(X﹏X)", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("p", {
        "class": "text"
      }, "暂无数据，请稍后重试", -1);

      function render(_ctx, _cache) {
        var _component_t_no_data = _resolveComponent("t-no-data");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_no_data, null, {
          "default": _withCtx(function () {
            return [_hoisted_3, _hoisted_4];
          }),
          _: 1
        })])]);
      }

      var obj = {};
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/no-data.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/no-data.md?vue&type=style&index=0&id=2f3bf093&lang=css
var no_datavue_type_style_index_0_id_2f3bf093_lang_css = __webpack_require__(163);
var no_datavue_type_style_index_0_id_2f3bf093_lang_css_default = /*#__PURE__*/__webpack_require__.n(no_datavue_type_style_index_0_id_2f3bf093_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/no-data.md?vue&type=style&index=0&id=2f3bf093&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(no_datavue_type_style_index_0_id_2f3bf093_lang_css_default.a, options);



/* harmony default export */ var docs_no_datavue_type_style_index_0_id_2f3bf093_lang_css = (no_datavue_type_style_index_0_id_2f3bf093_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/no-data.md?vue&type=style&index=0&id=2f3bf093&lang=css

// CONCATENATED MODULE: ./website/docs/no-data.md





no_datavue_type_script_lang_ts.render = no_datavue_type_template_id_2f3bf093_render

/* harmony default export */ var no_data = __webpack_exports__["default"] = (no_datavue_type_script_lang_ts);

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/pagination.md?vue&type=template&id=ec307c44

var paginationvue_type_template_id_ec307c44_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var paginationvue_type_template_id_ec307c44_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "fen-ye"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#fen-ye"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 分页")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "大屏分页组件，提供了圆形和多边形两种样式。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-chu-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("默认样式为圆形 ("), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "type=\"circle\""), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(")，不显示页码，需要注意 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "total"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 的值不要设置过大，总页数太多会分不清当前是第几页。")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap bg-data-v\">\n        <t-pagination\n            :page-index=\"pageIndex\"\n            :total=\"50\"\n            :page-size=\"10\"\n            @change=\"changeHandle\"\n        ></t-pagination>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const pageIndex = ref(1);\n        const changeHandle = (i) => {\n            pageIndex.value = i;\n        };\n        return {\n            pageIndex,\n            changeHandle,\n        };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    padding: 30px 0;\n}\n</style>\n\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "type=\"polygon\""), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 使用多边形样式。")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap bg-data-v\">\n        <t-pagination\n            :page-index=\"pageIndex\"\n            :total=\"200\"\n            :page-size=\"10\"\n            type=\"polygon\"\n            @change=\"changeHandle\"\n        ></t-pagination>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const pageIndex = ref(1);\n        const changeHandle = (i) => {\n            pageIndex.value = i;\n        };\n        return {\n            pageIndex,\n            changeHandle,\n        };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    padding: 30px 0;\n}\n</style>\n\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "she-zhi-ye-ma-an-niu-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#she-zhi-ye-ma-an-niu-shu"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 设置页码按钮数")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("默认显示7个页码按钮，可通过 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 设置。")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap bg-data-v\">\n        <t-pagination\n            :page-index=\"pageIndex\"\n            :total=\"200\"\n            :page-size=\"10\"\n            :pager-count=\"5\"\n            type=\"polygon\"\n            @change=\"changeHandle\"\n        ></t-pagination>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const pageIndex = ref(1);\n        const changeHandle = (i) => {\n            pageIndex.value = i;\n        };\n        return {\n            pageIndex,\n            changeHandle,\n        };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    padding: 30px 0;\n}\n</style>\n\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>page-index</td><td>当前页数，支持 <code>v-model:page-index</code> 双向绑定</td><td>number</td><td>-</td><td>1</td></tr><tr><td>page-size</td><td>每页条数</td><td>number</td><td>-</td><td>10</td></tr><tr><td>total</td><td>总条数</td><td>number</td><td>-</td><td>0</td></tr><tr><td>pager-count</td><td>页码按钮数，大于0的奇数</td><td>number</td><td>-</td><td>7</td></tr><tr><td>type</td><td>样式类型</td><td>string</td><td>circle/polygon</td><td>circle</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>pageIndex 改变时触发</td><td>当前页</td></tr></tbody></table>", 4);

function paginationvue_type_template_id_ec307c44_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  var _component_ComponentDemo2 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo2");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", paginationvue_type_template_id_ec307c44_hoisted_1, [paginationvue_type_template_id_ec307c44_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12], 512);
}
// CONCATENATED MODULE: ./website/docs/pagination.md?vue&type=template&id=ec307c44

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/pagination.md?vue&type=script&lang=ts



/* harmony default export */ var paginationvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-pagination-0"
      };
      var _hoisted_2 = {
        "class": "wrap bg-data-v"
      };

      function render(_ctx, _cache) {
        var _component_t_pagination = _resolveComponent("t-pagination");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_pagination, {
          "page-index": _ctx.pageIndex,
          total: 50,
          "page-size": 10,
          onChange: _ctx.changeHandle
        }, null, 8, ["page-index", "onChange"])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var pageIndex = ref(1);

          var changeHandle = function changeHandle(i) {
            pageIndex.value = i;
          };

          return {
            pageIndex: pageIndex,
            changeHandle: changeHandle
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-pagination-1"
      };
      var _hoisted_2 = {
        "class": "wrap bg-data-v"
      };

      function render(_ctx, _cache) {
        var _component_t_pagination = _resolveComponent("t-pagination");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_pagination, {
          "page-index": _ctx.pageIndex,
          total: 200,
          "page-size": 10,
          type: "polygon",
          onChange: _ctx.changeHandle
        }, null, 8, ["page-index", "onChange"])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var pageIndex = ref(1);

          var changeHandle = function changeHandle(i) {
            pageIndex.value = i;
          };

          return {
            pageIndex: pageIndex,
            changeHandle: changeHandle
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo2: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-pagination-2"
      };
      var _hoisted_2 = {
        "class": "wrap bg-data-v"
      };

      function render(_ctx, _cache) {
        var _component_t_pagination = _resolveComponent("t-pagination");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_pagination, {
          "page-index": _ctx.pageIndex,
          total: 200,
          "page-size": 10,
          "pager-count": 5,
          type: "polygon",
          onChange: _ctx.changeHandle
        }, null, 8, ["page-index", "onChange"])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var pageIndex = ref(1);

          var changeHandle = function changeHandle(i) {
            pageIndex.value = i;
          };

          return {
            pageIndex: pageIndex,
            changeHandle: changeHandle
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/pagination.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/pagination.md?vue&type=style&index=0&id=ec307c44&lang=css
var paginationvue_type_style_index_0_id_ec307c44_lang_css = __webpack_require__(164);
var paginationvue_type_style_index_0_id_ec307c44_lang_css_default = /*#__PURE__*/__webpack_require__.n(paginationvue_type_style_index_0_id_ec307c44_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/pagination.md?vue&type=style&index=0&id=ec307c44&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(paginationvue_type_style_index_0_id_ec307c44_lang_css_default.a, options);



/* harmony default export */ var docs_paginationvue_type_style_index_0_id_ec307c44_lang_css = (paginationvue_type_style_index_0_id_ec307c44_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/pagination.md?vue&type=style&index=0&id=ec307c44&lang=css

// CONCATENATED MODULE: ./website/docs/pagination.md





paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_ec307c44_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/scale-view.md?vue&type=template&id=0eb78626

var scale_viewvue_type_template_id_0eb78626_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var scale_viewvue_type_template_id_0eb78626_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h2 id=\"ke-shen-suo-shi-tu-rong-qi\"><a class=\"header-anchor\" href=\"#ke-shen-suo-shi-tu-rong-qi\">#</a> 可伸缩视图容器</h2><p>用于数据可视化页面的容器组件。</p><h3 id=\"suo-fang-gong-neng-bi-jiao\"><a class=\"header-anchor\" href=\"#suo-fang-gong-neng-bi-jiao\">#</a> 缩放功能比较</h3><p>数据可视化页面布局是固定的，为了能在不同尺寸的设备上正常显示，并且窗口大小变化时，始终保持相同的宽高比例，同时填充整个父级容器，需要具备自动缩放能力，实现方式有两种：</p><ol><li>样式使用 <strong>rem</strong>，窗口变化后动态计算基准值，再更新根节点的 <code>font-size</code>，达到缩放效果。</li><li>直接使用 <strong>transform: scale()</strong> 缩放根组件。</li></ol><p>此组件使用了第二种方式，因为使用 rem 会存在以下问题：</p><ol><li>使用第三方 UI 组件无缩放效果，比如 element-ui。</li><li>canvas, echarts 等需要先换算成 px。</li><li>文本的 <code>font-size</code> 有最小值，继续缩小会导致布局错位，不方便调试界面。</li></ol><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">#</a> 基础用法</h3><p>通过 <code>baseSize</code> 设置容器基础宽高，窗口大小变化时将根据这个值对容器做缩放处理。</p>", 9);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "此例中容器的宽高会在 400*220 px 的基础上做缩放处理，点击上方按钮切换父容器（.wrap）大小，预览不同缩放比例的显示效果。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <span>父容器大小：</span>\n    <button\n        v-for=\"item in btns\"\n        :key=\"item.name\"\n        :class=\"{'active': item.height === height}\"\n        class=\"demo-btn btn\"\n        @click=\"handleChange(item.height)\"\n    >\n        {{ item.name }}\n    </button>\n    <div :style=\"{height}\" class=\"bg-data-v wrap\">\n        <t-scale-view base-size=\"400*220\" class=\"com\">\n            <div class=\"content h100\">\n                <t-no-data></t-no-data>\n            </div>\n        </t-scale-view>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\n\nexport default {\n    setup() {\n        const btns = ref([\n            {\n                name: 'small',\n                height: '200px',\n            },\n            {\n                name: 'medium',\n                height: '300px',\n            },\n            {\n                name: 'large',\n                height: '400px',\n            },\n        ]);\n        const height = ref('200px');\n        const handleChange = (v) => {\n            height.value = v;\n        };\n\n        return {\n            btns,\n            height,\n            handleChange,\n        };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    width: 850px;\n    height: 300px;\n    transition: 0.3s;\n}\n.btn {\n    margin-bottom: 20px;\n}\n.com {\n    width: 100%;\n    height: 100%;\n}\n.content {\n    background: url('~*/images/data-v-border.png') no-repeat center center / 90% 90%;\n}\n</style>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"suo-fang-body\"><a class=\"header-anchor\" href=\"#suo-fang-body\">#</a> 缩放 body</h3><p>某些组件可能会把节点添加到 body，因为这些节点不再是 <code>t-scale-wiew</code> 组件的子节点，所以无法缩放，可设置属性 <code>scale-body = &quot;true&quot;</code> 将 body 作为缩放容器解决 。</p><pre><code class=\"language-html\">&lt;template&gt;\n    &lt;t-scale-view scale-body&gt;\n        &lt;div class=&quot;content&quot;&gt;&lt;/div&gt;\n    &lt;/t-scale-view&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nexport default {};\n&lt;/script&gt;\n\n</code></pre><h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>base-size</td><td>容器的基础宽高，一般设置成设计图的宽高，格式为 width*height，单位 px</td><td>string</td><td>-</td><td>1920*1080</td></tr><tr><td>scale-body</td><td>是否将 body 作为缩放容器。</td><td>boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\">#</a> 方法</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>setSize</td><td>手动更新容器样式 (width, height, scale)</td><td>-</td><td>-</td></tr></tbody></table>", 7);

function scale_viewvue_type_template_id_0eb78626_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", scale_viewvue_type_template_id_0eb78626_hoisted_1, [scale_viewvue_type_template_id_0eb78626_hoisted_2, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13], 512);
}
// CONCATENATED MODULE: ./website/docs/scale-view.md?vue&type=template&id=0eb78626

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/scale-view.md?vue&type=script&lang=ts



/* harmony default export */ var scale_viewvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _createVNode = vue_esm_browser["j" /* createVNode */],
          _renderList = vue_esm_browser["B" /* renderList */],
          _Fragment = vue_esm_browser["a" /* Fragment */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */],
          _toDisplayString = vue_esm_browser["H" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */];
      var _hoisted_1 = {
        "class": "demo-scale-view-0"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "父容器大小：", -1);

      var _hoisted_3 = {
        "class": "content h100"
      };

      function render(_ctx, _cache) {
        var _component_t_no_data = _resolveComponent("t-no-data");

        var _component_t_scale_view = _resolveComponent("t-scale-view");

        return _openBlock(), _createBlock("div", _hoisted_1, [_hoisted_2, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.btns, function (item) {
          return _openBlock(), _createBlock("button", {
            key: item.name,
            "class": [{
              'active': item.height === _ctx.height
            }, "demo-btn btn"],
            onClick: function onClick($event) {
              return _ctx.handleChange(item.height);
            }
          }, _toDisplayString(item.name), 11, ["onClick"]);
        }), 128)), _createVNode("div", {
          style: {
            height: _ctx.height
          },
          "class": "bg-data-v wrap"
        }, [_createVNode(_component_t_scale_view, {
          "base-size": "400*220",
          "class": "com"
        }, {
          "default": _withCtx(function () {
            return [_createVNode("div", _hoisted_3, [_createVNode(_component_t_no_data)])];
          }),
          _: 1
        })], 4)]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var btns = ref([{
            name: 'small',
            height: '200px'
          }, {
            name: 'medium',
            height: '300px'
          }, {
            name: 'large',
            height: '400px'
          }]);
          var height = ref('200px');

          var handleChange = function handleChange(v) {
            height.value = v;
          };

          return {
            btns: btns,
            height: height,
            handleChange: handleChange
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/scale-view.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/scale-view.md?vue&type=style&index=0&id=0eb78626&lang=css
var scale_viewvue_type_style_index_0_id_0eb78626_lang_css = __webpack_require__(165);
var scale_viewvue_type_style_index_0_id_0eb78626_lang_css_default = /*#__PURE__*/__webpack_require__.n(scale_viewvue_type_style_index_0_id_0eb78626_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/scale-view.md?vue&type=style&index=0&id=0eb78626&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(scale_viewvue_type_style_index_0_id_0eb78626_lang_css_default.a, options);



/* harmony default export */ var docs_scale_viewvue_type_style_index_0_id_0eb78626_lang_css = (scale_viewvue_type_style_index_0_id_0eb78626_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/scale-view.md?vue&type=style&index=0&id=0eb78626&lang=css

// CONCATENATED MODULE: ./website/docs/scale-view.md





scale_viewvue_type_script_lang_ts.render = scale_viewvue_type_template_id_0eb78626_render

/* harmony default export */ var scale_view = __webpack_exports__["default"] = (scale_viewvue_type_script_lang_ts);

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-cloud.md?vue&type=template&id=3a2569c4

var tag_cloudvue_type_template_id_3a2569c4_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h2 id=\"biao-qian-yun\"><a class=\"header-anchor\" href=\"#biao-qian-yun\">#</a> 标签云</h2><p>3D 滚动标签云，基于 <a href=\"https://github.com/mcc108/TagCloud#optionskeep\">TagCloud.js</a>。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">#</a> 基础用法</h3>", 3);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n\t<t-tag-cloud :data=\"list\" @click-tag=\"fn\"></t-tag-cloud>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const list = ref('progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'\n            .split(/[,\\s]/g));\n        const fn = (text) => {\n            console.log(text);\n        };\n        return { list, fn };\n    },\n};\n</script>\n\n")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"xiu-gai-pei-zhi\"><a class=\"header-anchor\" href=\"#xiu-gai-pei-zhi\">#</a> 修改配置</h3><p>通过 <code>option</code> 属性可以修改默认配置，传入的值将和默认值合并。</p><p>Tag 文字的颜色可通过 <code>colors</code> 属性设置，其他样式可通过 CSS 设置，每一个 Tag 默认都有一个 <code>.tag-cloud-item</code> 的类名，也可以通过 <code>option.itemClass</code> 自定义。</p>", 3);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n\t<t-tag-cloud :data=\"list\" :option=\"option\" :colors=\"colors\" class=\"tags\"></t-tag-cloud>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const list = ref('progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'\n            .split(/[,\\s]/g));\n        const colors = ['#1fd5b1', '#fbb80b', '#0068b7', '#a74e38', '#27a4ff'];\n        const option = ref({\n            direction: 135,\n            radius: 200,\n            maxSpeed: 'fast'\n        });\n        return { colors, list, option };\n    },\n};\n</script>\n\n<style lang=\"less\">\n.tags {\n    background: #071132 url(*/images/tag-cloud-bg.png) no-repeat center center / 100%;\n}\n.tags .tag-cloud-item {\n    font-size: 28px;\n    cursor: pointer;\n}\n</style>\n\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"mo-ren-pei-zhi\"><a class=\"header-anchor\" href=\"#mo-ren-pei-zhi\">#</a> 默认配置</h3><p>详细配置说明见 <a href=\"https://github.com/mcc108/TagCloud#options\">https://github.com/mcc108/TagCloud#options</a></p><pre><code class=\"language-js\">{\n    // 滚动半径\n    radius: 140,\n    // 滚动速度(slow/normal/fast)\n    maxSpeed: &#39;normal&#39;,\n    initSpeed: &#39;normal&#39;,\n    // 滚动方向(角度)\n    direction: 45,\n    keep: false,\n    containerClass: &#39;tag-cloud-container&#39;,\n    itemClass: &#39;tag-cloud-item&#39;,\n    useContainerInlineStyles: true,\n    useItemInlineStyles: true,\n}\n</code></pre><h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">可选值</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">option</td><td style=\"text-align:left;\">配置</td><td style=\"text-align:left;\">object</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">-</td></tr><tr><td style=\"text-align:left;\">colors</td><td style=\"text-align:left;\">Tag 文字颜色</td><td style=\"text-align:left;\">boolean</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">-</td></tr><tr><td style=\"text-align:left;\">data</td><td style=\"text-align:left;\">需要显示的 Tag 文本</td><td style=\"text-align:left;\">string[]</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">-</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>instance-created</td><td>TagCloud 实例创建后触发</td><td><a href=\"https://github.com/mcc108/TagCloud#instance\">TagCloud 实例</a></td></tr><tr><td>click-tag</td><td>鼠标点击 Tag 后触发</td><td>被点击 Tag 的文本</td></tr></tbody></table>", 7);

function tag_cloudvue_type_template_id_3a2569c4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", tag_cloudvue_type_template_id_3a2569c4_hoisted_1, [_hoisted_2, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10], 512);
}
// CONCATENATED MODULE: ./website/docs/tag-cloud.md?vue&type=template&id=3a2569c4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-cloud.md?vue&type=script&lang=ts



/* harmony default export */ var tag_cloudvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-cloud-0"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_cloud = _resolveComponent("t-tag-cloud");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_cloud, {
          data: _ctx.list,
          onClickTag: _ctx.fn
        }, null, 8, ["data", "onClickTag"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var list = ref('progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'.split(/[,\s]/g));

          var fn = function fn(text) {
            console.log(text);
          };

          return {
            list: list,
            fn: fn
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-cloud-1"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_cloud = _resolveComponent("t-tag-cloud");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_cloud, {
          data: _ctx.list,
          option: _ctx.option,
          colors: _ctx.colors,
          "class": "tags"
        }, null, 8, ["data", "option", "colors"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var list = ref('progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'.split(/[,\s]/g));
          var colors = ['#1fd5b1', '#fbb80b', '#0068b7', '#a74e38', '#27a4ff'];
          var option = ref({
            direction: 135,
            radius: 200,
            maxSpeed: 'fast'
          });
          return {
            colors: colors,
            list: list,
            option: option
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/tag-cloud.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-cloud.md?vue&type=style&index=0&id=3a2569c4&lang=css
var tag_cloudvue_type_style_index_0_id_3a2569c4_lang_css = __webpack_require__(166);
var tag_cloudvue_type_style_index_0_id_3a2569c4_lang_css_default = /*#__PURE__*/__webpack_require__.n(tag_cloudvue_type_style_index_0_id_3a2569c4_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-cloud.md?vue&type=style&index=0&id=3a2569c4&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tag_cloudvue_type_style_index_0_id_3a2569c4_lang_css_default.a, options);



/* harmony default export */ var docs_tag_cloudvue_type_style_index_0_id_3a2569c4_lang_css = (tag_cloudvue_type_style_index_0_id_3a2569c4_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/tag-cloud.md?vue&type=style&index=0&id=3a2569c4&lang=css

// CONCATENATED MODULE: ./website/docs/tag-cloud.md





tag_cloudvue_type_script_lang_ts.render = tag_cloudvue_type_template_id_3a2569c4_render

/* harmony default export */ var tag_cloud = __webpack_exports__["default"] = (tag_cloudvue_type_script_lang_ts);

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-select.md?vue&type=template&id=4317530a

var tag_selectvue_type_template_id_4317530a_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "biao-qian-xuan-ze-qi"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#biao-qian-xuan-ze-qi"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 标签选择器")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "标签选择，带有折叠和全选功能，支持单选和多选。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-chu-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-tag-select v-model=\"value\" :options=\"options\"></t-tag-select>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const value = ref(1);\n        const options = ref(Array.from({ length: 5 }).map((_, index) => {\n            return {\n                name: '选项' + (index + 1),\n                value: index + 1,\n            };\n        }));\n        return { value, options };\n    }\n};\n</script>\n")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "duo-xuan"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#duo-xuan"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 多选")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "绑定的值是数组，表示可以多选。", -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-tag-select v-model=\"value\" :options=\"options\"></t-tag-select>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const value = ref([1, 2]);\n        const options = ref(Array.from({ length: 20 }).map((_, index) => {\n            return {\n                name: '选项' + (index + 1),\n                value: index + 1,\n            };\n        }));\n        return { value, options };\n    }\n};\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#jin-yong-zhuang-tai"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "可设置整个选择器不可用，或某个选项不可用。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("给 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "t-tag-select"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 设置 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 属性，整个选择器不可用。也可以通过 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 设置某一项不可用。")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-tag-select v-model=\"value1\" :options=\"options\" disabled></t-tag-select>\n    <t-tag-select v-model=\"value2\" :options=\"options\" class=\"mt10\"></t-tag-select>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const value1 = ref(1);\n        const value2 = ref([1, 2]);\n        const options = ref([\n            {\n                name: '选项1',\n                value: 1,\n            },\n            {\n                name: '选项2',\n                value: 2,\n                disabled: true,\n            },\n            {\n                name: '选项3',\n                value: 3,\n                disabled: true,\n            },\n            {\n                name: '选项4',\n                value: 4,\n            },\n            {\n                name: '选项5',\n                value: 5,\n            },\n        ]);\n        return { value1, value2, options };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.mt10 {\n    margin-top: 10px;\n}\n</style>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "xuan-xiang-zhe-die"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#xuan-xiang-zhe-die"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 选项折叠")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "选项过多可以折叠选项。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "expandable"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 属性开启折叠")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-tag-select v-model=\"value\" :options=\"options\" expandable></t-tag-select>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const value = ref([1]);\n        const options = ref(Array.from({ length: 20 }).map((_, index) => {\n            return {\n                name: '选项' + (index + 1),\n                value: index + 1,\n            };\n        }));\n        return { value, options };\n    },\n};\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "xuan-ze-quan-bu"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#xuan-ze-quan-bu"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 选择全部")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "选择全部选项。", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-tag-select v-model=\"value\" :options=\"options\" check-all></t-tag-select>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const value = ref([1]);\n        const options = ref(Array.from({ length: 5 }).map((_, index) => {\n            return {\n                name: '选项' + (index + 1),\n                value: index + 1,\n            };\n        }));\n        return { value, options };\n    },\n};\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>选项，键名见 <code>选项属性</code></td><td>array</td><td>-</td><td>-</td></tr><tr><td>v-model</td><td>绑定值，类型为 Array 时为多选</td><td>string/number/boolean/array</td><td>-</td><td>-</td></tr><tr><td>expandable</td><td>选项较多时是否折叠</td><td>boolean</td><td>true/false</td><td>false</td></tr><tr><td>expand-text</td><td>展开按钮文本</td><td>string</td><td>-</td><td>展开</td></tr><tr><td>collapse-text</td><td>收起按钮文本</td><td>string</td><td>-</td><td>收起</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>true/false</td><td>false</td></tr><tr><td>check-all</td><td>是否显示全选按钮</td><td>boolean</td><td>true/false</td><td>false</td></tr><tr><td>check-all-text</td><td>全选按钮文本</td><td>string</td><td>-</td><td>全部</td></tr></tbody></table><h3 id=\"xuan-xiang-shu-xing\"><a class=\"header-anchor\" href=\"#xuan-xiang-shu-xing\">#</a> 选项属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>选项名</td><td>string</td><td>-</td><td>-</td></tr><tr><td>value</td><td>选项值</td><td>string/number/boolean</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用选项</td><td>boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选择后的回调</td><td>更新后的值</td></tr></tbody></table>", 6);

function tag_selectvue_type_template_id_4317530a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  var _component_ComponentDemo2 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo2");

  var _component_ComponentDemo3 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo3");

  var _component_ComponentDemo4 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo4");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", tag_selectvue_type_template_id_4317530a_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo3)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo4)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20], 512);
}
// CONCATENATED MODULE: ./website/docs/tag-select.md?vue&type=template&id=4317530a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-select.md?vue&type=script&lang=ts



/* harmony default export */ var tag_selectvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-select-0"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_select = _resolveComponent("t-tag-select");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options
        }, null, 8, ["modelValue", "options"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var value = ref(1);
          var options = ref(Array.from({
            length: 5
          }).map(function (_, index) {
            return {
              name: '选项' + (index + 1),
              value: index + 1
            };
          }));
          return {
            value: value,
            options: options
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-select-1"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_select = _resolveComponent("t-tag-select");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options
        }, null, 8, ["modelValue", "options"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var value = ref([1, 2]);
          var options = ref(Array.from({
            length: 20
          }).map(function (_, index) {
            return {
              name: '选项' + (index + 1),
              value: index + 1
            };
          }));
          return {
            value: value,
            options: options
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo2: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-select-2"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_select = _resolveComponent("t-tag-select");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          options: _ctx.options,
          disabled: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_t_tag_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          options: _ctx.options,
          "class": "mt10"
        }, null, 8, ["modelValue", "options"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var value1 = ref(1);
          var value2 = ref([1, 2]);
          var options = ref([{
            name: '选项1',
            value: 1
          }, {
            name: '选项2',
            value: 2,
            disabled: true
          }, {
            name: '选项3',
            value: 3,
            disabled: true
          }, {
            name: '选项4',
            value: 4
          }, {
            name: '选项5',
            value: 5
          }]);
          return {
            value1: value1,
            value2: value2,
            options: options
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo3: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-select-3"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_select = _resolveComponent("t-tag-select");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          expandable: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var value = ref([1]);
          var options = ref(Array.from({
            length: 20
          }).map(function (_, index) {
            return {
              name: '选项' + (index + 1),
              value: index + 1
            };
          }));
          return {
            value: value,
            options: options
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo4: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-tag-select-4"
      };

      function render(_ctx, _cache) {
        var _component_t_tag_select = _resolveComponent("t-tag-select");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_tag_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          "check-all": ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var value = ref([1]);
          var options = ref(Array.from({
            length: 5
          }).map(function (_, index) {
            return {
              name: '选项' + (index + 1),
              value: index + 1
            };
          }));
          return {
            value: value,
            options: options
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/tag-select.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-select.md?vue&type=style&index=0&id=4317530a&lang=css
var tag_selectvue_type_style_index_0_id_4317530a_lang_css = __webpack_require__(167);
var tag_selectvue_type_style_index_0_id_4317530a_lang_css_default = /*#__PURE__*/__webpack_require__.n(tag_selectvue_type_style_index_0_id_4317530a_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/tag-select.md?vue&type=style&index=0&id=4317530a&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(tag_selectvue_type_style_index_0_id_4317530a_lang_css_default.a, options);



/* harmony default export */ var docs_tag_selectvue_type_style_index_0_id_4317530a_lang_css = (tag_selectvue_type_style_index_0_id_4317530a_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/tag-select.md?vue&type=style&index=0&id=4317530a&lang=css

// CONCATENATED MODULE: ./website/docs/tag-select.md





tag_selectvue_type_script_lang_ts.render = tag_selectvue_type_template_id_4317530a_render

/* harmony default export */ var tag_select = __webpack_exports__["default"] = (tag_selectvue_type_script_lang_ts);

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/text-marquee.md?vue&type=template&id=e590b6cc

var text_marqueevue_type_template_id_e590b6cc_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h2 id=\"wen-zi-pao-ma-deng\"><a class=\"header-anchor\" href=\"#wen-zi-pao-ma-deng\">#</a> 文字跑马灯</h2><p>文字循环轮播效果。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">#</a> 基础用法</h3><p><code>data</code> 中的 <code>text</code>字段表示需要显示的文本， <code>weight</code> 字段表示权重，值越大字号越大，可以通过 <code>max-font-size</code> 属性设置最大字号，默认字号范围是 (14 ~ 30)px。 <code>step</code> 属性用来控制轮播速度。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "此例中没有设置文本颜色 (color 属性)，每一条的颜色都是随机的。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <t-text-marquee :data=\"list\" :step=\"150\" class=\"text-box\"></t-text-marquee>\n</template>\n\n<script>\nimport { ref } from 'vue';\n\nfunction getRandomInt(min = 0, max = 1) {\n    return Math.floor(Math.random() * (max - min) + min);\n}\n\nexport default {\n    setup() {\n        const textArr = 'We are still working on a dedicated Migration Build of Vue 3 with Vue 2 compatible behavior and runtime warnings of incompatible usage. If you are planning to migrate a non-trivial Vue 2 app, we strongly recommend waiting for the Migration Build for a smoother experience.'.split(' ');\n        const list = ref([]);\n        list.value = Array.from({ length: 20 }).map(() => {\n            const index = getRandomInt(0, textArr.length - 5);\n            const weight = getRandomInt(10, 40);\n            return {\n                text: textArr.slice(index, index + 5).join(' '),\n                weight,\n            };\n        });\n        return { list };\n    },\n};\n</script>\n\n<style lang=\"less\">\n.text-box {\n    height: 200px;\n}\n</style>\n\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<p>为了能够正常显示，需要给组件设置高度，或者将组件放在有宽高的容器中。</p><pre><code class=\"language-html\">&lt;t-text-marquee style=&quot;height: 300px&quot;&gt;&lt;/t-text-marquee&gt;\n</code></pre><pre><code class=\"language-html\">&lt;div style=&quot;height: 300px&quot;&gt;\n    &lt;t-text-marquee&gt;&lt;/t-text-marquee&gt;\n&lt;/div&gt;\n</code></pre><h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th style=\"text-align:left;\">参数</th><th style=\"text-align:left;\">说明</th><th style=\"text-align:left;\">类型</th><th style=\"text-align:left;\">可选值</th><th style=\"text-align:left;\">默认值</th></tr></thead><tbody><tr><td style=\"text-align:left;\">data</td><td style=\"text-align:left;\">需要显示的数据</td><td style=\"text-align:left;\">array[{ text, weight }]</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">-</td></tr><tr><td style=\"text-align:left;\">step</td><td style=\"text-align:left;\">1秒内移动的距离，用来表示轮播动画速度，单位 px</td><td style=\"text-align:left;\">number</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">60</td></tr><tr><td style=\"text-align:left;\">hover-pause</td><td style=\"text-align:left;\">是否开启鼠标移入暂停轮播</td><td style=\"text-align:left;\">boolean</td><td style=\"text-align:left;\">true / false</td><td style=\"text-align:left;\">false</td></tr><tr><td style=\"text-align:left;\">colors</td><td style=\"text-align:left;\">文本的颜色列表</td><td style=\"text-align:left;\">array</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">随机</td></tr><tr><td style=\"text-align:left;\">max-font-size</td><td style=\"text-align:left;\">文本字体最大值，单位 px</td><td style=\"text-align:left;\">number</td><td style=\"text-align:left;\">-</td><td style=\"text-align:left;\">30</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击文本时触发</td><td>被点击的文本数据</td></tr></tbody></table>", 7);

function text_marqueevue_type_template_id_e590b6cc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", text_marqueevue_type_template_id_e590b6cc_hoisted_1, [_hoisted_2, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8], 512);
}
// CONCATENATED MODULE: ./website/docs/text-marquee.md?vue&type=template&id=e590b6cc

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/text-marquee.md?vue&type=script&lang=ts



/* harmony default export */ var text_marqueevue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-text-marquee-0"
      };

      function render(_ctx, _cache) {
        var _component_t_text_marquee = _resolveComponent("t-text-marquee");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode(_component_t_text_marquee, {
          data: _ctx.list,
          step: 150,
          "class": "text-box"
        }, null, 8, ["data"])]);
      }

      var ref = vue_esm_browser["A" /* ref */];

      function getRandomInt(min, max) {
        if (min === void 0) {
          min = 0;
        }

        if (max === void 0) {
          max = 1;
        }

        return Math.floor(Math.random() * (max - min) + min);
      }

      var obj = {
        setup: function setup() {
          var textArr = 'We are still working on a dedicated Migration Build of Vue 3 with Vue 2 compatible behavior and runtime warnings of incompatible usage. If you are planning to migrate a non-trivial Vue 2 app, we strongly recommend waiting for the Migration Build for a smoother experience.'.split(' ');
          var list = ref([]);
          list.value = Array.from({
            length: 20
          }).map(function () {
            var index = getRandomInt(0, textArr.length - 5);
            var weight = getRandomInt(10, 40);
            return {
              text: textArr.slice(index, index + 5).join(' '),
              weight: weight
            };
          });
          return {
            list: list
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/text-marquee.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/text-marquee.md?vue&type=style&index=0&id=e590b6cc&lang=css
var text_marqueevue_type_style_index_0_id_e590b6cc_lang_css = __webpack_require__(168);
var text_marqueevue_type_style_index_0_id_e590b6cc_lang_css_default = /*#__PURE__*/__webpack_require__.n(text_marqueevue_type_style_index_0_id_e590b6cc_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/text-marquee.md?vue&type=style&index=0&id=e590b6cc&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(text_marqueevue_type_style_index_0_id_e590b6cc_lang_css_default.a, options);



/* harmony default export */ var docs_text_marqueevue_type_style_index_0_id_e590b6cc_lang_css = (text_marqueevue_type_style_index_0_id_e590b6cc_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/text-marquee.md?vue&type=style&index=0&id=e590b6cc&lang=css

// CONCATENATED MODULE: ./website/docs/text-marquee.md





text_marqueevue_type_script_lang_ts.render = text_marqueevue_type_template_id_e590b6cc_render

/* harmony default export */ var text_marquee = __webpack_exports__["default"] = (text_marqueevue_type_script_lang_ts);

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/word-cloud.md?vue&type=template&id=4eef8226

var word_cloudvue_type_template_id_4eef8226_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var word_cloudvue_type_template_id_4eef8226_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h2 id=\"zi-fu-yun\"><a class=\"header-anchor\" href=\"#zi-fu-yun\">#</a> 字符云</h2><p>基于 <a href=\"https://github.com/ecomfe/echarts-wordcloud\">echarts-wordcloud</a> 的字符云。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">#</a> 基础用法</h3><p>数据通过 <code>option</code> 的 <code>data</code> 字段传入。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-word-cloud :option=\"option\" @instance-created=\"cb\"></t-word-cloud>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const option = ref({\n            data: 'Vue (pronounced /vjuː/ like view) is a progressive framework for building user interfaces'\n            .split(' ')\n            .map(word => {\n                return {\n                    name: word,\n                    value: Math.random(),\n                };\n            })\n        });\n        const cb = (chart) => {\n            // chart.on('click', (e) => {\n            //     console.log(e.data);\n            // });\n        };\n        return { option, cb };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    height: 300px;\n}\n</style>\n\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<div class=\"tip\"><p>组件内部监听了组件根节点内容区域的改变，能在宽高变化后，自动调用 <a href=\"https://echarts.apache.org/zh/api.html#echartsInstance.resize\">echartsInstance.resize</a> 方法。</p><p>默认情况下也绑定了 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event\">resize</a> 事件，窗口大小改变会调用 <a href=\"https://echarts.apache.org/zh/api.html#echartsInstance.resize\">echartsInstance.resize</a> 方法，设置属性 <code>:bind-resize=&quot;false&quot;</code> 则不绑定。</p></div><h3 id=\"xiu-gai-pei-zhi\"><a class=\"header-anchor\" href=\"#xiu-gai-pei-zhi\">#</a> 修改配置</h3><p>通过 <code>option</code> 属性可以修改默认配置，传入的值将和默认值 <a href=\"https://lodash.com/docs/4.17.15#merge\">深度 merge</a>。</p>", 3);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "此例中修改了文本的样式。", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <t-word-cloud :option=\"option\"></t-word-cloud>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const list = 'progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'\n            .split(',')\n            .map(item => {\n                return {\n                    name: item,\n                    value: Math.random(),\n                };\n            });\n        const colors = ['#1fd5b1', '#fbb80b', '#0068b7', '#a74e38', '#27a4ff'];\n        const option = ref({\n            sizeRange: [12, 30],\n            rotationRange: [0, 0],\n            gridSize: 30,\n            textStyle: {\n                color() {\n                    return colors[Math.floor(Math.random() * colors.length)];\n                },\n            },\n            data: list,\n        });\n        return { option };\n    },\n};\n</script>\n\n<style scoped lang=\"less\">\n.wrap {\n    height: 300px;\n}\n</style>\n\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h3 id=\"mo-ren-pei-zhi\"><a class=\"header-anchor\" href=\"#mo-ren-pei-zhi\">#</a> 默认配置</h3><p>详细配置说明见 <a href=\"https://github.com/ecomfe/echarts-wordcloud#usage\">https://github.com/ecomfe/echarts-wordcloud#usage</a>。</p><pre><code class=\"language-js\">{\n    type: &#39;wordCloud&#39;,\n    shape: &#39;circle&#39;,\n    left: &#39;center&#39;,\n    top: &#39;center&#39;,\n    width: &#39;70%&#39;,\n    height: &#39;80%&#39;,\n    right: null,\n    bottom: null,\n    sizeRange: [12, 60],\n    rotationRange: [-90, 90],\n    rotationStep: 45,\n    gridSize: 8,\n    drawOutOfBound: false,\n    layoutAnimation: true,\n    textStyle: {\n        color: function() {\n            return &#39;rgb(&#39; + [\n                Math.round(Math.random() * 160),\n                Math.round(Math.random() * 160),\n                Math.round(Math.random() * 160),\n            ].join(&#39;,&#39;) + &#39;)&#39;;\n        },\n    },\n    emphasis: {\n        textStyle: {\n            textShadowBlur: &#39;10px&#39;,\n            textShadowColor: &#39;#333&#39;,\n        },\n    },\n    data: [],\n}\n</code></pre><h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>option</td><td>配置</td><td>object</td><td>-</td><td>-</td></tr><tr><td>bind-resize</td><td>是否绑定 resize 事件</td><td>boolean</td><td>true / false</td><td>true</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>instance-created</td><td>echarts 实例创建后触发</td><td>echarts 实例，用法见 <a href=\"https://echarts.apache.org/zh/api.html#echartsInstance\">https://echarts.apache.org/zh/api.html#echartsInstance</a></td></tr></tbody></table>", 7);

function word_cloudvue_type_template_id_4eef8226_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", word_cloudvue_type_template_id_4eef8226_hoisted_1, [word_cloudvue_type_template_id_4eef8226_hoisted_2, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12], 512);
}
// CONCATENATED MODULE: ./website/docs/word-cloud.md?vue&type=template&id=4eef8226

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/word-cloud.md?vue&type=script&lang=ts



/* harmony default export */ var word_cloudvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-word-cloud-0"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };

      function render(_ctx, _cache) {
        var _component_t_word_cloud = _resolveComponent("t-word-cloud");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_word_cloud, {
          option: _ctx.option,
          onInstanceCreated: _ctx.cb
        }, null, 8, ["option", "onInstanceCreated"])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var option = ref({
            data: 'Vue (pronounced /vjuː/ like view) is a progressive framework for building user interfaces'.split(' ').map(function (word) {
              return {
                name: word,
                value: Math.random()
              };
            })
          });

          var cb = function cb(chart) {// chart.on('click', (e) => {
            //     console.log(e.data);
            // });
          };

          return {
            option: option,
            cb: cb
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _createVNode = vue_esm_browser["j" /* createVNode */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-word-cloud-1"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };

      function render(_ctx, _cache) {
        var _component_t_word_cloud = _resolveComponent("t-word-cloud");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_t_word_cloud, {
          option: _ctx.option
        }, null, 8, ["option"])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var list = 'progressive framework,building user interfaces,other monolithic frameworks,the view layer only,easy to pick up,integrate with other libraries,Single-Page Applications'.split(',').map(function (item) {
            return {
              name: item,
              value: Math.random()
            };
          });
          var colors = ['#1fd5b1', '#fbb80b', '#0068b7', '#a74e38', '#27a4ff'];
          var option = ref({
            sizeRange: [12, 30],
            rotationRange: [0, 0],
            gridSize: 30,
            textStyle: {
              color: function color() {
                return colors[Math.floor(Math.random() * colors.length)];
              }
            },
            data: list
          });
          return {
            option: option
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/word-cloud.md?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(34);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/word-cloud.md?vue&type=style&index=0&id=4eef8226&lang=css
var word_cloudvue_type_style_index_0_id_4eef8226_lang_css = __webpack_require__(169);
var word_cloudvue_type_style_index_0_id_4eef8226_lang_css_default = /*#__PURE__*/__webpack_require__.n(word_cloudvue_type_style_index_0_id_4eef8226_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--2-1!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/word-cloud.md?vue&type=style&index=0&id=4eef8226&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(word_cloudvue_type_style_index_0_id_4eef8226_lang_css_default.a, options);



/* harmony default export */ var docs_word_cloudvue_type_style_index_0_id_4eef8226_lang_css = (word_cloudvue_type_style_index_0_id_4eef8226_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./website/docs/word-cloud.md?vue&type=style&index=0&id=4eef8226&lang=css

// CONCATENATED MODULE: ./website/docs/word-cloud.md





word_cloudvue_type_script_lang_ts.render = word_cloudvue_type_template_id_4eef8226_render

/* harmony default export */ var word_cloud = __webpack_exports__["default"] = (word_cloudvue_type_script_lang_ts);

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/overlay.md?vue&type=template&id=896b5852

var overlayvue_type_template_id_896b5852_hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var overlayvue_type_template_id_896b5852_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h2", {
  id: "zhe-zhao-ceng"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#zhe-zhao-ceng"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 遮罩层")], -1);

var overlayvue_type_template_id_896b5852_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "创建遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "ji-ben-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#ji-ben-yong-fa"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 基本用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "默认点击遮罩层本身或使用 ESC 键可关闭。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <button class=\"demo-btn\" @click=\"visible = true\">显示遮罩层</button>\n    <t-overlay v-model=\"visible\" append-to-body></t-overlay>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            visible: false,\n        };\n    }\n};\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "qian-ru-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#qian-ru-nei-rong"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 嵌入内容")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "通过默认插槽可以在遮罩层上嵌入任意内容。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <button class=\"demo-btn\" @click=\"visible = true\">显示遮罩层</button>\n        <t-overlay v-model=\"visible\" append-to-body>\n            <div class=\"empty-dialog\">\n                <t-no-data></t-no-data>\n            </div>\n        </t-overlay>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            visible: false,\n        };\n    },\n};\n</script>\n\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("h3", {
  id: "mo-hu-bei-jing"
}, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("a", {
  "class": "header-anchor",
  href: "#mo-hu-bei-jing"
}, "#"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 模糊背景")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, "打开遮罩层，默认背景是半透明的黑色，可以使用模糊背景效果。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "blur=\"#app\""), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 表示打开遮罩层时，将 "), /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "#app"), /*#__PURE__*/Object(vue_esm_browser["i" /* createTextVNode */])(" 元素模糊处理。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["j" /* createVNode */])("code", null, "<template>\n    <div class=\"wrap\">\n        <button class=\"demo-btn\" @click=\"visible = true\">显示遮罩层</button>\n        <t-overlay v-model=\"visible\" append-to-body blur=\"#app\">\n            <div class=\"empty-dialog border-theme\">\n                <t-no-data></t-no-data>\n            </div>\n        </t-overlay>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nexport default {\n    setup() {\n        const visible = ref(false);\n        return { visible }\n    }\n};\n</script>\n\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<div class=\"tip\"><p>组件没有提供类似 <code>custom-class</code> 的属性，对遮罩层有自定义样式需求的，比如修改默认的背景、设置遮罩的层级 (z-index) 等，可以直接在组件上使用 class 或 style 即可，遮罩层是否被插入到 body 元素上都有效。</p></div><h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">#</a> 属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>是否显示遮罩层</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>append-to-body</td><td>是否将遮罩层插入到 body 元素上</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>close-on-press-escape</td><td>是否可以使用 ESC 键关闭遮罩层</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>destroy-on-close</td><td>是否在关闭后销毁通过 slot 传入的内容</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>lock-scroll</td><td>是否锁定背景滚动</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>close-on-click-modal</td><td>是否可以点击自身关闭遮罩层</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>blur</td><td>作为背景被模糊处理的节点选择器名称，比如 <code>#app</code></td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">#</a> 事件</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>打开或关闭时触发</td><td>遮罩层的显示状态</td></tr><tr><td>opened</td><td>打开遮罩层动画完成后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭遮罩层动画完成后触发</td><td>-</td></tr></tbody></table>", 5);

function overlayvue_type_template_id_896b5852_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ComponentDemo0 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo0");

  var _component_demo_block = Object(vue_esm_browser["D" /* resolveComponent */])("demo-block");

  var _component_ComponentDemo1 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo1");

  var _component_ComponentDemo2 = Object(vue_esm_browser["D" /* resolveComponent */])("ComponentDemo2");

  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", overlayvue_type_template_id_896b5852_hoisted_1, [overlayvue_type_template_id_896b5852_hoisted_2, overlayvue_type_template_id_896b5852_hoisted_3, _hoisted_4, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo0)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo1)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["j" /* createVNode */])(_component_demo_block, null, {
    demo: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [Object(vue_esm_browser["j" /* createVNode */])(_component_ComponentDemo2)];
    }),
    highlight: Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    "default": Object(vue_esm_browser["N" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14], 512);
}
// CONCATENATED MODULE: ./website/docs/overlay.md?vue&type=template&id=896b5852

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(28);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/overlay.md?vue&type=script&lang=ts



/* harmony default export */ var overlayvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {
    ComponentDemo0: function () {
      var _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-overlay-0"
      };

      function render(_ctx, _cache) {
        var _component_t_overlay = _resolveComponent("t-overlay");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("button", {
          "class": "demo-btn",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.visible = true;
          })
        }, "显示遮罩层"), _createVNode(_component_t_overlay, {
          modelValue: _ctx.visible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          }),
          "append-to-body": ""
        }, null, 8, ["modelValue"])]);
      }

      var obj = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo1: function () {
      var _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-overlay-1"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };
      var _hoisted_3 = {
        "class": "empty-dialog"
      };

      function render(_ctx, _cache) {
        var _component_t_no_data = _resolveComponent("t-no-data");

        var _component_t_overlay = _resolveComponent("t-overlay");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode("button", {
          "class": "demo-btn",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.visible = true;
          })
        }, "显示遮罩层"), _createVNode(_component_t_overlay, {
          modelValue: _ctx.visible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          }),
          "append-to-body": ""
        }, {
          "default": _withCtx(function () {
            return [_createVNode("div", _hoisted_3, [_createVNode(_component_t_no_data)])];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var obj = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }(),
    ComponentDemo2: function () {
      var _createVNode = vue_esm_browser["j" /* createVNode */],
          _resolveComponent = vue_esm_browser["D" /* resolveComponent */],
          _withCtx = vue_esm_browser["N" /* withCtx */],
          _openBlock = vue_esm_browser["v" /* openBlock */],
          _createBlock = vue_esm_browser["f" /* createBlock */];
      var _hoisted_1 = {
        "class": "demo-overlay-2"
      };
      var _hoisted_2 = {
        "class": "wrap"
      };
      var _hoisted_3 = {
        "class": "empty-dialog border-theme"
      };

      function render(_ctx, _cache) {
        var _component_t_no_data = _resolveComponent("t-no-data");

        var _component_t_overlay = _resolveComponent("t-overlay");

        return _openBlock(), _createBlock("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode("button", {
          "class": "demo-btn",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.visible = true;
          })
        }, "显示遮罩层"), _createVNode(_component_t_overlay, {
          modelValue: _ctx.visible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          }),
          "append-to-body": "",
          blur: "#app"
        }, {
          "default": _withCtx(function () {
            return [_createVNode("div", _hoisted_3, [_createVNode(_component_t_no_data)])];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var ref = vue_esm_browser["A" /* ref */];
      var obj = {
        setup: function setup() {
          var visible = ref(false);
          return {
            visible: visible
          };
        }
      };
      ;
      return extends_default()({
        render: render
      }, obj);
    }()
  },
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/overlay.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/overlay.md



overlayvue_type_script_lang_ts.render = overlayvue_type_template_id_896b5852_render

/* harmony default export */ var overlay = __webpack_exports__["default"] = (overlayvue_type_script_lang_ts);

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/quick-start.md?vue&type=template&id=afc0eb88

var _hoisted_1 = {
  ref: "mdEl",
  "class": "markdown-body"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["h" /* createStaticVNode */])("<h2 id=\"kuai-su-kai-shi\"><a class=\"header-anchor\" href=\"#kuai-su-kai-shi\">#</a> 快速开始</h2><h3 id=\"an-zhuang\"><a class=\"header-anchor\" href=\"#an-zhuang\">#</a> 安装</h3><h4 id=\"npm-an-zhuang\"><a class=\"header-anchor\" href=\"#npm-an-zhuang\">#</a> NPM 安装</h4><p>推荐使用 npm 来安装，更好地和打包工具配合使用。</p><pre><code class=\"language-shell\">$ npm install tiv --save\n</code></pre><h4 id=\"cdn-yin-ru\"><a class=\"header-anchor\" href=\"#cdn-yin-ru\">#</a> CDN 引入</h4><p>通过 <a href=\"https://unpkg.com/tiv/\">unpkg.com/tiv</a> 可以直接引入最新版本的资源，也可以切换需要的版本，在页面上引入 js 和 css 文件即可开始使用：</p><pre><code class=\"language-html\">&lt;!-- import css --&gt;\n&lt;link href=&quot;//unpkg.com/tiv/styles/index.css&quot;&gt;\n&lt;!-- import tiv --&gt;\n&lt;script src=&quot;//unpkg.com/tiv/lib/index.full.js&quot;&gt;&lt;/script&gt;\n</code></pre><h3 id=\"yin-ru-zu-jian\"><a class=\"header-anchor\" href=\"#yin-ru-zu-jian\">#</a> 引入组件</h3><h4 id=\"wan-zheng-yin-ru\"><a class=\"header-anchor\" href=\"#wan-zheng-yin-ru\">#</a> 完整引入</h4><p>在 main.js 中写入以下内容，样式文件需要单独引入：</p><pre><code class=\"language-js\">import { createApp } from &#39;vue&#39;\nimport Tiv from &#39;tiv&#39;\nimport &#39;tiv/style/index.css&#39;\nimport App from &#39;./App.vue&#39;\n\nconst app = createApp(App)\napp.use(Tiv)\napp.mount(&#39;#app&#39;)\n</code></pre><h4 id=\"an-xu-yin-ru\"><a class=\"header-anchor\" href=\"#an-xu-yin-ru\">#</a> 按需引入</h4><ol><li>手动引入需要的组件，比如 TagSelect：</li></ol><pre><code class=\"language-js\">import { createApp } from &#39;vue&#39;\nimport App from &#39;./App.vue&#39;\nimport TagSelect from &#39;tiv/lib/tag-select&#39;\nimport &#39;tiv/styles/tag-select.css&#39;\n\ncreateApp(App).use(TagSelect).mount(&#39;#app&#39;)\n</code></pre><ol start=\"2\"><li>也可以借助 <a href=\"https://github.com/ant-design/babel-plugin-import\">babel-plugin-import</a> 只引入需要的组件，先安装 babel-plugin-import：</li></ol><pre><code class=\"language-shell\">$ npm install babel-plugin-import -D\n</code></pre><p>修改 babel.config.js :</p><pre><code class=\"language-js\">module.exports = {\n  plugins: [\n    [\n      &quot;import&quot;,\n      {\n        libraryName: &#39;tiv&#39;,\n        customStyleName: (name) =&gt; {\n          return `tiv/styles/${name}.css`\n        },\n      },\n    ],\n  ],\n}\n</code></pre><p>在 main.js 中引入需要的组件。</p><pre><code class=\"language-js\">import { createApp } from &#39;vue&#39;\nimport { TagSelect } from &#39;tiv&#39;\nimport &#39;tiv/styles/base.css&#39;\nimport App from &#39;./App.vue&#39;\n\nconst app = createApp(App)\napp.use(TagSelect)\n// 或者\n// app.component(TagSelect.name, TagSelect)\napp.mount(&#39;#app&#39;)\n</code></pre><div class=\"tip\"><ul><li><p>按需引入也需要 <code>tiv/styles/base.css</code> 基础样式。</p></li><li><p>所有组件在使用时需要加前缀，比如：<code>t-tag-select</code>。</p></li></ul></div><h3 id=\"zi-ding-yi-zhu-ti\"><a class=\"header-anchor\" href=\"#zi-ding-yi-zhu-ti\">#</a> 自定义主题</h3><p>Tiv 使用了 Less，变量文件是 <code>tiv/styles/common/var.less</code>，可以直接在项目中修改样式变量。首先新建一个文件，例如 <code>theme.less</code>，写入以下内容：</p><pre><code class=\"language-less\">@import &#39;tiv/styles/index.less&#39;;\n\n// 修改主题色\n@theme-color: #d64541;\n</code></pre><p>然后，在项目的入口文件中， 直接引入 <code>theme.less</code>。</p><pre><code class=\"language-js\">import { createApp } from &#39;vue&#39;\nimport App from &#39;./App.vue&#39;\nimport Tiv from &#39;tiv&#39;\nimport &#39;./theme.less&#39;\n\ncreateApp(App).use(Tiv).mount(&#39;#app&#39;)\n</code></pre>", 27);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["v" /* openBlock */])(), Object(vue_esm_browser["f" /* createBlock */])("div", _hoisted_1, [_hoisted_2], 512);
}
// CONCATENATED MODULE: ./website/docs/quick-start.md?vue&type=template&id=afc0eb88

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(37);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/quick-start.md?vue&type=script&lang=ts


/* harmony default export */ var quick_startvue_type_script_lang_ts = ({
  name: 'DocContent',
  components: {},
  mounted: function mounted() {
    this.codeHighlight();
  },
  beforeUpdate: function beforeUpdate() {
    this.codeHighlight();
  },
  methods: {
    codeHighlight: function codeHighlight() {
      var _this = this;

      this.$nextTick(function () {
        var blocks = _this.$refs.mdEl.querySelectorAll('pre code');

        blocks.forEach(lib_default.a.highlightBlock);
      });
    }
  }
});
// CONCATENATED MODULE: ./website/docs/quick-start.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/quick-start.md



quick_startvue_type_script_lang_ts.render = render

/* harmony default export */ var quick_start = __webpack_exports__["default"] = (quick_startvue_type_script_lang_ts);

/***/ })

/******/ });