import GlowEffect from "./GlowEffect"

interface Active {
   pickSymbol?: (e: any) => void,
   active?: string | null
   effect?: (item: string) => boolean | undefined
}


const Scissors = (props: Active) => {
   return (
      <button onClick={props.pickSymbol} name="Scissors" className={`symbol scissors ${props.active ? props.active : ''}`}>
         {props.effect && props.effect("Scissors") ? <GlowEffect /> : null}
      </button>
   );
}

export default Scissors;