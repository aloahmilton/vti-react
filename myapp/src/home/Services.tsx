/**
 * Services Component
 * 
 * This page showcases the services offered and demonstrates React state
 * in a service/business context.
 * 
 * WHAT YOU'LL SEE:
 * - Service cards with pricing
 * - Interactive service selection
 * - Total cost calculation using state
 * 
 * @author Beginner React Developer
 * @description Service showcase page with React state
 */

import { useState } from 'react';
import './style.css';

/**
 * Services - A service showcase page
 * 
 * This component demonstrates:
 * - Service card display
 * - Selection state management
 * - Price calculation with state
 */
function Services() {
    // ============================================
    // STATE DECLARATION
    // ============================================
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    
    // Service data
    const services = [
        {
            id: 'web',
            name: 'Web Development',
            description: 'Build modern, responsive websites using React and other frameworks',
            price: 500,
            icon: '💻'
        },
        {
            id: 'mobile',
            name: 'Mobile App Development',
            description: 'Create cross-platform mobile applications for iOS and Android',
            price: 800,
            icon: '📱'
        },
        {
            id: 'design',
            name: 'UI/UX Design',
            description: 'Design beautiful and intuitive user interfaces',
            price: 300,
            icon: '🎨'
        },
        {
            id: 'consulting',
            name: 'Tech Consulting',
            description: 'Get expert advice on your technical projects and architecture',
            price: 150,
            icon: '💡'
        }
    ];

    // ============================================
    // EVENT HANDLERS
    // ============================================
    
    /**
     * selectService - Selects a service
     */
    const selectService = (serviceId: string) => {
        setSelectedService(serviceId);
    };

    /**
     * incrementQuantity - Increases quantity
     */
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    /**
     * decrementQuantity - Decreases quantity (minimum 1)
     */
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Calculate total
    const selectedServiceData = services.find(s => s.id === selectedService);
    const total = selectedServiceData ? selectedServiceData.price * quantity : 0;

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">🛠️ Our Services</h1>
                <p className="subtitle">
                    Explore our range of professional services
                </p>
            </header>

            {/* Introduction */}
            <section className="explanation">
                <h2 className="sectionTitle">What We Offer</h2>
                <p className="text">
                    We provide a wide range of technology services to help your business grow.
                    Select a service below to learn more and get a custom quote.
                </p>
            </section>

            {/* Services Grid */}
            <section className="servicesGrid">
                <h2 className="sectionTitle">Available Services</h2>
                <div className="cardsContainer">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            className={`serviceCard ${selectedService === service.id ? 'selected' : ''}`}
                            onClick={() => selectService(service.id)}
                        >
                            <div className="serviceIcon">{service.icon}</div>
                            <h3 className="serviceName">{service.name}</h3>
                            <p className="serviceDescription">{service.description}</p>
                            <div className="servicePrice">Starting at ${service.price}</div>
                            <button className="selectButton">
                                {selectedService === service.id ? '✓ Selected' : 'Select'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote Calculator */}
            {selectedService && (
                <section className="quoteCalculator">
                    <h2 className="sectionTitle">Get a Quote</h2>
                    
                    <div className="calculatorContent">
                        <div className="selectedServiceInfo">
                            <h3>{selectedServiceData?.name}</h3>
                            <p>Unit Price: ${selectedServiceData?.price}</p>
                        </div>

                        <div className="quantityControl">
                            <label className="label">Quantity:</label>
                            <div className="quantityButtons">
                                <button 
                                    onClick={decrementQuantity} 
                                    className="button"
                                    disabled={quantity <= 1}
                                >
                                    ➖
                                </button>
                                <span className="quantityValue">{quantity}</span>
                                <button 
                                    onClick={incrementQuantity} 
                                    className="button"
                                >
                                    ➕
                                </button>
                            </div>
                        </div>

                        <div className="totalSection">
                            <div className="totalLabel">Total:</div>
                            <div className="totalValue">${total}</div>
                        </div>

                        <button className="button buttonPrimary buttonLarge">
                            Request Quote
                        </button>
                    </div>
                </section>
            )}

            {/* Why Choose Us */}
            <section className="whyChooseUs">
                <h2 className="sectionTitle">Why Choose Us?</h2>
                <div className="benefitsList">
                    <div className="benefit">
                        <div className="benefitIcon">🚀</div>
                        <h3>Fast Delivery</h3>
                        <p>We deliver projects on time, every time.</p>
                    </div>
                    <div className="benefit">
                        <div className="benefitIcon">🎯</div>
                        <h3>Quality Assured</h3>
                        <p>High-quality code and design guaranteed.</p>
                    </div>
                    <div className="benefit">
                        <div className="benefitIcon">💰</div>
                        <h3>Competitive Pricing</h3>
                        <p>Great value for your investment.</p>
                    </div>
                    <div className="benefit">
                        <div className="benefitIcon">�.support</div>
                        <h3>24/7 Support</h3>
                        <p>We're here to help anytime.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Ready to Get Started?</h2>
                <p>Contact us today for a free consultation!</p>
                <button className="button buttonPrimary">
                    Contact Us →
                </button>
            </section>
        </div>
    );
}

export default Services;
