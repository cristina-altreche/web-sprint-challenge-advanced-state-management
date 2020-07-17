import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getSmurf} from '../actions'
import Smurf from './Smurf'

const Village = ({getSmurf, smurfs,error, isLoading}) =>{
    useEffect(() => {
        getSmurf()
}, [getSmurf])

if(isLoading) {
    return <h3>Loading Smurfs...</h3>
}

return (
    <div>
        {error && <p>{error}</p>}
        {smurfs.map(smurf => (
            <Smurf smurf={smurf}/>
        ))}
    </div>
)
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurf})(Village)