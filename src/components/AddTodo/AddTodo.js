import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../../actions"
const AddTodo = (props) => {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                let input = event.target.userInput.value;
                props.dispatch(addTodo(input));
                event.target.userInput.value=""
            }}
        ><div className="monika">
            <input className="input" type="text" name="userInput"/>
                <button className="submit">Submit</button>
                </div>
</form>

            );
};

            export default connect()(AddTodo);