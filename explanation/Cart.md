# Cart.tsx Component

The `Cart` component is a floating/persistent summary that appears whenever the user has items selected for purchase.

## Responsibility
- **Summary**: Displays a list of items currently in the cart with their individual prices.
- **Total Calculation**: Shows the cumulative total price of all items.
- **Checkout Trigger**: Provides the "Checkout" button that initiates the Fapshi payment redirection.

## Props
- `cart`: The array of products selected by the user.
- `onCheckout`: Function to trigger the payment API call.
- `loading`: Boolean state to disable the button during API processing.
