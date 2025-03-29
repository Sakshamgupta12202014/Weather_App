# <<<<<<< HEAD

# React + Vite
# Tech stacks used 
## React.js
## HTML, CSS

# Setup Instructions

## Prerequisites

Before setting up the project, ensure you have the following installed:

1. **Node.js (LTS version recommended)** – [Download Here](https://nodejs.org/)  
   - Verify installation:  
     ```sh
     node -v
     ```

2. **npm (Package Manager, comes with Node.js)**  
   - Verify installation:  
     ```sh
     npm -v
     ```

3. **Git (to clone the repository, if applicable)** – [Download Here](https://git-scm.com/)  
   - Verify installation:  
     ```sh
     git --version
     ```

4. **Code Editor (Recommended)** – [VS Code](https://code.visualstudio.com/)

Make sure these are set up before proceeding with the installation steps.

##  Clone the Repository
git clone https://github.com/Sakshamgupta12202014/Weather_App.git
cd your-project

## Install Dependencies
npm install

## Run the Project
npm run dev
## Open in Browser
Visit [http://localhost:5173](http://localhost:5173/) in your browser.

## API Integration

This project uses the **OpenWeatherMap API** to fetch weather data. Follow the steps below to set up and use the API.

### 1. API Key & Authentication  
- You need an **API key** from OpenWeatherMap.  
- Get your API key by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).  
- Store the key securely in an `.env` file (never expose it in public repositories).

  Example `.env` file:  
  ```env
  REACT_APP_WEATHER_API_KEY=your_api_key_here
## API Endpoint
https://api.openweathermap.org

## Example API request to fetch weather data for London, UK:
https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=your_api_key

## Rate Limits
The API has request limits depending on the plan:
Free Plan: 60 requests per minute (1 request per second).
Higher limits are available for paid plans. Refer to OpenWeatherMap Pricing for details.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

> > > > > > > 8dd9d88 (first commit pushing project)
