import { useAppDispatch } from "../hooks";
import { isRulesActive } from "../reducers/gameSlice";

const Rules = () => {

   const dispatch = useAppDispatch();
   const handleRulesButton = () => {
      dispatch(isRulesActive())

   }

   return (
      <div className="rules-bar">
         <button className="rules" onClick={handleRulesButton}>Rules</button>
      </div>
   );
}

export default Rules;