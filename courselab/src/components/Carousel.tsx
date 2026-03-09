import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
}

const items: CarouselItem[] = [
    {
        id: 1,
        title: "Master React State",
        description: "Learn to manage complex data flows with ease and confidence.",
        image: "⚛️",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        title: "Build Responsive UIs",
        description: "Modern CSS techniques for every screen size and device.",
        image: "📱",
        color: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        id: 3,
        title: "Interactive Quizzes",
        description: "Test your knowledge and track your progress in real-time.",
        image: "🧠",
        color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    }
];

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <div
            className="carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="carouselTrack"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="carouselSlide"
                        style={{ background: item.color }}
                    >
                        <div className="slideContent">
                            <span className="slideIcon">{item.image}</span>
                            <h2 className="slideTitle">{item.title}</h2>
                            <p className="slideDescription">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carouselControl prev" onClick={prevSlide}>
                <ChevronLeft size={24} />
            </button>
            <button className="carouselControl next" onClick={nextSlide}>
                <ChevronRight size={24} />
            </button>

            <div className="carouselDots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`carouselDot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <button
                className="carouselPauseToggle"
                onClick={() => setIsPaused(!isPaused)}
            >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
        </div>
    );
}
