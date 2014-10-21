YummilyRequester = {
	getRecipeData: function(keys,recipeName,controller) {
		$.ajax({
			type: 'GET',
			url: 'http://api.yummly.com/v1/api/recipe/' + recipeName + '?_app_id=' + keys[0] + '&_app_key=' + keys[1],
			success: function(response){
				controller.showRecipeDetails(response)
			}
		})
	}
}