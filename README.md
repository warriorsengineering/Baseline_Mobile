# Welcome to Baseline Mobile

Baseline Mobile is a design and development system for the Golden State Warriors and its affiliates. This library includes a browsable collection of design patterns that can be used in any Golden State Warriors project.

Currently, this project is intended to explore and substantiate the viability of building Baseline Mobile.

# Tech Stack

Frontend Framework: [React Native](https://reactnative.dev) \
React Native Framework: [Expo](https://expo.dev/) \
Programming Language: [TypeScript](https://www.typescriptlang.org) \
Style System: [NativeWind](https://www.nativewind.dev) \
UI Component Library: Custom components largely built using React Native Core Components \
Navigation: [React Navigation](https://reactnative.dev/docs/navigation) \
Authentication: [Firebase Authentication](https://firebase.google.com/docs/auth)

# Getting Started

## Step 1: Install Package Dependencies

To install the dependencies, run the following command from the _root_ of the project:

```bash
npm install
```

## Step 2: Start the Server

```bash
npm start
```

## Step 3: Start the App

### Open iOS Simulator

```bash
i
```

### Open Android

```bash
a
```

### Open Expo Go Mobile App

Scan the QR code that appears.

# Modifying the App

Now that you have successfully run the app, let's modify it.

## App

The app can be modified by editing `App.tsx`.

## Components

Components can be modified by editing the files in the `src/components` directory.

## Screens

Screens can be modified by editing the files in the `src/screens` directory.

## Configurations and Declarations

Configuration files that are component or user experience specific (i.e., Authentication) reside in the `src/config` directory. All other configuration files (i.e., Metro and Tailwind) reside at the project's root.

There is a `baseline-mobile-env.d.ts` declaration file at the project's root that can be modified as needed.

---
**Enjoy Baseline Mobile! :partying_face:**