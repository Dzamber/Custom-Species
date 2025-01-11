!function(){"use strict";const e={NAME:"WFRP4E: More Subspecies",ID:"wfrp4e-more-subspecies",NAMESPACE:"wfrp4eMoreSubspecies"},t=1e3,n=60,a={DEBUG_MODE:"debugMode",ENABLED_DATASETS:"enabledDataSets",FORM_SETTINGS:"formSettings",REPLACE_RAW_DATA:"replaceRawData"},o=[a.ENABLED_DATASETS,a.REPLACE_RAW_DATA,a.DEBUG_MODE];function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===s}(e)}(e)};var s="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?E((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function u(e,t,n){return e.concat(t).map((function(e){return c(e,n)}))}function l(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function f(e,t){try{return t in e}catch(e){return!1}}function d(e,t,n){var a={};return n.isMergeableObject(e)&&l(e).forEach((function(t){a[t]=c(e[t],n)})),l(t).forEach((function(o){(function(e,t){return f(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(f(e,o)&&n.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return E;var n=t.customMerge(e);return"function"==typeof n?n:E}(o,n)(e[o],t[o],n):a[o]=c(t[o],n))})),a}function E(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||u,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=c;var a=Array.isArray(t);return a===Array.isArray(e)?a?n.arrayMerge(e,t,n):d(e,t,n):c(t,n)}E.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return E(e,n,t)}),{})};var A=i(E);function g(t,n){console.log(`%c${e.ID}%c | ${t}`,"color: gold","color: unset",n||"")}function b(t,n=null){window[e.NAMESPACE].settings[a.DEBUG_MODE]&&(n?g(t,n):g(t))}function m(e,t){return function(e,t){return e<t?-1:e>t?1:0}(e.name,t.name)}async function p(e,t){let n,a=0;return new Promise((o=>{!function i(){return clearTimeout(n),a++,void 0!==game.wfrp4e&&void 0!==game.wfrp4e.config&&void 0!==game.wfrp4e.config.subspecies&&void 0!==game.wfrp4e.config.subspecies.human?o(!0):a>=t?o(!1):void(n=setTimeout(i,e))}()}))}function w(...e){const t={},n=function(...e){return e.flatMap(Object.keys).filter(((e,t,n)=>n.indexOf(e)===t)).sort()}(...e);for(const a of n)t[a]=e.flatMap((e=>e[a]||[])).sort(m);return t}function h(){const t=function(e){const t={};for(const[,n]of Object.entries(e))if(n.species){t[n.species]||(t[n.species]=[]);for(const e of n.entries)t[n.species].push(e)}return t}(window[e.NAMESPACE].data),n=function(e){const t=Object.keys(e);let n=0;for(const a of t)n+=e[a].length;return n}(t);if(0===n)return b("Using only RAW subspecies"),void(game.wfrp4e.config.subspecies=window[e.NAMESPACE].rawData);const o=window[e.NAMESPACE].settings[a.REPLACE_RAW_DATA];o&&b("Overriding RAW data");const i=w(o?{}:function(e){const t={};for(const[n,a]of Object.entries(e)){t[n]=[];const e=Object.entries(a);for(const[a,o]of e)t[n].push({id:a,...o})}return t}(window[e.NAMESPACE].rawData),t);game.wfrp4e.config.subspecies=function(e){const t={};for(const[n,a]of Object.entries(e))t[n]=a.reduce(((e,t)=>{const{id:n,name:a,skills:o,talents:i}=t;return{...e,[n]:{name:a,skills:o,talents:i}}}),{});return t}(i),b(`${n} subspecies loaded`)}class D extends FormApplication{constructor(){super()}static get defaultOptions(){return mergeObject(super.defaultOptions,{classes:["form",e.ID],popOut:!0,id:`${e.ID}-enabled-datasets-setting`,title:`${e.NAME} - Enabled Datasets`,template:`modules/${e.ID}/templates/enabled-datasets-setting.hbs`,width:400})}getData(){const t=window[e.NAMESPACE].availableDatasets,n=window[e.NAMESPACE].settings[a.ENABLED_DATASETS]||[];return{datasets:t.map((e=>({id:e.id,label:e.id,description:`version: ${e.hash}`,enabled:n.includes(e.id)})))}}async _updateObject(t,n){if("submit"!==t.submitter.name)return;const o=(n.datasets||[]).filter(Boolean);window[e.NAMESPACE].saveSetting(a.ENABLED_DATASETS,o)}}function y(){return{...o.reduce(((t,n)=>({...t,[n]:game.settings.get(e.ID,n)})),{}),[a.FORM_SETTINGS]:{width:500,height:380}}}const S=function(e,t=300){let n;return(...a)=>{clearTimeout(n),n=setTimeout((()=>{e.apply(this,a)}),t)}}((function(){window[e.NAMESPACE].settings=y(),Hooks.call(`${e.ID}:init`)}));function M(t,n){game.settings.set(e.ID,t,n)}var O={entries:[{id:"bretonnian-humans",hash:"1d9330a2f281",filename:"bretonnian-humans-1d9330a2f281"},{id:"estalian-humans",hash:"e12b289aa5c2",filename:"estalian-humans-e12b289aa5c2"},{id:"imperial-humans",hash:"962237202a19",filename:"imperial-humans-962237202a19"},{id:"kislevite-humans",hash:"8611fca1b061",filename:"kislevite-humans-8611fca1b061"},{id:"imperial2-humans",hash:"custom",filename:"imperial-humans-custom"},{id:"tilean-humans",hash:"cd43a9cf1160",filename:"tilean-humans-cd43a9cf1160"}]};Hooks.on(`${e.ID}:init`,(async()=>{b(`Hook: ${e.ID}:init`);try{await async function(){const t=Object.keys(window[e.NAMESPACE].data),n=window[e.NAMESPACE].settings[a.ENABLED_DATASETS],o=n.reduce(((n,a)=>{if(t.includes(a))return n;const o=window[e.NAMESPACE].availableDatasets.find((e=>e.id===a));return n.concat(o.filename)}),[]),i=(await Promise.allSettled(o.map((t=>foundry.utils.fetchJsonWithTimeout(`modules/${e.ID}/data/${t}.json`))))).reduce(((e,t)=>"fulfilled"===t.status?e.concat(t.value):e),[]);let r={};for(const t of n)if(window[e.NAMESPACE].data[t])r[t]=window[e.NAMESPACE].data[t];else{const e=i.find((e=>e.id===t));e?(r[t]=e,b(`Loaded ${t}`)):b(`Failed to load ${t}`)}window[e.NAMESPACE].data=r}(),window[e.NAMESPACE].initialized||(window[e.NAMESPACE].rawData=A({},game.wfrp4e.config.subspecies),window[e.NAMESPACE].initialized=!0),h()}catch(t){ui.notifications.error(`Module ${e.ID} could not be loaded. Check your log.`),b("Error",t)}})),Hooks.on("init",(async()=>{const o=(game.settings.registerMenu(e.ID,a.ENABLED_DATASETS+"Menu",{name:"Enabled Datasets",label:"Configure Datasets",hint:"Whether the available datasets should be allowed in your game.",icon:"fa fa-list-check",type:D,restricted:!0}),game.settings.register(e.ID,a.ENABLED_DATASETS,{scope:"world",config:!1,type:Array,default:[],onChange:S}),game.settings.register(e.ID,a.REPLACE_RAW_DATA,{name:"Replace RAW data",hint:"Whether the homebrew subspecies should replace the RAW subspecies.",scope:"world",config:!0,type:Boolean,default:!1,onChange:S}),game.settings.register(e.ID,a.DEBUG_MODE,{name:"Debug Mode",hint:"Whether if the module logs debug messages to the browser console.",scope:"world",config:!0,type:Boolean,default:!1,onChange:S}),y());window[e.NAMESPACE]={availableDatasets:O.entries,data:{},initialized:!1,rawData:null,saveSetting:M,settings:o},b("Hook: init");try{if(!await p(t,n))throw new Error("WFRP4E core didn't load in time.");b("Core loaded"),Hooks.call(`${e.ID}:init`)}catch(t){ui.notifications.error(`Module ${e.ID} could not be loaded. Check your log.`),b("Error",t)}}))}();