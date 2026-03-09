# Products.tsx Component

The `Products` component handles the full catalog display of the store.

## Responsibility
- **Layout**: Renders a responsive grid of all available products.
- **Interactive**: Allows users to view product images, names, prices, and add them to their shopping cart.

## Props
- `products`: The full array of product objects fetched from the API.
- `onAddToCart`: A callback function to update the global cart state in `App.tsx`.
