var javaScriptContainer = document.getElementById("javaScriptContainer");
var HTMLScriptContainer = document.getElementById("HTMLScriptContainer");
var CSSScriptContainer = document.getElementById("CSSScriptContainer");
var outputArea = document.getElementById("OutputArea");
var saveHTMLButton = document.getElementById("saveHTMLButton")
var saveTxtButton = document.getElementById("saveTxtButton")
var projectNameInputArea = document.getElementById("projectNameInput")
var autoSaveSwitch = document.getElementById("autoSaveSwitch")

window.onload = loadData()


document.getElementById("importFile").addEventListener("change", function() {
  var file = this.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function(evt) {
      console.log(evt);
      HTMLScriptContainer.value = evt.target.result;
    };

    reader.onerror = function(evt) {
      console.error("An error ocurred reading the file", evt);
      alert("An error occured reading the File")
    };

    reader.readAsText(file, "UTF-8");
  }
}, false);

function loadData() {
  javaScriptContainer.value = localStorage.getItem("JScode");
  CSSScriptContainer.value = localStorage.getItem("CSScode");
  HTMLScriptContainer.value = localStorage.getItem("HTMLcode");
}

function saveProject() {
  localStorage.setItem("JScode", javaScriptContainer.value);
  localStorage.setItem("CSScode", CSSScriptContainer.value);
  localStorage.setItem("HTMLcode", HTMLScriptContainer.value);
}

function ImportFile() {

}

function getProjectName() {
  var name = projectNameInputArea.value
  if (!name) {
    name = "UntitledProject"
  }
  return (name)
}

function run() {
	if(autoSaveSwitch.checked){
  saveProject()
  }
  outputArea.style.backgroundColor = "white";
  var JScode = "<script> " + javaScriptContainer.value + "<" + "/script>"
  var HTMLcode = HTMLScriptContainer.value
  var CSScode = "<style>" + CSSScriptContainer.value + "</style>";
  outputArea.srcdoc = HTMLcode + CSScode + JScode
}

function compile() {
  var JScode = "<script> " + javaScriptContainer.value + "<" + "/script>"
  var HTMLcode = HTMLScriptContainer.value
  var CSScode = "<style>" + CSSScriptContainer.value + "</style>"
  return (HTMLcode + JScode + CSScode)
}

//Save file function
function file(name, type, content) {

  // create the text file as a Blob: 
  var blob = new Blob([content], {
    type: "text/plain"
  });

  // download the file: 
  download(blob, (name + type));


  function download(blob, name) {
    var url = URL.createObjectURL(blob),
      div = document.createElement("div"),
      anch = document.createElement("a");

    document.body.appendChild(div);
    div.appendChild(anch);

    anch.innerHTML = "&nbsp;";
    div.style.width = "0";
    div.style.height = "0";
    anch.href = url;
    anch.download = name;

    var ev = new MouseEvent("click", {});
    anch.dispatchEvent(ev);
    document.body.removeChild(div);
  }

}

function openSettings() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeSettings() {
  document.getElementById("mySidenav").style.width = "0";
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("editorArea");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
