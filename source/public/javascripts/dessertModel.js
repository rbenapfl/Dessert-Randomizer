function DessertModel() {
	this.desserts = []
}

DessertModel.prototype = {
	updateDesserts: function(desserts) {
		this.desserts = desserts
	},
	retrieveThumbnails: function() {
		var thumbnails = []
		for (var i = 0; i < this.desserts.length; i++) {
			thumbnails.push(this.desserts[i].smallImageUrls[0])
		}
		return thumbnails
	},
	getDessertId: function(index) {
		return this.desserts[index].id
	}
}
