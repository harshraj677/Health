# Vaccine Tracker Recommendation Application

## Overview
The Vaccine Tracker Recommendation Application is designed to help users manage their vaccination schedules and receive personalized vaccine recommendations based on their age and gender. The application features a user-friendly interface with a medical theme, ensuring an attractive and intuitive experience.

## Features
- **User Authentication**: Secure login and signup pages for user registration.
- **Home Page**: An attractive medical UI that serves as the main interface for navigation.
- **Vaccine Recommendations**: Personalized vaccine recommendations based on user input (age and gender).
- **Previous Reports**: Users can view their vaccination history and reports.
- **Contact Options**: Integration of WhatsApp, SMS, and call options for easy communication.

## Project Structure
```
vaccine-tracker-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   ├── Home
│   │   │   └── HomePage.tsx
│   │   ├── Recommendations
│   │   │   └── VaccineRecommendations.tsx
│   │   ├── Reports
│   │   │   └── PreviousReports.tsx
│   │   └── ContactOptions
│   │       ├── WhatsApp.tsx
│   │       ├── SMS.tsx
│   │       └── Call.tsx
│   ├── assets
│   │   └── styles
│   │       └── global.css
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd vaccine-tracker-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Technologies Used
- React
- TypeScript
- Material-UI (for UI components)
- CSS (for styling)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.