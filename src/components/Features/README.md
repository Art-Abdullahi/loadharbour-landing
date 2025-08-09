# Features Component

This component showcases the key features of the LoadHarbour platform in an engaging and visually appealing way.

## Structure

```
Features/
├── index.js          # Main component file
├── icons.js          # SVG icons used in the features
└── README.md         # This documentation
```

## Icons

The `icons.js` file contains the following SVG icons:

- `DispatchIcon`: Lightning bolt icon for dispatch-related features
- `InvoiceIcon`: Document icon for invoicing features
- `ComplianceIcon`: Shield check icon for compliance features
- `AnalyticsIcon`: Chart bar icon for analytics features
- `DocumentIcon`: Document text icon for documentation features
- `SupportIcon`: Lifebuoy icon for support features

## Usage

Import and use the icons in your component:

```jsx
import { DispatchIcon, InvoiceIcon } from './icons';

// In your component
<DispatchIcon className="h-6 w-6 text-brand-blue" />
```

## Props

All icons accept standard SVG props and can be styled using Tailwind classes or inline styles.

## Styling

Icons are styled to be responsive and can be customized using Tailwind's utility classes or by passing custom styles via the `className` prop.
