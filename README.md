# LabHub — Student Laboratory Compilation App

Developed by **Daisy Galope & Julius Galope** · **BSCS 4A**
Hands-on Activity (By Pair)

A multi-screen Expo SDK 58 / React Native application serving as the final UI and the master compilation hub for current and future laboratory activities.

Source repository: [disay04/React_Native_Project](https://github.com/disay04/React_Native_Project).

## Demonstration

[Watch or download the screen recording](docs/LabHub-BSCS4A-Demo.mp4).

The approximately two-minute recording demonstrates phone and tablet layouts, multi-screen navigation, the Settings dark/light toggle updating Home through React Context, and a local-state counter. It is a labelled browser preview of the React Native app.

## Run

    npm install
    npm start

Open the QR code with a compatible Expo Go client. Keep your phone and computer on the same Wi-Fi. Use npm run web for a browser preview.

## Screens

- Welcome: BSCS 4A Mobile Lab Hub branding and a Get Started button.
- Home: violet hero card, responsive six-tile menu and shared profile names in the footer.
- Lab: five runnable examples — Hello World, Counter (useState), Fetch Data (useEffect), Component & Props, and Global State (Context API). The existing Student Profile tool remains available below the list.
- Projects: the LabHub project plus an editable collection of project ideas.
- Settings: dark/light appearance, shared dashboard name, theme details, app information and developers.
- Notes: create and delete session notes.
- Calculator: basic arithmetic in entry order, decimal input, percentage, sign change, delete and clear.
- About / Pair Profile: project information, developer credits, course and editable shared names.

The reference-inspired indigo/violet palette supports light and dark appearances. Shared state updates Home, Settings and lab screens immediately.

## State and data

React Context holds theme/profile preferences and the session workspace. Names, preferences, notes and added projects reset after an app restart. Lab forms and the counter have local state; switching tabs preserves a mounted screen, while navigating Back out of it removes that screen.

The Fetch Data example makes a read-only request to JSONPlaceholder, a public sample API. It includes loading, retry, timeout and error states and cancels the request on unmount. It requires internet access; other demos work offline.

## Structure

- src/app/_layout.tsx: providers, welcome gate and root stack.
- src/app/(tabs)/: Home, Lab, Projects and Settings navigation.
- src/app/(tabs)/activities/: lab stack and student tools.
- screens/: screen implementations.
- components/: reusable UI, shared layout and bottom tabs.
- config/: branding and the activity catalog.
- context/: shared preferences and workspace.
- utils/ and tests/: calculator logic and automated checks.

Add future labs to config/activities.js and provide a route/screen in the activities stack. Non-route code stays outside src/app/.

## Verify

    npm run lint
    npm run typecheck
    npm test
    npx expo-doctor

Manual phone checks: Get Started; all four tabs; light/dark toggle in Settings; edit the dashboard name and both pair names and check the Home footer; all five lab examples; Student Profile typing/clear; add/delete notes and projects; calculator division by zero; Back navigation; keyboard visibility; narrow screen and larger system text.
