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
```

## Backend: Auth and Databases

Backend is handled through Appwrite, an open-source platform that seamlessly integrates with modern technologies and frameworks

### Auth

Auth is enabled by default after creating a project

```javascript
import { Client, Account, ID } from "react-native-appwrite";

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  const newAccount = await account.create(
    ID.unique(),
    email,
    password,
    username
  );

  if (!newAccount) throw Error;

  await signIn(email, password);

  const newUser = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    ID.unique(),
    {
      accountId: newAccount.$id,
      username,
      email,
    }
  );

  return newUser;
};

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw Error;
  }
}
```

### Database

Set up a database inside your Appwrite project. Then create the needed collections, ie users and videos for this app.
For each collection, you need to create attributes (similar to a schema). For each collection, in settings, you need to enable permissions.

```javascript
const newUser = await databases.createDocument(
  appwriteConfig.databaseId,
  appwriteConfig.userCollectionId,
  ID.unique(),
  {
    accountId: newAccount.$id,
    username,
    email,
  }
);
```

```javascript
const currentLoggedInUser = await account.get();
const currentUser = await databases.listDocuments(
  appwriteConfig.databaseId,
  appwriteConfig.userCollectionId,
  [Query.equal("accountId", currentLoggedInUser.$id)]
);
```

### Storage

Create a bucket, give it a name and set permissions
