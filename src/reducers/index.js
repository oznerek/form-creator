import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

export const renderQuestionForm = (state = [], action) => {
  let i = state.length + 1;

  switch (action.type) {
    case "DELETE_QUESTION":
    console.log('reducers:',action.payload.input)
      return [
        ...state.filter(
          input => input !== action.payload.input
        )
      ];
    
    case "ADD_INPUT":
      return [...state, action.payload.input + `_${i}`];
    
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  createForm: renderQuestionForm
});
