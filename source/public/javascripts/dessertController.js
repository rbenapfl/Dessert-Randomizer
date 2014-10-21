function DessertController(dessertView,dessertModel) {
	this.display = dessertView
	this.model = dessertModel
	//doing this to access controller with ajax response object in the success callback
	self = this
}

DessertController.prototype = {
	init: function() {
		var randomizeButton = document.getElementById('randomizer')
		randomizeButton.addEventListener('click', self.requestDesserts)
	},
	requestDesserts: function() {
		$.ajax({
			type: 'GET',
			url: '/desserts',
			success: function(response){
				self.setDesserts(response)
			}
		})
	},
	setDesserts: function(dessertJson) {
		this.model.updateDesserts(dessertJson)
		var thumbnailUrls = this.model.retrieveThumbnails()
		for (var i = 0; i < thumbnailUrls.length; i++) {
			this.display.setImgUrl(i,thumbnailUrls[i])
		}
	}	
}