"use strict";
var source_editor, config_editor, translate_editor, previousValue = "";

function triggerFormat(editor) {
  editor.trigger("anyString", "editor.action.formatDocument");
}
function save() {
  chrome.storage.local.set(JSON.parse(source_editor.getValue()), function () {
    (previousValue = source_editor.getValue()),
      document
        .getElementById("saveStatus")
        .setAttribute("style", "visibility:visible;background: #d8f398;"),
      setTimeout(function () {
        document
          .getElementById("saveStatus")
          .setAttribute("style", "visibility:hidden");
      }, 300);
  });
}
function reset() {
  source_editor.setValue(previousValue), triggerFormat();
}

chrome.storage.local.get("config", function (e) {
  require([
    "vs/basic-languages/monaco.contribution",
    "vs/language/json/monaco.contribution",
  ], function () {
    config_editor = monaco.editor.create(document.getElementById("config"), {
      value: [JSON.stringify(e.config)].join("\n"),
      language: "json",
    });
  }),
    monaco,
    setTimeout(function () {
      triggerFormat(config_editor);
    }, 300);
});


require([
  "vs/basic-languages/monaco.contribution",
  "vs/language/json/monaco.contribution",
], function () {
  source_editor = monaco.editor.create(document.getElementById("source"), {
    value: ["{}"].join("\n"),
    language: "json",
  });
}),
  monaco,
  setTimeout(function () {
    triggerFormat(source_editor);
  }, 300),
  (previousValue = source_editor.getValue());


require([
  "vs/basic-languages/monaco.contribution",
  "vs/language/json/monaco.contribution",
], function () {
  translate_editor = monaco.editor.create(document.getElementById("translated"), {
    value: ["{}"].join("\n"),
    language: "json",
  });
}),
  monaco,
  setTimeout(function () {
    triggerFormat(translate_editor);
  }, 300),
  (previousValue = source_editor.getValue());

source_editor.getModel().onDidChangeContent(e => {
  translate_editor.setValue(JSON.stringify(replaceKeys(JSON.parse(source_editor.getValue()), JSON.parse(config_editor.getValue()))));
  setTimeout(function () {
    triggerFormat(translate_editor);
  });
})


function replaceKeys(source, config) {
  let translated = undefined;
  if (typeof (source) === 'object' && Array.isArray(source)) {
    translated=[];
    source.forEach(obj => {
      translated.push(replaceKeys(obj, config));
    });
  } else {
    const keys = Object.keys(source);
    translated={};
    keys.forEach(key => {
      const value = typeof (source[key]) === 'object' ? replaceKeys(source[key], config) : source[key];
      const translatedKey = config[key] ? config[key] : key;
      translated[translatedKey] = value;
    })
  }
  return translated;
}

document.getElementById("saveBtn").addEventListener("click", save);
document.getElementById("resetBtn").addEventListener("click", reset);
