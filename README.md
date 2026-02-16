# Meal DB
This project is a React app that fetches data from the Meal DB API. It displays a list of meal categories, and when a user clicks on a category, it shows a list of meals for that category. When a user clicks on a meal, it shows the details of the meal.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Features
- List of meal categories
- List of meals for a category
- Details of a meal

## Installation
- Clone the repository
- Run `npm install` to install the dependencies
- Run `npm start` to start the development server


## API Used
For Meal DB, I used the [TheMealDB API](https://www.themealdb.com/api.php) to fetch the data.

### List of Meal Categories
Meal Categories: (https://www.themealdb.com/api/json/v1/1/categories.php)

### List of Meals by Category
Meals by Category: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- example: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

### Details of a Meal
Meal Details : `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`
- example: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
