# Frontend Explanation

The frontend is a React application built with Vite and TypeScript. It uses a component-based architecture for better maintainability.

## Directory Structure
- `src/App.tsx`: The main application component that manages state and routing.
- `src/components/`: Contains reusable page components.
  - `Home.tsx`: The home page component.
  - `Products.tsx`: The product catalog component.
  - `Cart.tsx`: The shopping cart summary component.
- `src/index.css`: Contains the global styles for the "hand-written" minimalist design.

## Components

### 1. `App.tsx`
- **State Management**: Manages `tab` (navigation), `products` (data from API), `cart` (user selection), and `loading` (API status).
- **Navigation**: Implements a simple button-based tab system to switch between 'Home' and 'Product' views.
- **Data Fetching**: Fetches the product list once on application load.
- **Payment Logic**: Orchestrates the checkout process by calling the backend `/pay` endpoint.

### 2. `Home.tsx` (Home Tab)
- Displays a welcoming hero section.
- Lists 3 "Featured Products" passed down from `App.tsx`.
- Includes informational sections about delivery, security, and support.
- Does not have a button to switch tabs, emphasizing the navigation bar.

### 3. `Products.tsx` (Product Tab)
- Displays the full list of products fetched from the backend.
- Each product can be added to the cart via a button.

### 4. `Cart.tsx`
- A shared component that appears on both tabs if the cart is not empty.
- Shows the items currently in the cart and the total amount.
- Handles the "Checkout" button which triggers the payment flow.

### 5. `index.css`
- Defines the visual identity of the store.
- Uses custom CSS variables for colors and fonts.
- Implements a clean, minimalist design with responsive grids for product listing.
