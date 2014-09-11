window.onload = function(){ 
	DessertRandomizer.addRandomizerListener()
}

DessertRandomizer = {
	addRandomizerListener: function(){
		var randomizeButton = document.getElementById('randomizer')
		randomizeButton.addEventListener("click", DessertRandomizer.requestDesserts)
	},
	requestDesserts: function(){
		$.ajax({type: 'GET',url: '/desserts',success: function(dessertJson){
			console.log(dessertJson)
		}})
	}
}