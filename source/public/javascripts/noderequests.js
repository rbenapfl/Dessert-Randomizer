NodeServerRequester = {
	getDesserts: function(controller) {
		$.ajax({
			type: 'GET',
			url: '/desserts',
			success: function(response){
				controller.setDesserts(response)
			}
		})
	},
	getKeys: function(controller) {
			$.ajax({
			type: 'GET',
			url: '/yummilyaccess',
			success: function(response){
				controller.requestYummilySearch(response)
			}
		})
	}
}