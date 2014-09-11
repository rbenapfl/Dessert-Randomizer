window.onload = function(){ 
	DessertRandomizer.init()
}

DessertRandomizer = {
	init:function(){
		DessertRandomizer.addRandomizerListener()
	},
	addRandomizerListener:function(){
		var randomizeButton = document.getElementById('randomizer')
		console.log(randomizeButton)
	}
}