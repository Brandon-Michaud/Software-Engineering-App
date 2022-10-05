# Three A-Mangos : Software Engineering Project

This project was developed by Brandon Michaud, Phong Nguyen, and Anthony Balch with the purpose of being submitted as a final project for our software engineering class.

# How to Install

Clone the repository to your local machine using git. Once this is done, navigate to the client folder and run `npm install` to install dependencies on the client side. Then navigate to the server folder and run `npm install` once again to install dependencies on the server side.

# How to Run

After you have installed the project, navigate to the client and server folders in two separate terminals and run `npm start` in both. A react app should automatically open in your default browser. If not, you can access it by going to http://localhost:3000. The server runs on port 9000, but you should not have to ever directly access it.

# Instructions

Once you have the application running on both the server and client side, you can begin to use it as you wish.

## Sign Up

At the start you will not have an account, so you will need to sign up. To do this, click the sign up link in the top right corner. Fill out the form and press sign up to save your data to the database. You will not be logged in after submission, so you now need to log in with your credentials.

## Log In

To log in, click the log in link in the top right corner and fill out the form with the CORRECT information. Filling out the form incorrectly (e.g. giving a wrong email or password) will cause the application to generate an error and fail. Once you have your information put in, press the log in button to log in. You will not be redirected, so you will have to manually navigate to your desired page.

## Home

On the home page, you will be presented with a search bar. This search bar takes foods as an input and provides suggestions on what you might be looking for. You can click on one of these suggestions to autofill the text input, or you can type whatever you want. Once you have typed what you are searching for, press the enter key or click the search button to generate search results. Each search result will display the food name, nutrition statistics, the number of times it appears in the user's foods list if logged in, and a button to add it to the foods list. If you are not logged in and press the add food button, it will pop up an alert to indicate you need to sign in. If you are signed in and press the add food button, it will be added to your list of foods for the day. You can see results of this list of foods on the profile page.

## Profile

On the profile page, if you are not logged in, it will display a message saying you need to do so to access the feature. If you are logged in, you will see sliders and three columns: The left column is your current nutritional intake for the day, the middle column has all of the labels, and the right column is the recommended nutrional intake that custom tailored to your biometrics. The sliders control the breakdown of calories from macronutrients. It is up to the user to ensure the values add up to 100. From here you can view where you still need to improve on for the day to help inform nutrition decisions.

# Relevant Topics and Skills
- Node.js
- React.js
- Express.js
- MongoDB
- JavaScript
- API utilization
- HTML/CSS

# References

- https://www.healthline.com/nutrition/how-to-count-macros#benefits
- https://www.health.harvard.edu/staying-healthy/listing_of_vitamins
- https://fdc.nal.usda.gov/
