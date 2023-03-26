interface Active {
   active?: string | null
}


const Scissors = (props: Active) => {
   return (
      <button className={`symbol scissors ${props.active}`}></button>
   );
}

export default Scissors;