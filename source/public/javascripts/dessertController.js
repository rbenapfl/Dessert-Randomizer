function DessertController(dessertView,dessertModel) {
	this.display = dessertView
	this.model = dessertModel
	//this helps me on line 12 since i need the controller to be passed the specific dom element clicked on
	self = this
	this.activeDessertId = 0
}

DessertController.prototype = {
	init: function() {
		$('#randomizer').click(function() {self.requestDesserts()})
		$('.thumbs').click(function() {self.accessDessertInfo(this)})
		$('#back').click(function() {self.goBackToDesserts()})
	},
	requestDesserts: function() {
		NodeServerRequester.getDesserts(self)
	},
	setDesserts: function(desserts) {
		if(  $("#images").is(":visible") == false ) {
			this.display.showImages()
		}
		this.model.updateDesserts(desserts)
		var thumbnailUrls = this.model.retrieveThumbnails()
		for (var i = 0; i < thumbnailUrls.length; i++) {
			this.display.setImgUrl(i,thumbnailUrls[i])
		}
	},
	accessDessertInfo: function(imageClicked) {
		this.activeDessertId = imageClicked.getAttribute('id')
		NodeServerRequester.getKeys(self)
	},
	requestYummilySearch: function(keys) {
		var dessertName = this.model.getDessertId(this.activeDessertId-1)
		YummilyRequester.getRecipeData(keys,dessertName,self)
	},
	showRecipeDetails: function(recipeData) {
		var largeImageUrl = recipeData.images[0].hostedLargeUrl
		var recipeName = recipeData.name
		var recipeSource = recipeData.source.sourceRecipeUrl
		this.display.showRecipeDetails(largeImageUrl,recipeName,recipeSource)
	},
	goBackToDesserts: function() {
		this.display.goBackToDesserts()
	}
}