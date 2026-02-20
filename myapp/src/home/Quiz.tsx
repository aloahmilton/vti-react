import { useState } from 'react';

interface QuizProps {
    question: string;
    options: string[];
    correctAnswer: number;
    onComplete: () => void;
}

export default function Quiz({ question, options, correctAnswer, onComplete }: QuizProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelect = (index: number) => {
        if (!isSubmitted) {
            setSelectedOption(index);
        }
    };

    const handleSubmit = () => {
        if (selectedOption !== null) {
            setIsSubmitted(true);
            if (selectedOption === correctAnswer) {
                onComplete();
            }
        }
    };

    return (
        <div className="quizCard">
            <h3 className="quizTitle"><span>🧠</span> Knowledge Check</h3>
            <p className="quizQuestion">{question}</p>

            <div className="quizOptions">
                {options.map((option, index) => {
                    let className = "quizOption";
                    if (selectedOption === index) className += " selected";
                    if (isSubmitted) {
                        if (index === correctAnswer) className += " correct";
                        else if (selectedOption === index) className += " incorrect";
                    }

                    return (
                        <div
                            key={index}
                            className={className}
                            onClick={() => handleSelect(index)}
                        >
                            {option}
                        </div>
                    );
                })}
            </div>

            {!isSubmitted ? (
                <button
                    className="button buttonLarge buttonPrimary"
                    disabled={selectedOption === null}
                    onClick={handleSubmit}
                >
                    Submit Answer
                </button>
            ) : (
                <div className={`quizFeedback ${selectedOption === correctAnswer ? 'successMessage' : 'errorMessage'}`} style={{ marginTop: '20px', padding: '15px', borderRadius: '8px' }}>
                    {selectedOption === correctAnswer ? (
                        <>
                            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🎉</span>
                            Correct! You've mastered this concept.
                        </>
                    ) : (
                        <>
                            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>❌</span>
                            Not quite. Review the material and try again!
                        </>
                    )}
                    {selectedOption !== correctAnswer && (
                        <button
                            className="button buttonSmall"
                            style={{ display: 'block', margin: '15px auto 0' }}
                            onClick={() => {
                                setIsSubmitted(false);
                                setSelectedOption(null);
                            }}
                        >
                            Try Again
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
