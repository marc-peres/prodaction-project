import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div >
            <h1>{count}</h1>
            <button onClick={handleIncrement} className={classes.button}>Добавить 1</button>
        </div>
    );
};
