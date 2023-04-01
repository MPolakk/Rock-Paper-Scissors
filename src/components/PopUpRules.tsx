import Scissors from "./Scissors";
import Paper from "./Paper";
import Rock from "./Rock";
import { useAppDispatch } from "../hooks";
import { isRulesActive } from "../reducers/gameSlice";

const PopUpRules = () => {

   const dispatch = useAppDispatch();


   return (
      <div className="popup-rules">

         <div>
            <span>Rules</span>
         </div>
         <button onClick={() => { dispatch(isRulesActive()) }} className="popup-exit"></button>
      </div>
   );
}

export default PopUpRules;