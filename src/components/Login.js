import React from 'react' 
// import axios from 'axios'

const Login = () => {
    return (
        <div>
            <form>
                <input
                    type='text'
                    name='username'
                    value='charlie boy'
                />
                <input 
                    type='text'
                    name='phone number'
                    value='210-355-9825'
                />
                <input 
                    type='password'
                    name='password'
                    value=''
                />
            </form>
        </div>
    )
}

export default Login