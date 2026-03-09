# Backend Explanation

The backend is built with Node.js and Express. It follows a modular structure where routes are separated into the `routes` directory.

## Directory Structure
- `server.js`: The main entry point of the application.
- `routes/`: Contains modular route handlers.
  - `products.js`: Handles all product-related requests.
  - `payment.js`: Handles Fapshi payment integration.
- `products.json`: A local JSON database containing the list of products.

## Components

### 1. `server.js`
- Sets up the Express application.
- Configures CORS to allow requests from the frontend.
- Mounts the modular routes under `/api/products` and `/pay`.
- Includes global error handlers to prevent the server from crashing on unexpected issues.
- Starts the server on port 5000.

### 2. `routes/products.js`
- **GET `/`**: Reads the `products.json` file and returns the list of products as JSON.
- Uses the `fs` and `path` modules to reliably access the local data.

### 3. `routes/payment.js`
- **POST `/`**: Handles payment initialization with Fapshi.
- Receives an `amount` from the frontend.
- Sends a request to `https://live.fapshi.com/initiate-pay` with the required headers (`apiuser`, `apikey`) and body (`amount`, `userId`, `externalId`, `message`).
- Returns the Fapshi payment link and transaction ID to the frontend.

### 4. `products.json`
- Contains an array of product objects.
- Each product has an `id`, `name`, `price`, and `image` (high-quality Unsplash URLs).
