import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function CommentsForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

    const handleCommentsChange = (event) => {
        setInputObject({
          ...inputObject,
          comments: event.target.value,
        });
    };

    const collectCommentsInput = (event) => {

        event.preventDefault();
    
        dispatch({
          type: "ADD_COMMENTS",
          payload: inputObject.comments,
        });
        history.push("/review");
    };

    return (
      
        <form onSubmit={(event) => collectCommentsInput(event)}>
          <h3>Any comments you want to leave?</h3>
          <input
            onChange={handleCommentsChange}
            type="text"
            value={inputObject.comments}
            placeholder="Comments"
          />
          
          <button type="submit">Next</button>
          
          </form>
        
        );
  
  }


export default CommentsForm;