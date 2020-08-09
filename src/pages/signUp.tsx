import React from 'react'
import Router from 'next/router'


import { SIGN_UP } from '../graphql/product/product.query'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
const SignUp = () => {
    const [signUp, { loading: signUpLoading, error: signUpError, called, data }] = useMutation(SIGN_UP)

    const onSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const email = formData.get('email')
        const password = formData.get('password')
        const fullName = formData.get('fullname')

        signUp({ variables: { input: { email, password, fullName } } })
    }
    if (called && !signUpLoading && data?.signUp) {
        Router.push('/');
    }
    if (signUpError) return `Error! ${signUpError.message}`;
    return (
        <Layout>
            <h1>SignUp</h1>
            <div>
                <form
                    onSubmit={onSubmit}
                >
                    <div>Email :  <input type="text" name="email" /></div>
                    <div>Password : <input type="text" name="password" /></div>
                    <div>Full Name : <input type="text" name="fullname" /></div>
                    <button type="submit">SignUp</button>
                </form>
                {signUpLoading && <p>Loading...</p>}
                {signUpError && <p>Error :( Please try again</p>}
            </div>
        </Layout>

    )
}

export default withApollo({ ssr: true })(SignUp)