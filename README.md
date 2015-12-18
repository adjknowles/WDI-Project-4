# WDI-Project-4 #

Fourth Project

Node.js and Angular.js Website

Hometown

The Idea:

- Everybody has a hometown or somewhere they know really well or call home.
- No-one knows your hometown like you do. 
- Of course there are already many websites out there, including large well-known ones, that probably tell you alot about your hometown, and alot that it has to offer.
- But you can't beat local knowledge, so this is why I came up with the idea of 'HomeTown'. A site where you can share all those little local gems that only you and other locals know about. Places that are 'off the beaten track' and little known to tourists.
- But of course, you can also share those popular ones as well. It's all about sharing your local knowledge with others.
- Then, when you are planning on visiting a new location, or even somewhere you have visited before and think you know pretty well, you can come to HomeTown and checkout that location and what it has to offer and see the recommendations that people have added.

Technologies used:

In this project I have used the following technologies:

- HTML5
- CSS3
- Javascript
- JQuery
- Node.js
- Angular.js
-Google Maps/Places
- Bootstrap
- MongoDB
- Express


Approach taken:

- Brainstormed some possible ideas
- Made a plan using the chosen idea
- Created a Trello board outlining what needed to be done, and depending on their importance, the order in which they needed to be executed.
- Produced an ERD diagram, mapping out the models and their relationships with one another.
- Created wireframes using Balsamiq, displaying how I imagined the website and its various pages to look.
- I then created a few test projects. After setting up the first test without Devise, I created the second with a User model using Devise and a scaffolded Instrument and Lesson models.
- Then I tested the relationships in the Rails console.
- Once the basics of this was all working as expected, I created the main project, replicating the models created in the test.
- I installed the Foundation gem and added some basic HTML structure and SCSS styling.
- After this I concentrated on getting all the associations to work correctly.
- Once the majority of the functionality was working, I installed the Ransack gem to allow me to add search features to my app.
- I then went back to the styling - using Foundation to make the app look as good as possible.


Challenges:

- One of the main challenges I had was implementing the Google Maps/Places API. This took up more of my time than I had expected. Implementing it within the recommendations controller was also a change from the last project.
- I chose to use Bootstrap for my front-end css framework, one that I haven't used in any depth before. This definitely had its PROS and CONS. Some parts were easy to work with, making changes relatively easy. However, other parts of it were incredibly hard to override or change.
-
-
-
-
-
-
-
-


If I had more time:

There are a number of features I would have liked to have added or take further

- I would have liked to add a calendar booking system - using the gem Bookable. Able to check the availability of the teacher when making a booking.
- Create user roles and permissions using the Rolify and CanCan gems.
- Search by Post Code - allowing you to find teachers closest to you.
- Having a map with the location of your nearest teachers.
- Added a photo uploader so that the users can upload their own image.
- Create an online portal for teachers and students to communicate inbetween lessons - including online chat, and an area for notes/recommendations.
- Add a rating/comments system to find the best teachers.
- Create an online payment system for lessons - so that no payment has to be made at the lesson itself.
- Add additional cities.
- Add additional information to the profile pages of the teachers to help the students to decide who to have lessons with.
- Refacter the code - make it dryer.

- Plans to branch out/spin-offs - such as:
  - Findr Plumber
  - Findr Gardener
  - Findr Window Cleaner
