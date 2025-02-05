
# Credit Score Simulator SDK

## About

The **Credit Score Simulator SDK** is a powerful tool for simulating credit score scenarios in real-time. It allows users to interactively explore how different factors, such as credit utilization, payment history, and debt-to-income ratio, affect their credit score. This SDK can be embedded into any website or web application, whether it's built with **React**, **Vanilla JavaScript**, or other frameworks. The SDK is fully customizable, making it ideal for banks, fintech companies, or anyone needing a white-labeled credit score simulator.

### Features
- Interactive credit score simulation engine.
- Customizable theme to fit your brand.
- Easy integration with any web app (React, Vanilla JS, jQuery).
- Localization and dynamic theme configuration.
- Real-time visual feedback on how user actions affect their credit score.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [1. Embedding in Vanilla JS](#1-embedding-in-vanilla-js)
  - [2. Embedding in React](#2-embedding-in-react)
  - [3. Dynamic Theme Injection](#3-dynamic-theme-injection)
  - [4. Global Theme Configuration](#4-global-theme-configuration)
- [SDK API](#sdk-api)
- [Customization](#customization)
  - [Theme](#theme)
  - [Score Range](#score-range)
  - [Localization](#localization)
- [Code Structure](#code-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

### 1. Installing the SDK (via CDN or NPM)

You can either include the SDK via a CDN or install it as an NPM package.

#### **Using CDN** (For Vanilla JS or HTML Projects)
```html
<script src="https://your-cdn-url.com/credit-score-simulator-sdk.js"></script>
```

#### **Using NPM [TODO]** (For React or Node Projects)
```bash
npm install credit-score-simulator-sdk
```

---

## Usage

### 1. Embedding in Vanilla JS

To use the SDK in a **Vanilla JavaScript** project, you simply need to include the SDK in your HTML and initialize it with a `container` for rendering.

#### **index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Credit Score Simulator</title>
</head>
<body>
  <h1>Credit Score Simulator</h1>
  <div id="credit-score-simulator-container"></div>

  <!-- Include the SDK -->
  <script src="https://credit-score-simulator-sdk.vercel.app/credit-score-simulator-sdk.js"></script>

  <script>
    // Initialize the SDK using embedSimulator function
    embedSimulator({
      container: '#credit-score-simulator-container',
      theme: {
        colors: {
          primary: '#0D47A1',
          secondary: '#FFD600',
          backgroundColor: '#F1F5F9',
          textColor: '#1E293B',
          poor: '#EF4444',
          fair: '#F59E0B',
          good: '#10B981',
          veryGood: '#3B82F6',
          excellent: '#22C55E',
        }
      },
    });
  </script>

</body>
</html>
```

### 2. Embedding in React

For **React apps**, use the SDK component and pass in the desired theme as **props**.

#### **App.tsx**
```tsx
import React from 'react';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    backgroundColor: string;
    textColor: string;
    accent: string;
    poor: string;
    fair: string;
    good: string;
    veryGood: string;
    excellent: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  scoreRanges: {
    poor: [number, number];
    fair: [number, number];
    good: [number, number];
    veryGood: [number, number];
    excellent: [number, number];
  };
}

interface CreditScoreSimulatorProps {
  theme: Theme;
}

const CreditScoreSimulator: React.FC<CreditScoreSimulatorProps> = ({ theme }) => {
  React.useEffect(() => {
    embedSimulator({
      container: '#credit-score-simulator-container',
      theme,
    });
  }, [theme]);

  return <div id="credit-score-simulator-container"></div>;
};

const App: React.FC = () => {
  const theme = {
    colors: {
      primaryColor: '#0D47A1',
      secondaryColor: '#FFD600',
      backgroundColor: '#F1F5F9',
      textColor: '#1E293B',
      poor: '#EF4444',
      fair: '#F59E0B',
      good: '#10B981',
      veryGood: '#3B82F6',
      excellent: '#22C55E',
    }
  };

  return (
    <div className="App">
      <h1>Credit Score Simulator</h1>
      <CreditScoreSimulator theme={theme} />
    </div>
  );
};

export default App;
```

### 3. Dynamic Theme Injection

If you want to dynamically inject the theme at runtime, you can use the global `window.setTheme()` function to set the theme and then initialize the SDK.

#### **index.html**
```html
<script>
  window.setTheme({
    colors: {
      primary: '#0D47A1',
      secondary: '#FFD600',
      backgroundColor: '#F1F5F9',
      textColor: '#1E293B',
      poor: '#EF4444',
      fair: '#F59E0B',
      good: '#10B981',
      veryGood: '#3B82F6',
      excellent: '#22C55E',
    }
  });

  embedSimulator({
    container: '#credit-score-simulator-container',
  });
</script>
```

### 4. Global Theme Configuration (For Dynamic Apps)

The SDK supports a global function `window.setTheme()` which can be used to change the theme dynamically, allowing consumers to modify the theme before the SDK is initialized.

#### **Setting the Theme Globally**
```js
window.setTheme(
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    backgroundColor: '#f8f9fa',
    textColor: '#212529',
  }
);
```

---

## SDK API

### `embedSimulator(options)`
This is the main function of the SDK. It accepts an object with the following configuration:

#### Configuration Options:
- `container`: (String) **Required**. The DOM element (selector) where the SDK will be rendered.
- `theme`: (Object) **Optional**. A custom theme object to customize the look and feel of the simulator.

#### Example:
```javascript
embedSimulator({
  container: '#credit-score-simulator-container',
  theme: {
    primaryColor: '#0D47A1',
    secondaryColor: '#FFD600',
    backgroundColor: '#F1F5F9',
    textColor: '#1E293B',
    scoreRanges: {
      poor: '#EF4444',
      fair: '#F59E0B',
      good: '#10B981',
      veryGood: '#3B82F6',
      excellent: '#22C55E',
    },
  },
});
```

---

## Customization

### Theme
The theme can be customized by setting values for the following properties:

1. **Colors**: 
   - `primary`: The primary color used for key interactive elements like buttons, sliders, etc.
   - `secondary`: The secondary color used for accents or secondary elements.
   - `backgroundColor`: Background color for the entire simulator.
   - `textColor`: Text color used for the main content (e.g., labels, headings).
   - `accent`: Color used for highlight effects or secondary actions.
   - **Score Ranges**:
     - `poor`: Color for a poor credit score range.
     - `fair`: Color for a fair credit score range.
     - `good`: Color for a good credit score range.
     - `veryGood`: Color for a very good credit score range.
     - `excellent`: Color for an excellent credit score range.

2. **Fonts**: 
   - `body`: The font used for regular text.
   - `heading`: The font used for headings or titles.

3. **Score Ranges**: 
   - Defines the range of values for each credit score category (e.g., poor, fair, etc.). It uses a tuple `[min, max]` where `min` is the lower limit of the range, and `max` is the upper limit.

### Example Theme Customization

Below is an example of how the theme customization object might look, with an explanation of how it would be used in the SDK:

#### Example:

```typescript
const customTheme: Theme = {
  colors: {
    primary: '#0066FF',  // Blue used for primary elements
    secondary: '#FFCC00', // Yellow for secondary accents
    backgroundColor: '#F4F4F4', // Light gray background
    textColor: '#333333',  // Dark text color for readability
    accent: '#FF5733',  // Orange accent color for highlights or buttons
    poor: '#FF0000',  // Red color for poor credit score
    fair: '#FFA500',  // Orange color for fair credit score
    good: '#32CD32',  // Green color for good credit score
    veryGood: '#1E90FF', // Blue color for very good credit score
    excellent: '#008000',  // Dark green for excellent credit score
  },
  fonts: {
    body: '"Arial", sans-serif',  // Use Arial font for body text
    heading: '"Helvetica Neue", sans-serif',  // Use Helvetica for headings
  },
  scoreRanges: {
    poor: [300, 579],  // Poor credit score range between 300 and 579
    fair: [580, 669],  // Fair credit score range between 580 and 669
    good: [670, 739],  // Good credit score range between 670 and 739
    veryGood: [740, 799],  // Very Good credit score range between 740 and 799
    excellent: [800, 850],  // Excellent credit score range between 800 and 850
  },
};
```

### Localization
To localize the simulator, you can pass locale-specific formats for numbers, dates, and currencies. You can set these values globally using `window.setTheme()`.

---

## Code Structure

The SDK is structured into the following key directories:

```
/src
  /components           # Contains all React components (for React users)
  /styles               # Tailwind CSS styles and other custom styles
  /utils                # Utility functions for simulation logic
  /hooks                # Custom React hooks for state management
  index.tsx             # Main entry file for React integration
  index.js              # Main entry file for Vanilla JS integration
  index.html            # Example HTML file for quick start

/build                  # Output directory for build
```

---

## Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm start
   ```

3. **Create Production Build**:
   ```bash
   npm run build
   ```

This will create a `dist` folder containing the optimized SDK files (`bundle.js`, `index.html`, `license.txt`).

---

## Contributing

We welcome contributions to improve the **Credit Score Simulator SDK**. Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to your forked repository (`git push origin feature/your-feature-name`).
5. Open a Pull Request with a detailed description of your changes.

---

## License

The **Credit Score Simulator SDK** is licensed under the [MIT License](LICENSE).
