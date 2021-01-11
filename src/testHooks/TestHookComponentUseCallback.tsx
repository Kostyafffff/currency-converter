import React, {useCallback, useEffect, useState} from 'react';

export const TestHookComponentCallback: React.FC = () => {
    const [message, setMessage] = useState('Всем привет');
    const [counter, setCounter] = useState(0);

    const greeting = console.log;

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);

   const a = useCallback(() => setCounter(counter + 1), [counter, setCounter])

    return (
        <button onClick={a}>
            На меня нажали { counter } раз
        </button>
    );
}
