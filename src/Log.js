import react from "react"

const Log = (props)=>{

return (
  
    <tr class="active-row">
        <td>{props.voltage}</td>
        <td>{props.current}</td>
        <td>{props.voltage * props.current}</td>
    </tr>


    )
    
}

export default Log;