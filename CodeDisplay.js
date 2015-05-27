window.addEventListener("load", beginCodeDisplay);

var indentLevels = [];

var table = createTable();
table.className = "table";

function beginCodeDisplay() {
    document.body.appendChild(table);
    var content = document.getElementsByTagName("pre")[0];
    beginFillingTable(content);
}

function createTable() {
    return document.createElement("table");
}

function display(body) {

}

function beginFillingTable(content) {
    var lines = getLines(content.innerHTML);
    for(var i = 0; i < lines.length; i++) {
 	var row = table.insertRow(i);
 	var firstCell = row.insertCell(0);
 	firstCell.innerHTML = i;
 	var secondCell = row.insertCell(1);
 	secondCell.innerHTML = lines[i];
     }

}

function getLines(content) {
    var ArrLines = [];
    var startLine = 0;
    while(startLine != -1) {
		var newIndex = getFollowingIndex(startLine, content);
	  	if(newIndex != -1) {
		    var endLine = newIndex - startLine;
		    ArrLines.push(getFormatedLine(content.substr(startLine, endLine)));
	  	}
	  	startLine = newIndex;
     }

    return ArrLines;
}

function getFormatedLine(line) {
    line = line.replace("\\tab\\", "&nbsp;&nbsp;&nbsp;&nbsp;");
    return line;
}

function getFollowingIndex(start, content) {
    var index = -1;
    if(start < content.length) {
	index = content.indexOf("\n", start);
    }
    if(index != -1) {
	index++;
    }
    return index;
}