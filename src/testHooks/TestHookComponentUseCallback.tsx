import React, {useCallback, useEffect, useState} from 'react';

export const TestHookComponentCallback: React.FC = () => {
    const [message, setMessage] = useState('Всем привет');
    const [counter, setCounter] = useState(0);

    const greeting = useCallback((text: string) => {
        console.log(text);
    }, [])

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);


    return (
        <button onClick={() => setCounter(counter + 1)}>
            На меня нажали { counter } раз
        </button>
    );
}
