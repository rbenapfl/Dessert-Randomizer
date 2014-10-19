window.onload = function(){ 
	var controller = new DessertController(new DessertView, new DessertModel)
	controller.init()
}


function DessertController(dessertView,dessertModel) {
	this.display = dessertView
	this.model = dessertModel
}

DessertController.prototype = {
	init: function() {
		var randomizeButton = document.getElementById('randomizer')
		randomizeButton.addEventListener("click", this.requestDesserts.bind(this))
	},
	requestDesserts: function() {
		$.ajax({type: 'GET',url: '/desserts',success: function(dessertJson){
			console.log(dessertJson)
		}})
	}
}

function DessertModel() {
	this.desserts = []
}

DessertModel.prototype = {

}

function DessertView() {

}

DessertView.prototype = {

}