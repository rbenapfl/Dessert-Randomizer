window.onload = function(){ 
	DessertRandomizer.init()
}

DessertRandomizer = {
	init: function(){
		DessertRandomizer.addRandomizerListener()
	},
	addRandomizerListener: function(){
		var randomizeButton = document.getElementById('randomizer')
		randomizeButton.addEventListener("click", DessertRandomizer.requestDesserts)
	},
	requestDesserts: function(){
		console.log($('#randomizer'))
	}
}