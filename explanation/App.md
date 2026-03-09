# App.tsx Component

`App.tsx` is the central hub of the React application. It manages the global state and coordinates between different page components.

## Responsibility
- **State Provider**: Holds the state for the current active tab, the full product list, the user's cart, and loading indicators.
- **Routing**: Implements a simple conditional rendering logic to switch between 'Home' and 'Product' views based on the `tab` state.
- **API Orchestrator**: 
    - Fetches product data from the backend `GET /api/products` endpoint on initial load.
    - Triggers the payment process by calling the backend `POST /pay` endpoint.

## Key Functions
- `useEffect`: Triggers the initial product fetch.
- `addToCart(p)`: Updates the cart state by appending a new product.
- `checkout()`: Calculates the total price and handles the asynchronous interaction with the backend payment route.
