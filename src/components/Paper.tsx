import GlowEffect from "./GlowEffect";


interface Active {
   pickSymbol?: (e: any) => void,
   active?: string | null,
   effect?: (item: string) => boolean | undefined
}



const Paper = (props: Active) => {


   return (
      <button onClick={props.pickSymbol} name="Paper" className={`symbol paper ${props.active ? props.active : ''}`}>
         {props.effect && props.effect("Paper") ? <GlowEffect /> : null}
      </button>

   );
}

export default Paper;