import React, { Component } from 'react';

class CommentForm extends Component {
    render(){
        return(

    <div className="landing">
        <h1>Comment Form</h1>
            <form>
            <textarea type="text" name="comments" cols="40" rows="7"  class="comments"/>
            <br/>
            <input class="delete-button" type="submit" value="Add Comment" />
        </form>
    </div>
        )
    }
}

export default CommentForm;
