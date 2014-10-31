Dessert-Randomizer
==================

#####Node JS app that gives users random desserts and recipes in case they cant pick themselves!
######This is my first time coding a node/express application.  I learned how to handle routes in express, pass in a mongo database collection as a route resource, use a lightweight library for client side http requests, store environment variables and pass to routes as locals, use Jade for html templating and basically how to structure files in a scalable way.
######I am very comfortble with my client side Javascript, and I decided to use an MVC strcture because I had an array of Jsons that needed to be stored on the client in case the user wanted details for a specific dessert (clicking on it).  One of my controller functions does do a model job in that regard but the functionality of the website didn't require it to be saved for later.
####Put that json parsing in the model and create two additional function calls in the controller instead!!!(Says the MVC purists)
![controllerfunction](http://i.imgur.com/J0AM8aU.jpg)
######Then again I did assign listeners by having dom selectors in the controller too:
![controllertop](http://i.imgur.com/VPib8bc.jpg)
######Speaking of which, self is used to reference my controller because that 2nd listener is on a class of dom elements and I need to pass the specific one clicked on to a function call in my controller. So, this is my controller and this is something else after click I can give this to that this if it's self.  Despite already cheating on that problem I put my Ajax calls in their own files and modules to make it easier to structure.  My controller passes itself to those for the asychronous callbacks making my route and API requests organized and painless.
![ajaxexample](http://i.imgur.com/DFTUkZM.jpg)
######Thoughts on using Yummily API: at first I thought doing a dessert search the first call would give me recipe directions and some nice photos.  It turned out that they never return recipe directions, the photos are smaller overall than I would like, and I needed to do a secondary API call just to get the larger photo and the source URL for the recipe in order to give the users a link for how to make it.  I wouldn't use Yumily API again if I was dealing with Food and/or recipes because of this.  However, the documentation is pretty easy to follow and they provide a lot of nutrition data if you are looking for that.
######The app performs extremely fast, the only holdup being loading the images.
###ID your html elements that you want to query on the client and use the most direct selector as much as possible!
![vanilla](http://i.imgur.com/G2RCH7F.jpg)
######That being said I was a bit lazy seeding my database and had a pretty non scaleable query because of that:
###Getting records starting at a random spot with default mongo IDs good thing it's only 900 records...
![badquery](http://i.imgur.com/InXpHE0.jpg)
###But the seeding was so easy! (should add my own IDs if i want to query for random ones later)
![seeding](http://i.imgur.com/pAe3zHC.jpg)
###View after randomizing desserts!
![desserts](http://i.imgur.com/Z4TNm5f.jpg)
###Vew after clicking on one of them for details:
![details](http://i.imgur.com/6nTGVrG.jpg)
