import React from 'react'
import Router from 'next/router'
import withApollo from '../utils/withApollo'
import { useMutation } from '@apollo/react-hooks'
import Layout from '../components/Layout/Layout'

const sentryTest = () =>{
    return (
        <Layout>
            <div>
                <form
                    // onSubmit={submitError}
                >
                    <div>Email :  <input type="text" name="email" /></div>
                    <div>Password :  <input type="text" name="password" /></div>
                    <button type="submit">Signin</button>
                </form>
                {/* <button onClick={dev(123)}>Test </button> */}
            </div>
        </Layout>

    )
}
export default withApollo({ ssr: true })(sentryTest)