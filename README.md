# Renaissance Faire

[Renaissance Faire]( https://ancarenfaire.web.app/)

## Description
Calling all knights and dames, Renaissance Faire time is upon us! If you want the most impressive "carouse" in your town, be sure to engage the services of this Renaissance Faire planning business. "Prithee, sit you down and have a laugh!"  

## Individual Contribution
My individual role in the project included:
* Completing the READ feature for the Events collection.
* Adding a new page for viewing a single event's details. 
* Owning the Food collection for an event, which included completing the features for viewing the food on an event, adding new food items to an event, and deleting a food item from an event.
* Completing the READ and CREATE features for the Animals collection, which we added later on when a new team member joined our group. 
* Pair programming with Michele on calculating costs for each data collection in an event. 
* Allowing users to filter event data by price range. 
* Figuring out the big function with the Promise that pulled all the different data for an event at the same time. 

## Background
Our second and last group project in the Data-Driven Apps stage of our bootcamp program, the Renaissance Faire introduced a whole new twist. Our instructor shuffled the previous group projects among our cohort's teams, assigned each of the teams a whole new project they were unfamiliar with and assigned a second part of the overall project to the new team.  
This project allows the owners of a company that run Renaissance Fairs across the country to see the status of their fairs. They are able to see what food products, souvenirs, staff and shows are available at each fair. They are able to add, edit and delete information to the page when they are logged in.
We got to practice our skills with what we at NSS call "smash" functions, that is, functions that pull data from multiple collections simultaneously. I got to work on the big function that makes a Promise to get data from all these different collections at the same time, and was it exciting when I finally figured it out!!
Both an an individual level and as a team, this project really helped us realize how far we have come in the program. 

We had a new team member join us a few days into the project and immediately all rallied to create a new collection for here so that she can own her own piece of the project and practice the "smash" skills. We all contributed and did full CRUD on the new Animals collection is 1 1/2 days!

I got better at optimizing my code and learning how to refactor it to make it cleaner and mroe streamlined. An example of this was the function for claculating total costs for a given section on an event (food, staff, etc). 

Project instructions available in the Github group project here: https://github.com/nss-evening-cohort-11/nutshell-sithlords-wookies/issues/51.

## Screenshots
Dashboard
![Dashboard](./screenshots-nautilus/dashboard.png)

Destinations
![Destinations](./screenshots-nautilus/destinations.png)

Destinations for Authenticated User
![Destinations_User](./screenshots-nautilus/destinations_user.png)

Adding a New Destination
![Destination_Add](./screenshots-nautilus/destination_add.png)

Editing a Destination
![Destination_Edit](./screenshots-nautilus/destination_edit.png)

## Features
* All users can see the Dashboard and data collections the Nautilus Explorer tracks on its journey: Crew, Destinations, Environmental Readings, and Species. 
* Only authenticated users can manipulate the data - add new items and delete or edit existing items in any of the four collections of data. 
* Users can log in via Google.
* The webpage is fully branded. 

## Technologies Used
Axios API, Bootstrap, CSS, ES6 Modules, ESLint, Firebase, FontAwesome, FreeLogoDesign, Github, Google login authentication, HTML5, Javascript, jQuery, JSON, JSONLint, Lucidchart, moment.js, Moqups, Sass, Webpack

## Contributors
[Zachary Crumpton](https://github.com/ZacCrumpton)

[John Johnson](https://github.com/John-Ryan-Johnson)

[Michele Rawlins](https://github.com/Michele-Rawlins)

[Anca Simon](https://github.com/ancasimon)

## How To Run
1. Clone down this project.
1. Create your own `apiKeys.json` file using the template in the `apiKeys.example.json` file with your own Firebase keys.
1. Make sure you have http-server installed via npm. If not, get it [here](https://www.npmjs.com/package/http-server).
1. At the root of this project, run the following command: hs -p 9999.
1. In your browser, navigate to https://localhost:9999.

## Firebase Deployment
This project has been deployed with Firebase. 
You can access it [here](https://ancanautilus.web.app/). 

