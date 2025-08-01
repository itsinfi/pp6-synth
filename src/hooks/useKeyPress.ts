import { useEffect } from 'react';

export default function useKeyPress(key: string, handleKeyPress: Function) {
    return useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === key.toLowerCase() || event.key === key.toUpperCase()) {
                handleKeyPress();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [key, handleKeyPress]);
}
