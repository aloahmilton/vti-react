import { useState, useEffect } from 'react';

export function useProgress() {
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('react_progress');
        if (saved) {
            try {
                setCompletedLessons(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse progress', e);
            }
        }
    }, []);

    const markAsCompleted = (lessonPath: string) => {
        if (!completedLessons.includes(lessonPath)) {
            const updated = [...completedLessons, lessonPath];
            setCompletedLessons(updated);
            localStorage.setItem('react_progress', JSON.stringify(updated));
        }
    };

    const isCompleted = (lessonPath: string) => {
        return completedLessons.includes(lessonPath);
    };

    const getProgressPercentage = (totalLessons: number) => {
        if (totalLessons === 0) return 0;
        return Math.round((completedLessons.length / totalLessons) * 100);
    };

    return { completedLessons, markAsCompleted, isCompleted, getProgressPercentage };
}
