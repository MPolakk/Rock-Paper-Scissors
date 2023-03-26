interface Active {
   active?: string | null
}

const Rock = (props: Active) => {


   return (
      <button className={`symbol rock ${props.active}`}></button>
   );
}

export default Rock;