import React, {useState} from 'react'
import { connect } from 'react-redux'
import { newSmurf } from '../actions'

const NewSmurf = props => {

    const [smurf, setSmurf] = useState({name:"", age: "", height: ""})

    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const inputValues = e => {
        e.preventDefault()
        props.newSmurf(smurf)
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <form onSubmit={inputValues}>
            <label>Smurf's Name
                <input
                type="text"
                name="name"
                id="sname"
                onChange={handleChanges}
                value={smurf.name}
                placeholder="Smurf Name"
                />
            </label>

            <label>Age</label>
            <input
            type="number"
            name="age"
            id="sage"
            onChange={handleChanges}
            value={smurf.age}
            placeholder="Smurf Age"
            />

            <label>height
                <input
                type="number"
                name="height"
                id="sheight"
                onChange={handleChanges}
                value={smurf.height}
                placeholder="height cm"
                />
            </label>
            <button onClick={inputValues}>Add Smurf</button>
        </form>
    )
}

export default connect(null,{newSmurf})(NewSmurf)

