# routes/payment.js

This module handles the sensitive integration with the Fapshi payment gateway.

## Responsibility
- **Validation**: Ensures the requested payment amount meets the minimum requirements (100 XAF).
- **Communication**: Sends a secure POST request to Fapshi's live API endpoint.
- **Authentication**: Uses `apiuser` and `apikey` headers for secure access.
- **Response**: Returns the generated payment link to the frontend for redirection.

## Key Payload Fields
- `amount`: Numeric value of the total purchase.
- `externalId`: A unique ID generated for each transaction (using timestamps).
- `userId`: A placeholder ID to associate the payment with a session.
