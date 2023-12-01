# Ethereum Wallet Dashboard

This web application is a React-based dashboard for managing Ethereum transactions and visualizing related data. It features seamless navigation, form input validation, and data fetching from an Ethereum-related API.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)

## Features
- **Home Page:** A creative landing page welcoming users with navigation links to Transaction and Data pages.
- **Transaction Page:** Form for inputting Ethereum wallet address and amount with validation checks. Data is submitted to and retrieved from Google Firestore.
- **Data Page:** Fetches posts related to Ethereum from an open-source API, filters posts by user ID, displays in a table, and visualizes data using a pie chart.
- **React Router Navigation:** Seamless navigation between Home, Transaction, and Data pages.

## Technologies Used
- React.js
- React Router
- Axios for API requests
- Recharts for data visualization
- Bootstrap for styling

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

## Usage
1. Run the development server using `npm start`.
2. Access the application in your browser at `http://localhost:3000`.

## Folder Structure
/src
|-- components
| |-- Home.js
| |-- Transaction.js
| |-- Data.js
|-- App.js
|-- index.js


## Deployment
This project can be deployed using platforms like Vercel, Netlify, or any other hosting service that supports React applications.

## Acknowledgements
- This project utilizes open-source libraries and resources available in the React.js ecosystem.
- Credits to the developers of React, React Router, Axios, Recharts, and Bootstrap for their contributions.