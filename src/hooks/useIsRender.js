import { useState, useEffect, useRef } from 'react';

const useIsRender = () => {
    const [isRender, setIsRender] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsRender(entry.isIntersecting);
            },
            {
                root: null, // Отслеживаем в пределах вьюпорта
                rootMargin: '50% 0px', // Загрузка за 1,5 экрана до видимости
                threshold: 0 
            }
        );

        const currentElement = ref.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return [isRender, ref];
};

export default useIsRender;
