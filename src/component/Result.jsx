import React, { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = ({correct}) => {
    const location = useLocation();
    const navigate = useNavigate()
    const handlePage = () =>{
        navigate('/');
    }
  return (
    <Fragment>
    <p>Your Result: {location.state.correct}</p>
    <button onClick={handlePage} >Restart Quiz</button>
    </Fragment>
  )
}

export default Result