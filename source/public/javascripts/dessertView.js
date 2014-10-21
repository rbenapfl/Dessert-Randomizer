
function DessertView() {

}

DessertView.prototype = {
	setImgUrl: function(index,url) {
		var thumbHolder = document.getElementsByClassName('thumbs')[index]
		thumbHolder.src = url
	}
}	