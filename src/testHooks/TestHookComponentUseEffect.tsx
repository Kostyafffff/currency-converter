import React, {useEffect, useState} from "react";

export const TestHookComponentUseEffect: React.FC = () => {


    //componentDidMount componentDidUpdate
    // useEffect(() => {
    //     console.log(document.querySelector('#target'))
    // }, );


    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('/users')
    //         .then(response => response.json())
    //         .then((users) => setUsers(users));
    // }, [users, setUsers]);

    const [timer, setTimer] = useState(0);


    useEffect(() => {
        const flagInterval = setInterval(() => {
            console.log('fired');
            setTimer(timer + 1)
        }, 1000);

        return () => {clearInterval(flagInterval)}
    })
    return (
        <p id="target">{timer}</p>
    );
}
