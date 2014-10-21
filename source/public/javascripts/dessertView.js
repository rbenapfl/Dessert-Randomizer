
function DessertView() {

}

DessertView.prototype = {
	setImgUrl: function(index,url) {
		var thumbHolder = document.getElementsByClassName('thumbs')[index]
		thumbHolder.src = url
	},
	showRecipeDetails: function(imgUrl,name,sourceUrl) {
		$('#images').hide()
		$('#randomizerButton').hide()
		$('#largeView').show()
		$('#largeImage')[0].src = imgUrl
		$('h2')[0].innerText = name
		$('#url')[0].href = sourceUrl
	}
}	