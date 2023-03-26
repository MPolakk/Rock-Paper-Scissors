interface Active {
   active?: string | null
}



const Paper = (props: Active) => {
   return (
      <button className={`symbol paper ${props.active ? props.active : ''}`}></button>
   );
}

export default Paper;