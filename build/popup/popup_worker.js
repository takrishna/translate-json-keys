function logic(a,e){return e.specs.reduce((e,r)=>{let t=new Function("clipboard","url","arrayOrPattern","buildRequestParam","displayName",r.func)(a,r.url,r.arrayOrPattern,r.buildRequestParam,r.displayName);return e.push(t),e},[])}onmessage=function(a){var e=logic(a.data.clip,a.data.config);postMessage(e)};