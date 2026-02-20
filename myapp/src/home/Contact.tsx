/**
 * Contact Component
 * 
 * This page demonstrates a contact form using React state management.
 * 
 * WHAT YOU'LL SEE:
 * - A contact form with multiple input fields
 * - Form validation
 * - Form submission handling
 * - State management for form data
 * 
 * @author Beginner React Developer
 * @description Contact form page with React state
 */

import { useState } from 'react';
import './style.css';

/**
 * Contact - A contact form page
 * 
 * This component demonstrates:
 * - Form field state management
 * - Input validation
 * - Form submission
 */
function Contact() {
    // ============================================
    // STATE DECLARATION
    // ============================================
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // ============================================
    // EVENT HANDLERS
    // ============================================
    
    /**
     * handleInputChange - Updates form field state
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    /**
     * validateForm - Validates form fields
     */
    const validateForm = (): boolean => {
        const newErrors: {[key: string]: string} = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.subject) {
            newErrors.subject = 'Please select a subject';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * handleSubmit - Handles form submission
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate form submission
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setIsSubmitted(false);
            }, 3000);
        }
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="container">
            {/* Page Header */}
            <header className="header">
                <h1 className="title">📧 Contact Us</h1>
                <p className="subtitle">
                    We'd love to hear from you! Send us a message.
                </p>
            </header>

            {/* Contact Info */}
            <section className="contactInfo">
                <div className="infoCard">
                    <div className="infoIcon">📍</div>
                    <h3>Address</h3>
                    <p>123 Tech Street<br />San Francisco, CA 94105</p>
                </div>
                <div className="infoCard">
                    <div className="infoIcon">📧</div>
                    <h3>Email</h3>
                    <p>hello@reactexamples.com</p>
                </div>
                <div className="infoCard">
                    <div className="infoIcon">📞</div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contactForm">
                <h2 className="sectionTitle">Send us a Message</h2>
                
                {isSubmitted ? (
                    <div className="successMessage">
                        <div className="successIcon">✅</div>
                        <h3>Thank you!</h3>
                        <p>Your message has been sent. We'll get back to you soon!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="form">
                        {/* Name Field */}
                        <div className="formGroup">
                            <label className="label" htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`input ${errors.name ? 'inputError' : ''}`}
                                placeholder="Your name"
                            />
                            {errors.name && <span className="errorMessage">{errors.name}</span>}
                        </div>

                        {/* Email Field */}
                        <div className="formGroup">
                            <label className="label" htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`input ${errors.email ? 'inputError' : ''}`}
                                placeholder="your@email.com"
                            />
                            {errors.email && <span className="errorMessage">{errors.email}</span>}
                        </div>

                        {/* Subject Field */}
                        <div className="formGroup">
                            <label className="label" htmlFor="subject">Subject *</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={`input ${errors.subject ? 'inputError' : ''}`}
                            >
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="sales">Sales Question</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.subject && <span className="errorMessage">{errors.subject}</span>}
                        </div>

                        {/* Message Field */}
                        <div className="formGroup">
                            <label className="label" htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`input textarea ${errors.message ? 'inputError' : ''}`}
                                placeholder="Write your message here..."
                                rows={5}
                            />
                            {errors.message && <span className="errorMessage">{errors.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="button buttonPrimary buttonLarge">
                            Send Message →
                        </button>
                    </form>
                )}
            </section>

            {/* FAQ Section */}
            <section className="faq">
                <h2 className="sectionTitle">Frequently Asked Questions</h2>
                <div className="faqList">
                    <div className="faqItem">
                        <h3>How quickly will I get a response?</h3>
                        <p>We typically respond within 24-48 hours during business days.</p>
                    </div>
                    <div className="faqItem">
                        <h3>Do you offer refunds?</h3>
                        <p>Yes, we offer a 30-day money-back guarantee on all our services.</p>
                    </div>
                    <div className="faqItem">
                        <h3>Can I get a custom quote?</h3>
                        <p>Absolutely! Fill out the contact form and we'll get back to you with a custom quote.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
