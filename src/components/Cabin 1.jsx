import { useState } from "react"


const Cabin1 = (props) => {
    console.log(props.options[1])
const [option, setOption] = useState("Dirty")
function handleChange(e) {
    let value = e.target.value
    setOption(props.options[value])
}

    return(
        <div>
            <h2>Cabin 1</h2>
            <div>
            <label for ="options">Set Status</label>
              <select  >
                <option value='0'>Checked Out/Dirty</option>
                <option value='1'>Occupied</option>
                <option value='2'>Clean Immediately</option>
                <option value='3'>Ready</option>
              </select>
              <h3>Status: {option}</h3>
            </div>
        </div>
    )
}


export default Cabin1