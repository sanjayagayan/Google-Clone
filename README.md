# Google Clone Engine

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview
This project is a **Google Clone Engine** developed using **Next.js** and the **Google Programmable Search Engine API**. It mimics the basic functionalities of Google Search, providing users with a familiar interface to search for information on the web.

## Features
- 🔍 Search functionality similar to Google
- 📄 Displays search results using Google Programmable Search Engine API
- 📱 Responsive design for mobile and desktop
- 🧼 Simple and clean user interface

## Technologies Used
- **Next.js**: A React framework for server-side rendering and static web applications.
- **Google Programmable Search Engine API**: Allows the integration of Google's search functionality into the application.

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/your-username/google-clone-engine.git
    cd google-clone-engine
    ```
2. Install dependencies
    ```bash
    npm install
    ```

3. Set up environment variables

    Create a `.env.local` file in the root directory and add the following variables:
    ```env
    NEXT_PUBLIC_API_KEY=your_google_api_key
    NEXT_PUBLIC_SEARCH_ENGINE_ID=your_search_engine_id
    ```

4. Run the development server
    ```bash
    npm run dev
    ```

5. Build for production
    ```bash
    npm run build
    npm start
    ```

## Configuration
To use the Google Programmable Search Engine API, you need to obtain an API key and a Search Engine ID:

### API Key
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (if you don't have one).
3. Enable the Custom Search JSON API for your project.
4. Create an API key under the credentials section.

### Search Engine ID
1. Go to the [Programmable Search Engine](https://programmablesearchengine.google.com/).
2. Create a new search engine.
3. Note down the Search Engine ID.

## Usage
1. Open your browser and go to `http://localhost:3000`.
2. Enter your search query in the search box.
3. Press Enter or click the search button to see the results.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch
    ```bash
    git push origin feature/your-feature
    ```
5. Create a new Pull Request.
