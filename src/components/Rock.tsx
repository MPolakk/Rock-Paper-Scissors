import GlowEffect from "./GlowEffect";




interface Active {
   pickSymbol?: (e: any) => void,
   active?: string | null
   effect?: (item: string) => boolean | undefined
}

const Rock = (props: Active) => {


   return (
      <button onClick={props.pickSymbol} name="Rock" className={`symbol rock  ${props.active ? props.active : ''}`}>
         {props.effect && props.effect("Rock") ? <GlowEffect /> : null}
      </button>
   );
}

export default Rock;