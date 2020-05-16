import React from "react";

const styles = {
    listAll: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
    },

    checkbox: {
        listStyle: "none",
        padding: 0,
        flex: 1
    },
}

export const TodoList = (props) => {

    const [todoInput, setTodoInput] = React.useState('Type Here');
    const [doList, setDoList] = React.useState([]);
    const [doneList, setDoneList] = React.useState([]);

    const onChangeHandlerInput = (e) => {
        setTodoInput(e.target.value);
    }

    const onAddHandler = () => {
        setDoList([...doList, todoInput])
    }

    const moveToDone = (thing, index) => {
        // add list item to done list array
        setDoneList([...doneList, thing])
        // remove index of do list array
        setDoList([...doList.slice(0,index), ...doList.slice(index+1)])
    }

    const moveToDo = (thing, index) => {
        // add list item to done list array
        setDoList([...doList, thing])
        // remove index of do list array
        setDoneList([...doneList.slice(0,index), ...doneList.slice(index+1)])
    }

    return (
        <div>
            <input type={"text"} value={todoInput} onChange={onChangeHandlerInput} />
            <button type={"button"} onClick={onAddHandler}>Add</button>
            <div style={styles.listAll}>
                <ul style={styles.checkbox} name="do">
                    To Do
                    {doList.map((thing, index) => (
                        <li key={Date.now() + index}>
                            <span>
                                <input type="Checkbox" onChange={(e) => moveToDone(thing, index)}/>
                                {thing}
                            </span>
                        </li>
                    )
                    )
                    }
                </ul>
                <ul style={styles.checkbox} name="done">
                    To Did
                {doneList.map((thing, index) => (
                        <li key={Date.now() + index}>
                            <span>
                                <input type="Checkbox" onChange={(e) => moveToDo(thing, index)}/>
                                {thing}
                            </span>
                        </li>
                    )
                    )
                    }
                </ul>
            </div>
        </div>
    )
}