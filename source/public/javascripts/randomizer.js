window.onload = function(){ 
	var controller = new DessertController(new DessertView, new DessertModel)
	controller.init()
}


function DessertController(dessertView,dessertModel) {
	this.display = dessertView
	this.model = dessertModel
	//doing this to access controller with ajax response object in the success callback
	self = this
}

DessertController.prototype = {
	init: function() {
		var randomizeButton = document.getElementById('randomizer')
		randomizeButton.addEventListener("click", self.requestDesserts)
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
		this.model.retrieveThumbnails()
	}
}

function DessertModel() {
	this.desserts = []
}

DessertModel.prototype = {
	updateDesserts: function(dessertArray) {
		this.desserts = dessertArray
	},
	retrieveThumbnails: function() {
		var thumbnails = []
		for (var i = 0; i < this.desserts.length; i++) {
			thumbnails.push(this.desserts[i].smallImageUrls[0])
		}
	}
}

function DessertView() {

}

DessertView.prototype = {

}