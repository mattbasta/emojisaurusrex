function copyToClipboard(text) {
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);

    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();

    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
}

document.body.addEventListener('click', function(e) {
	copyToClipboard(e.target.innerHTML);
}, true);
