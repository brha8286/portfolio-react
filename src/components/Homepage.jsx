import React from 'react';
import { Stopwatch } from './Stopwatch';
import { TodoList } from './TodoList';

const styles = {
    homepageWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
    },
    main: {
        flex: 1,
    }
};

export const Homepage = (props) => {

    const [value0, setValue0] = React.useState("Type here");
    const [value1, setValue1] = React.useState("Type here");
    const [list0, setList0] = React.useState([]);


    const onChangeHandler0 = (e) => {
        setValue0(e.target.value);
    }

    const onChangeHandler1 = (e) => {
        setValue1(e.target.value);
    }

    const onClearClickHandler = (e) => {
        setValue0("");
        debugger;
    }

    const onAddClickHandler = (e) => {
        setList0([...list0, value0]); // ['a']  [['a'], 'b']
        setValue0("");
    }

    return (

        <main style={{ ...props.style, ...styles.homepageWrapper }} >
            <div style={styles.main}>
                <input type={"text"} name="input0" value={value0} onChange={onChangeHandler0} />
                <input type={"text"} name="input1" value={value1} onChange={onChangeHandler1} />
                <button type={"button"} onClick={onClearClickHandler}>
                    Clear
            </button>
                <button type={"button"} onClick={onAddClickHandler}>
                    Add
            </button>
                <ul>
                    {list0.map(thing => <li>{thing}</li>)}
                </ul>
                <Stopwatch />
            </div>
            <div style={styles.main}>
                <TodoList />
            </div>
        </main>
    );
}