export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface HomeProps {
    featuredProducts: Product[];
    onAddToCart: (p: Product) => void;
}

const Home = ({ featuredProducts, onAddToCart }: HomeProps) => {
    return (
        <div className="home-section">
            <header className="home-hero">
                <h1>Welcome to MyStore</h1>
                <p>Your one-stop shop for premium accessories and gadgets.</p>
            </header>

            <section className="featured-section">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {featuredProducts.map((p) => (
                        <div key={p.id} className="product-item">
                            <img src={p.image} alt={p.name} />
                            <h3>{p.name}</h3>
                            <p>{p.price} XAF</p>
                            <button onClick={() => onAddToCart(p)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="info-sections">
                <div className="info-card">
                    <h3>Fast Delivery</h3>
                    <p>Get your products delivered in record time across the country.</p>
                </div>
                <div className="info-card">
                    <h3>Secure Payment</h3>
                    <p>Pay safely using Fapshi with multiple payment methods supported.</p>
                </div>
                <div className="info-card">
                    <h3>24/7 Support</h3>
                    <p>Our team is always here to help you with your purchases.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
