# expo-skoverlay

A lightweight Expo Module to display the native **SKOverlay** (App Store banner) on iOS.
This allows you to recommend other apps or App Clips directly within your application using the standard, trusted Apple UI.

![Platform iOS](https://img.shields.io/badge/platform-iOS-blue.svg)
![Expo](https://img.shields.io/badge/Expo-Modules-black.svg)

## Features

- 🚀 **Native Performance:** Uses Apple's `StoreKit` framework directly.
- 📱 **iOS Native UI:** Displays the trusted "Get" or "Open" banner users recognize.
- 🔧 **Expo Compatible:** Built with the modern Expo Modules API.
- 📍 **Flexible Positioning:** Supports standard bottom or raised bottom (for tab bars).

## Prerequisites

- **iOS 15.0+**
- **Expo SDK 50+**
- **Development Build:** This library contains native code. You cannot use it with "Expo Go". You must use a Development Build.

## Installation

```bash
npm install expo-skoverlay
```

```bash
npx expo prebuild
```

## Usage

```typescript
import { showSKOverlay } from "expo-skoverlay";

showSKOverlay("1234567890");
```

## API Reference

### `showSKOverlay(appIdentifier: string, position: Position = "bottom")`

Shows the SKOverlay App Clip banner.

#### Parameters

- `appIdentifier`: The iTunes Item Identifier (App Store ID)
- `position`: The position of the overlay (default: `bottom`)

#### Returns

A promise that resolves when the overlay is shown.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
