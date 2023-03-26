import GlowEffect from "./GlowEffect";

interface Active {
   active?: string | null
}

const Rock = (props: Active) => {


   return (
      <button className={`symbol rock  ${props.active ? props.active : ''}`}>
         <GlowEffect />
      </button>
   );
}

export default Rock;