import React from 'react'
import Router from 'next/router'
import withApollo from '../utils/withApollo'
import { useMutation } from '@apollo/react-hooks'
import { SIGN_UP_TEST } from '../graphql/product/product.query'
import Layout from '../components/Layout/Layout'

const sentryGraphQL = () =>{
    const [signIn, { loading: signInLoading, error: signInError ,called,data}] = useMutation(SIGN_UP_TEST)

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
                {/* <button onClick={dev(123)}>Test </button> */}
                {signInLoading && <p>Loading...</p>}
                {signInError && <p>Error :( Please try again</p>}
            </div>
        </Layout>

    )
}
export default withApollo({ ssr: false })(sentryGraphQL)