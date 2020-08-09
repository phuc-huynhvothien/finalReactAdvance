import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { SIGN_UP } from '../graphql/product/product.query'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
import { onError } from "apollo-link-error";
import { Spinner, Form, Button } from 'react-bootstrap'
const SignUp = () => {
    const [signUp, { loading, called, error, data }] = useMutation(SIGN_UP)
    const passError = "Password is not match"
    let checkpassword = false
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            const formData = new FormData(event.target)
            const email = formData.get('email')
            const password = formData.get('password')
            const fullName = formData.get('fullname')
            if (email && password && fullName) {
                const result = await signUp({ variables: { input: { email, password, fullName } } })
                Router.push('/signIn?email=123');

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
                <StyledSignInTitle>REGISTER FORM</StyledSignInTitle>

                <Form onSubmit={handleSubmit}>
                    {error && <StyledErrorMess>{error.graphQLErrors[0]?.message}</StyledErrorMess>}
                    <Form.Group  >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>
                    {/* <Form.Group >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="password2" />
                    </Form.Group> */}
                    <Form.Group >
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Full name" name="fullname" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Signin &nbsp;   {loading && <Spinner animation="border" variant="light" size="sm" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>}
                    </Button>
                </Form>
            </StyledDiv>

        </Layout>

    )
}

export default withApollo({ ssr: true })(SignUp)