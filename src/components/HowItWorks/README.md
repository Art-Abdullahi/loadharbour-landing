# HowItWorks Component

A reusable React component that displays a step-by-step guide or process flow in an attractive and responsive layout.

## Features

- Responsive grid layout that adapts to different screen sizes
- Clean, modern design with hover effects
- Easily customizable through props and CSS modules
- Accessible markup with proper heading structure

## Installation

This component is part of the project's component library. No additional installation is required.

## Usage

```jsx
import React from 'react';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <HowItWorks>
      <div className="step">
        <div className="stepNumber">1</div>
        <h3>Sign Up</h3>
        <p>Create your account in just 30 seconds</p>
      </div>
      <div className="step">
        <div className="stepNumber">2</div>
        <h3>Set Up</h3>
        <p>Connect your data sources and configure your settings</p>
      </div>
      <div className="step">
        <div className="stepNumber">3</div>
        <h3>Get Insights</h3>
        <p>Start making data-driven decisions with our analytics</p>
      </div>
    </HowItWorks>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS class names to apply to the component |
| children | ReactNode | null | Custom step components to render inside the component |

## Styling

The component uses CSS Modules for styling. You can override the default styles by targeting the following classes in your own CSS:

- `.container` - The main container
- `.title` - The "How It Works" heading
- `.steps` - Container for the step items
- `.step` - Individual step container
- `.stepNumber` - The circular number indicator

## Accessibility

- Uses semantic HTML5 elements
- Proper heading hierarchy
- Sufficient color contrast
- Keyboard navigable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with polyfills)

## License

MIT
