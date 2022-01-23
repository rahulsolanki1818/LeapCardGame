# LeapCardGame App

A `react-native` CardGame app is memory game app. In which user has to select two cards randomly with same alphabets written on it.

### How it works

![](https://github.com/rahulsolanki1818/LeapCardGame/blob/main/leapCardGame.gif)

### System requirements

- Node
- npm OR yarn
- CocoaPods
- XCode
- AndroidStudio

For setting up the whole environment for react-native apps, check out [this](https://reactnative.dev/docs/environment-setup).

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/rahulsolanki1818/LeapCardGame.git
$ cd LeapCardGame
$ yarn
```

### Run Apps

Run iOS

```sh
$ npx pod-install ios
$ yarn ios
```

Run Android

- Open android emulator
- Run the following command

```sh
$ yarn android
```

`Note`: In case of any error while running the anroid verison of the app, build the app from the Android Studio and then run it on the emulator.

### Structure

```
src/
.
├── App.tsx
├── Router
│   └── AppNavigator.tsx
├── assets
│   └── images
│       ├── gradient.jpg
│       ├── indext.ts
│       └── texture.png
├── components
│   ├── CardView.tsx
│   ├── ScoreStepsHeader.tsx
│   ├── ScoreView.tsx
│   └── index.tsx
├── features
│   ├── Home
│   │   └── index.tsx
│   └── index.tsx
├── types
│   └── GameTypes.d.ts
└── utils
    └── index.ts

8 directories, 13 files
```

- `src/App.tsx`: It contains app level implemenations which should be used at once in whole application lifecycle like AppNavigation.
- `src/components`: It contains all the reusable smaller unit of UI known as component.
- `src/assets`: It contains all assets like `fonts`, `images` etc used in the app.
- `src/router`: It contains them main `AppNavigator` which contains app's different screens with their respective `navigators`.
- `src/features`: It contains all the app's screens with their dependant components/data.
- `src/types`: It contains all the `interfaces`/`types` of typescript used in the app.
- `src/utils`: It contains main 2 functions which helps to generate `alphabets` randomly for `4x4` configuration.

### Development

- `Project Structure`: Used module wise directory structure as this makes code more readable.
- `Functional component`: It uses a functional component as it has better readability and performance than Class components.
- `Styling`: Used stylesheet to avoid the inline styles as those are getting created in every re-render.

### Improvements

- Unit test cases for utility functions.
- UI improvements.
- React Navigation for navigating between multiple screens if exist in future.
