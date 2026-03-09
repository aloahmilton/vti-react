interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductsProps {
    products: Product[];
    onAddToCart: (p: Product) => void;
}

const Products = ({ products, onAddToCart }: ProductsProps) => {
    return (
        <div>
            <h2>Latest Products</h2>
            <div className="product-list">
                {products.map((p: Product) => (
                    <div key={p.id} className="product-item">
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>{p.price} XAF</p>
                        <button onClick={() => onAddToCart(p)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
