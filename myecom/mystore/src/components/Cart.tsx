interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartProps {
    cart: Product[];
    onCheckout: () => void;
    loading: boolean;
}

const Cart = ({ cart, onCheckout, loading }: CartProps) => {
    if (cart.length === 0) return null;

    return (
        <div className="cart-summary">
            <h2>Cart Items ({cart.length})</h2>
            <ul>
                {cart.map((item: Product, idx: number) => (
                    <li key={idx}>
                        {item.name} - {item.price} XAF
                    </li>
                ))}
            </ul>
            <p>
                <strong>
                    Total: {cart.reduce((a: number, b: Product) => a + b.price, 0)} XAF
                </strong>
            </p>
            <button className="checkout-btn" onClick={onCheckout} disabled={loading}>
                {loading ? 'Processing...' : 'Checkout'}
            </button>
        </div>
    );
};

export default Cart;
