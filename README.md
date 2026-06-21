# 🌦️ Weather App

A modern Weather Application built with **React**, **Redux**, **Redux Thunk**, **Tailwind CSS**, and the **OpenWeather API**.

## 🚀 Features

* Search weather by city name
* Get current weather information
* Display temperature, humidity, and wind speed
* Show weather condition icons
* Display "Feels Like" temperature
* Responsive UI
* Redux state management
* Async API calls using Redux Thunk
* Error handling for invalid city names

## 🛠️ Technologies Used

* React
* Redux
* Redux Thunk
* Tailwind CSS
* Axios
* OpenWeather API
* React Icons

## 📸 Screenshots

Add your application screenshots here.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

Navigate to the project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Get your free API key from OpenWeather.

## 📂 Project Structure

```text
src
├── components
├── redux
│   ├── actions
│   ├── reducers
│   └── store.js
├── constants
├── pages
├── App.jsx
└── main.jsx
```

## ⚙️ Redux Flow

```text
User Action
     ↓
Dispatch Action
     ↓
Redux Thunk
     ↓
API Request
     ↓
Reducer Updates State
     ↓
UI Re-renders
```

## 🌐 API Used

OpenWeather Current Weather API

Example Endpoint:

```text
https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY
```

## 🎯 Future Improvements

* 5-Day Weather Forecast
* Weather by Current Location
* Dark Mode
* Animated Weather Icons
* Search History
* Hourly Forecast

## 👨‍💻 Author

Tanmoy Bhowmik

Frontend Developer | React Developer

```
```
