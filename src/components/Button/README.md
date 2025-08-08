# Button Component

A reusable button component styled with Tailwind CSS.

## Usage
```jsx
import Button from '../components/Button';

<Button onClick={handleClick} className="bg-green-500">Click Me</Button>
```

## Props
- `children`: Button label (required)
- `type`: Button type (`button`, `submit`, `reset`)
- `className`: Additional Tailwind classes
- `onClick`: Click handler
