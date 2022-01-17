import React from "react";

const style = {
    backgroundColor: '#c6ffe2',
    width: '400px',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
}

export const InconpleteTodos = (props) => {
    const {todos, onClickcomplete, onClickDelete} = props;
    return (
        <React.Fragment>
            <div style={style}>
                <p className="title">未完了のTodo</p>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickcomplete(index)}>完了</button>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
}