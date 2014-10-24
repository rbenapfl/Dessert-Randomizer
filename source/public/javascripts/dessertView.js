
function DessertView() {

}

DessertView.prototype = {
	showImages: function() {
		$('#images').show()
	},
	setImgUrl: function(index,url) {
		var thumbHolder = document.getElementsByClassName('thumbs')[index]
		thumbHolder.src = url
	},
	showRecipeDetails: function(imgUrl,name,sourceUrl) {
		$('#images').hide()
		$('#randomizer').hide()
		$('#back').show()
		$('#largeView').show()
		document.getElementById('largeImage').src = imgUrl
		document.getElementById('recipeName').innerText = name
		document.getElementById('url').href = sourceUrl
	},
	goBackToDesserts: function() {
		$('#back').hide()
		$('#randomizer').show()
		$('#largeView').hide()
		$('#images').show()
	}
}	