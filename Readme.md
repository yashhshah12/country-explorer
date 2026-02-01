# 🌍 Country Explorer App

## Description
This project generates comprehensive Country Details using real-time data from an external API.
Each Country Card displays 5 key data points:
1. Flag Poster
2. Country Name
3. Region Name
4. Capital
5. Population

The app allows users to search for specific countries or filter them by region. When a user interacts with the search bar or dropdown, the grid dynamically updates to show only the relevant country or group of countries.

  ## 🚀 Features
  1. **Region Filter:** Filter countries by specific continents (e.g., Asia, Europe).
  2. **Search Functionality:** Real-time search by country name.
  3. **Dark / Light Mode:** Toggles UI themes for better user experience.
  4. **Responsive UI:** Fully responsive grid layout that adapts to mobile and desktop screens.
  5. **Live Data:** Fetches real-time country data from the Rest Countries API.
  6. Sticky Search Bar (Glassmorphism): The search and filter controls stick to the top of the screen while scrolling, using a backdrop-filter blur effect for a modern, translucent look.
  7. **Error Handling:** Displays a user-friendly error message when no countries match the search.
  8. **Modular Code:** Built with clean, ES6+ JavaScript using module architecture.

## 🛠️ Tech Stack
* **HTML5** (Semantic structure)
* **CSS3**
  * Grid Layout
  * CSS Variables (for Theming)
  * Responsive Design (Media Queries)
* **JavaScript (ES6+)**
  * DOM Manipulation
  * Fetch API & Async/Await
  * Error Handling (Try/Catch)
  * Debouncing (Performance Optimization)
  * Array Methods (Filter, ForEach)
  * ES Modules (`import`/`export`)

## 📂 Project Structure 
* **index.html** → Main UI structure (Header, Search, Grid).
* **style.css** → Controls responsive design, Dark/Light themes, and modern glassmorphism effects for the sticky header.
* **app.js** → Core logic: DOM manipulation, Event Listeners, Debounce, and Search/Filter logic.
* **api.js** → API handling: `fetch` requests, error management, and BASE URL configuration.

## ⚙️ How It Works

This project is a Single Page Application (SPA) that uses a straightforward "Load, Fetch, and Render" flow.

### 1. Initialization (The Startup)
* **HTML Loads:** The browser renders the static layout (Header, Search Bar, Filter Dropdown).
* **Script Execution:** The `app.js` file is loaded as a module.
* **Data Fetching:** An **IIFE** (Immediately Invoked Function Expression) runs automatically, calling `getCountryData()` from `api.js`.
* **State Storage:** The raw data is saved into a global master array called `countryarr`. This acts as our "Single Source of Truth."
* **Initial Render:** The full list is passed to `displayCountry()`, filling the grid.

### 2. The Logic: Search & Filter (Handling Conflicts)
The core logic lives in the `searchCard()` function. Unlike simple apps that handle search and filter separately, this app combines them to avoid bugs.
Every time the user types or selects a region, the app follows strict **"Funnel Logic"**:
1. **Reset:** Starts with a fresh copy of the master list (`countryarr`).
2. **Step 1 (Region Filter):** Checks the dropdown. If "Asia" is selected, the list is trimmed to only Asian countries.
3. **Step 2 (Search Query):** Checks the search bar and filters the remaining list based on text (e.g., "India").
4. **The Result:** The final filtered list is rendered to the DOM.

> **⚠️ Logic Note:** If you select Region: "Asia" and Search: "Germany", the result is **Empty**. This is intentional logic (Germany is not in Asia).

### 3. Performance Optimization (Debouncing)
To prevent the app from lagging during rapid typing:
* A custom `debounce()` function wraps the search input listener.
* **How it works:** The app waits **1000ms (1 second)** after the user *stops* typing before running the search logic. This minimizes unnecessary computations and DOM reflows.

### 4. DOM Rendering
To keep the page fast (60fps), we use `DocumentFragment`:
* We build the entire list of HTML cards off-screen inside a virtual container.
* We inject this container into the webpage in **one single action**.
* **Benefit:** Prevents browser reflows and makes the UI feel snappy.

### 5. Theme Switching
* `style.css` uses CSS Variables (`--bg`, `--card`, `--text`).
* The JS toggles a `.dark` class on the `<body>`.
* Variables automatically swap values, instantly updating the entire theme without complex JS logic.

## 🔗 API Used
* **Name:** REST Countries API
* **Base URL:** `https://restcountries.com/v3.1/all`
* **Fields Used:** `name`, `flags`, `region`, `population`, `capital`

## 🌐 Live Demo
[View Live Project](https://admirable-fox-4efe44.netlify.app/)

## 🧠 What I Learned
* **Advanced Array Methods:** Mastering `.filter()` and `.map()` for data manipulation.
* **Performance:** Implementing **Debouncing** to optimize event handling.
* **DOM Efficiency:** Using `DocumentFragment` for high-performance rendering.
* **Asynchronous JS:** Managing API states with `async/await` and `try/catch`.
* **Architecture:** Splitting code into modules (`api.js`, `app.js`) for maintainability.
* **CSS Variables:** Managing global themes efficiently.

## 👤 Author
**Yash Paresh Shah**

Actively learning Data Structures & Algorithms and Software Engineering principles.