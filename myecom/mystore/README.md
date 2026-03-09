. Project Architecture (Teaching Version)
myecom/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │     └── payment.js
│   └── products.json
│
└── mystore/
    ├── src/
    │   ├── App.tsx
    │   ├── pages/
    │   │     ├── Home.tsx
    │   │     └── Checkout.tsx
    │   │
    │   ├── components/
    │   │     ├── Navbar.tsx
    │   │     ├── ProductCard.tsx
    │   │     ├── Cart.tsx
    │   │     └── TimerBanner.tsx
    │   │
    │   ├── hooks/
    │   │     └── useCart.ts
    │   │
    │   └── styles/
    │         └── shop.css