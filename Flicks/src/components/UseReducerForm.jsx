import React, { useReducer } from 'react'

const initialState = {
    email: {
        value: '',
        error: ''
    },
    password: {
        value: '',
        error: ''
    },

    hasBeenSubmitted: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_EMAIL_VALUE':
            return {
                ...state,
                email:{
                    ...state.email,
                    value: action.payload
                }
            }

            case 'SET_EMAIL_ERROR':
                return {
                    ...state,
                    email:{
                        ...state.email.value,
                        error: action.payload
                    }
                }
                
            case 'SET_PASSWORD_VALUE':
            return {
                ...state,
                password:{
                    ...state.password,
                    value: action.payload
                }
            }

            case 'SET_PASSWORD_ERROR':
            return {
                ...state,
                password:{
                    ...state.password.value,
                    error: action.payload
                }
            }

            case 'HAS_BEEN_SUBMITTED':
                return {
                    ...state,
                    hasBeenSubmitted: true
                }

        default:
            return state
        }
}

const UseReducerForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleEmailChange = (e) => {
        if (e.target.value.length < 5){
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload:"Email must be at least 5 characters" 
            });

        } else {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload:""
            });
        }

        dispatch({
            type: "SET_EMAIL_VALUE",
            payload: e.target.value
        });

    }


    const handlePasswordChange = (e) => {
        if (e.target.value.length < 8){
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload:"Password must be at least 8 characters" 
            });

        } else {
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload:""
            })
        }

        dispatch({
            type: "SET_PASSWORD_VALUE",
            payload: e.target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.email.error === '' && state.password.error === '') {
        dispatch({
            type: 'HAS_BEEN_SUBMITTED',
            payload: true
        })
    }
    }

    
  return (
    <div>
        {
       state.hasBeenSubmitted ? 'Thanks for submitting your form!' : <form onSubmit={(e) => handleSubmit(e)}>
        
    <p>
        <label htmlFor="">Email:</label>
        <input onChange={(e) => handleEmailChange(e)} type="email" value={state.email.value} />

        {state.email.error !== null && (
                <p className="error">{state.email.error}</p>
                /*state.email.error !== null ? <small>{state.email.error}</small> : null */
            )}

    </p>
    <p>
        <label htmlFor="">Password:</label>
        <input onChange={(e) => handlePasswordChange(e)} type="password" value={state.password.value} />

        {state.password.error !== null && (
                <p className="error">{state.password.error}</p>
            )}

    </p>
    <input type="submit" value="Register" />
    </form> 
}


    </div>
  )
}

export default UseReducerForm;