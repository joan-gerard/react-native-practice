# Aora - A Video Sharing App

<div align="center">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=601f69" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=03265e" alt="nativewind" />
  </div>
</div>

## Get started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npx expo start -c
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Tools and Packages

### NativeWind

```bash
 npx install nativewind tailwindcss
```

NativeWind helps use the full power of Tailwind CSS in React Native

Follow [documentation](https://www.nativewind.dev/getting-started/expo-router) to set up NativeWind

## Expo API

### useFonts()

To load and use custom fonts

```javascript
import { useFonts } from "expo-font";

const [fontsLoaded, error] = useFonts({
  "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
});
```

### SplashScreen

Add this directive at the top of `@/_layout.tsx` to make the native splash screen (configured in app.json) remain visible until hideAsync is called.

```javascript
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();
```

Hide the splash screen once all fonts have been successfult loaded

```javascript
  useEffect(() => {
    if (error) throw Error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
```∫
