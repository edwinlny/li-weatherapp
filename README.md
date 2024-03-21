#LI-Weather App

#Introduction

This is Edwin Leong's submission for the LI Engineering Take Home Coding Activity.

##Table of Contents

- Local Depedency Setup
- Local Repo Setup
- Optimizations
- Bonus Functionality

### Dependencies

- Required:
  - Git (https://git-scm.com)
  - npm (https://www.npmjs.com)

## Setup Steps

- 1. Copy github link (https://github.com/edwinlny/li-weatherapp.git)
- 2. Navigate to directory of your choice and run 'git clone https://github.com/edwinlny/li-weatherapp.git '
- 3. Navigate to directoy it was installed in. 'npm install' to install dependencies
- 4. Create .env file and add the following line - WEATHER_API_KEY=82ab54a9747d683a88066e0459b9976e (API key included only for ease of use)
- 5. 'npm run start' to start backend server
- 6. 'npm run client' to start client server

## Optimizations

- 1. Mobile formatting enhancement:
  - Evaluate and optimize the responsiveness of the mobile layout by implementing media queries and adjusting CSS styles to ensure a consistent and user-friendly experience across various screen sizes and devices.
- 2. Improve Weather Data Processing
  - Address the limitation of the current weather data processing, which relies on 3-hour intervals for min/max temperature calculations. Explore options such as: - Implementing advanced data parsing techniques to extract more granular temperature data. - Integration of a paid API key to access more accurate and detailed weather information.
- 3. Codebase Refinement and Optimization:

  - Review the transition from HTML to Tailwind CSS and identify opportunities to streamline the codebase.
  - Conduct a thorough code audit to identify and remove any unused or redundant code segments.
  - Implement best practices for code organization, such as modularization and component-based architecture, to enhance maintainability and scalability. i.e. adding convertTemperature to util folder.

  ## Bonus Functionality

  - Version control - Used feature branches, pr and release branches
