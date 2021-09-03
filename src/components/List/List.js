import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
const List = (props) => {
    return (
        
            <ol>
                {props.todos.map((todo, index) => (
                    <li className="monika list" key={index}>{todo.message} <button className="delete" onClick ={()=>props.dispatch(deleteTodo(todo.id))}>Delete</button></li>
                ))}
            </ol>
        
    )
};

const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

export default connect(mapStateToProps)(List)
