import React from "react";

const style = {
    backgroundColor: '#ffffe0',
    width: '400px',
    minHeight: '200px',
    margin: '8px',
    padding: '8px',
    borderRadius: '8px',
}

export const ComplateTodos = (props) => {
    const {todos, onClickBack} = props;
    return (
        <div style={style}>
            <p className="title">完了のTodo</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo} className="list-row">
                            <li>{todo}</li>
                            <button onClick={() => onClickBack(index)}>戻す</button>
                        </div>
                    );
                }
                )}
            </ul>
        </div>
    )
}