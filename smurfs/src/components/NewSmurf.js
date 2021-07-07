import React, {useState} from 'react'
import { connect } from 'react-redux'
import { newSmurf } from '../actions'

import { Input, InputLabel, Button } from '@material-ui/core'

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
            <InputLabel>Smurf's Name&nbsp;
                <Input
                type="text"
                name="name"
                id="sname"
                onChange={handleChanges}
                value={smurf.name}
                placeholder="Smurf Name"
                />
            </InputLabel>

            <InputLabel>Age&nbsp;</InputLabel>
            <Input
            type="number"
            name="age"
            id="sage"
            onChange={handleChanges}
            value={smurf.age}
            placeholder="Smurf Age"
            />

            <InputLabel>height&nbsp;
                <Input
                type="number"
                name="height"
                id="sheight"
                onChange={handleChanges}
                value={smurf.height}
                placeholder="height cm"
                />
            </InputLabel>
            <Button onClick={inputValues}>Add Smurf</Button>
        </form>
    )
}

export default connect(null,{newSmurf})(NewSmurf)

