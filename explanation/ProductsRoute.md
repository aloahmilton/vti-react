# routes/products.js

This module handles the retrieval of store items.

## Responsibility
- **Data Source**: Reads from the local `products.json` file.
- **Delivery**: Parses the JSON file and sends it as a response to the frontend.

## Endpoint
- **GET `/`**: Returns the array of products.
