import React from 'react'
import Router from 'next/router'


import { SIGN_IN } from '../graphql/product/product.query'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
const SignIn = () => {
    const [signIn, { loading: signInLoading, error: signInError ,called,data}] = useMutation(SIGN_IN)

    const onSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        console.log();
        const email = formData.get('email')
        const password = formData.get('password')
    
        signIn({ variables: { input: { email, password } } })
    }
    if (signInLoading) return <p>Loading...</p>;
    if (signInError) return <p>Error :(</p>;

    if(called && !signInLoading && !signInError && data?.signIn){
        Router.push('/'); 
    }
    let input;
    return (
        <Layout>
            <div>
                <form
                    onSubmit={onSubmit}
                >
                    <div>Email :  <input type="text" name="email" /></div>
                    <div>Password :  <input type="text" name="password" /></div>
                    <button type="submit">Signin</button>
                </form>
                {signInLoading && <p>Loading...</p>}
                {signInError && <p>Error :( Please try again</p>}
            </div>
        </Layout>

    )
}

export default withApollo({ ssr: true })(SignIn)