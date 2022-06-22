import { useState } from "react"


const Cabin1 = (props) => {
const [option, setOption] = useState(null)

    return(
        <div>
            <h2>Cabin 1</h2>
            <div>
            <label for ="options">Set Status</label>
              <select name="options" id="options">
                <option>Checked Out/Dirty</option>
                <option>Occupied</option>
                <option>Clean Immediately</option>
                <option>Ready</option>
              </select>
            </div>
        </div>
    )
}


export default Cabin1