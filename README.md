# 14er Hiking Frontend

This project is the frontend for the 14er Hiking app, designed to help hikers plan and track their hikes on the 14,000-foot mountains. It's built with React Native and utilizes Redux for state management, along with several other libraries to enhance the user experience.

## Features

- **Font Loading**: Custom fonts like OpenSans and RobotoSlab are loaded asynchronously to ensure that the app's typography is consistent across different devices.
- **Splash Screen**: A splash screen is displayed while resources are loading, improving the user experience during the app's startup.
- **Navigation**: Utilizes `react-navigation` for navigating between different screens within the app.
- **State Management**: Uses Redux Toolkit for state management, with services like `hike.service`, `mountain.service`, `routes.service`, and `user.service` to manage data related to hikes, mountains, routes, and users respectively.
- **Theming**: Integrates with `react-native-paper` for theming and material design components, with a custom theme defined in `App.tsx`.

## Getting Started

To get started with the 14er Hiking Frontend, follow these steps:

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   ```


2. **Install dependencies**
Navigate to the project directory and run:

```sh
npm install
```
Start the project
```sh
npm run
```
This will start the Metro bundler and open up a development server.


3. **Open the app in a simulator or physical device**

You can open the app in an iOS simulator, Android emulator, or directly on a physical device using Expo.

## Project Structure
**App.tsx**: The entry point of the application.
**src/**: Contains the source code for the application, including components, navigation, screens, state management, and utilities.
**assets/**: Contains static assets like fonts and images.
***.idea/**: Project settings for JetBrains IDEs, including code style configurations.
***babel.config.js, tsconfig.json**: Configuration files for Babel and TypeScript.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
