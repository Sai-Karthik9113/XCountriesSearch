# Country Search App

This React-based project allows users to search for and display information about countries. It fetches data from the REST Countries API and provides a user-friendly search interface with debounce functionality.

## Features
- **Dynamic Search**: Search for countries by name using a debounce mechanism for optimized performance.
- **Live Country Data**: Fetches country data, including flags and names, from the REST Countries API.
- **Responsive Grid Layout**: Displays country data in a visually appealing grid format.
- **Error Handling**: Ensures the app gracefully handles API fetch errors.

## Technologies Used
- **React**: For building the UI and managing state.
- **Axios**: For making HTTP requests to the REST Countries API.
- **CSS Modules**: For component-specific styling.
- **JavaScript**: For handling logic and state management.

## Components
1. **App**: The root component that fetches country data using Axios and passes it to the Navbar.
2. **Navbar**: Handles the search input and filters the country data based on user input.
3. **Card**: Displays country information (flag and name) in a grid layout.

## How the Search Works
- **Search Input**: Users type into a search bar to look for countries.
- **Debouncing**: Implements a 300ms delay before filtering data to optimize performance.
- **Filtered Data**: Displays the list of countries that match the search input.

## How to Run the Project Locally

1. Clone the repository:
   ```
   git clone https://github.com/Sai-Karthik9113/XCountriesSearch.git
   ```
2. Navigate to the project directory:
   ```

   cd country-search-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

## Screenshots

Below are screenshots showing the app in action:

- **On Page Load:** Initial view of the app displaying the countries grid.

![Search Countries][on page load]

- **Relevant Search:** The search bar in action with relevant country results.

![Search Countries][relevant search]

- **Search Result:** A filtered list of countries matching the search term, along with their flags.

![Search Countries][search result]

## Usage

1. Open the app in your browser.
2. Use the search bar to find countries by name.
3. View the country flag and name displayed dynamically in the grid.

## License
This project is licensed under the MIT License.

----------
This is a student project as part of a React course assignment.


[on page load]: src/assets/images/onLoadView.png
[relevant search]: src/assets/images/searchResult.png
[search result]: src/assets/images/searchResult2.png