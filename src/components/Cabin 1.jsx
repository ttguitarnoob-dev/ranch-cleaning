import { useState, useEffect } from "react"


const Cabin1 = (props) => {
    console.log(props.options[1])
const [option, setOption] = useState("Ready")

// useEffect(() => {
//     setOption(JSON.parse(window.localStorage.getItem('option')))
// }, [])

// useEffect(() => {
//     window.localStorage.setItem('option', option)
// }, [option])

function handleChange(e) {
    let value = e.target.value
    console.log(value)
    setOption(props.options[value])
}

    return(
        <div>
            <h2>Cabin 1</h2>
            <div>
            <label for ="options">Set Status</label>
              <select onChange={handleChange} >
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