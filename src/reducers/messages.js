import { ADD_MESSAGE } from "../constants/messages";

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          user: action.userName,
          date: action.date
        }
      ];
    default:
      return state;
  }
};

export default messages;
