
// export const FeedbackOptions = ({good,neutral,bad}) => {
//     return (
//     <div>
//         <button onClick={good}>Good</button>
//         <button onClick={neutral}>Neutral</button>
//         <button onClick={bad}>Bad</button>
//     </div>
//     )
// }

import { Button,ListBtn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListBtn>
      {options.map(option => (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
              {option}          
        </Button>
      ))}
    </ListBtn>
  );
};

export default FeedbackOptions;