Dessert-Randomizer
==================

#####Node JS app that gives users random desserts and recipes in case they can't pick themselves!
######This is my first time coding a node/express application.  I learned how to handle routes in express, pass in a mongo database collection as a route resource, use a lightweight library for client side http requests, store environment variables and pass to routes as locals, use Jade for html templating and basically how to structure files in a scalable way.
######I am very comfortble with my client side Javascript, and I decided to use an MVC strcture for the most part.
####Put that json parsing in the model and create two additional function calls in the controller instead!!!(Says the MVC purists)
![controllerfunction](http://i.imgur.com/J0AM8aU.jpg)
######I think assigning listeners in the most straightforward way possible in the controller is the way to go!
![controllertop](http://i.imgur.com/VPib8bc.jpg)
######I decided to use self to reference my controller because that 2nd listener is on a class of DOM elements and I need to pass the specific one clicked on to a function call in my controller. The specific DOM element would have to be referecened by "this" so my controller could still be called on the callback for this listener by doing this.
#####My controller passes itself to allow for asychronous callbacks in the route and API requests.  It is really organized to put those in their own modules too!
![ajaxexample](http://i.imgur.com/DFTUkZM.jpg)
######Thoughts on using Yummily API: at first I thought doing a dessert search the first call would give me recipe directions and some nice photos.  It turned out that they never return recipe directions, the photos are smaller overall than I would like, and I needed to do a secondary API call just to get the larger photo and the source URL for the recipe in order to give the users a link for how to make it.  I wouldn't use Yumily API again if I was dealing with Food and/or recipes because of this.  However, the documentation is pretty easy to follow and they provide a lot of nutrition data if you are looking for that.
######The app performs extremely fast, the only holdup being loading the images.
###ID your html elements that you want to query on the client and use the most direct selector as much as possible!
![vanilla](http://i.imgur.com/G2RCH7F.jpg)
###Getting records starting at a random spot with default mongo IDs good thing it's only 900 records...
![badquery](http://i.imgur.com/InXpHE0.jpg)
###The seeding was so easy thanks to MongoDB! I would have to assign indexed IDs if i knew I would be querying through a lot more records but I only used 900 so this is good.
![seeding](http://i.imgur.com/pAe3zHC.jpg)
###View after randomizing desserts!
![desserts](http://i.imgur.com/Z4TNm5f.jpg)
###Vew after clicking on one of them for details:
![details](http://i.imgur.com/6nTGVrG.jpg)
