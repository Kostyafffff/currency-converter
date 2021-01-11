import React, {useEffect, useState, useMemo} from 'react';
import {LatestViewContainer} from "../components/latest/container/LatestViewContainer";

const createUser = (name: string, surname: string): object => {
    const user = {name, surname};

    console.log(user);

    return {
        name, surname
    }
};

export const TestHookComponentUseMemo: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [count, setCount] = useState(0)

    const user = useMemo(() => createUser(name, surname), [name, surname])

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        document.title = `Вы нажали ${count} раз`;
        const url = 'http://data.fixer.io/api/latest?access_key=9afad43f0d60551a2ca634d07fc70cca';

        //fetch((url)).then(data => data).then(r => console.log(r))
    });

    return (
        <>
            <div className="App">
                <LatestViewContainer />
            </div>

            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/><br />
                <input type="text" value={surname} onChange={e => setSurname(e.target.value)}/><br />
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <button onClick={() => setCount(count + 1)} >
                    Нажми на меня
                </button>
            </div>
        </>
    );
}
