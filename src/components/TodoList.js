import React from "react";
import styled from 'styled-components';
import { useTodoState } from "../TodoContext";
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(({id, text, done}) => (
                <TodoItem
                    key = {id}
                    id = {id}
                    text = {text}
                    done={done}
                />
            ))}
        </TodoListBlock>
    );
}

export default React.memo(TodoList);