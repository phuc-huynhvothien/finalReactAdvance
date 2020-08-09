import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { SIGN_IN } from '../graphql/product/product.query'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
import { onError } from "apollo-link-error";
import { Spinner, Form, Button } from 'react-bootstrap'
const SignIn = () => {
    const [signIn, { loading, called, error, data }] = useMutation(SIGN_IN, { errorPolicy: 'all' })
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            const formData = new FormData(event.target)
            const email = formData.get('email')
            const password = formData.get('password')
            if(email && password){
                const x = await signIn({ variables: { input: { email, password } } })
                Router.push('/');
            }
            
        }
        catch (e) {
            //  HOC handle error message
        }

    }
    const StyledErrorMess = styled.p`
        color : red;
    `;
    const StyledDiv = styled.div`
        margin: auto;
        width: 300px;
    `;
    const StyledSignInTitle = styled.h1`
        text-align: center;
        margin-bottom : 30px;
    `;
    return (
        <Layout>
            <StyledDiv>
           <StyledSignInTitle>Login Form</StyledSignInTitle>
            
            <Form onSubmit={handleSubmit}>
            {error && <StyledErrorMess>{error.graphQLErrors[0].message}</StyledErrorMess>}
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signin &nbsp;   {loading &&  <Spinner animation="border" variant="light" size="sm"  role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>}
                </Button>
            </Form>
            </StyledDiv>
             
        </Layout>

    )
}

export default withApollo({ ssr: true })(SignIn)