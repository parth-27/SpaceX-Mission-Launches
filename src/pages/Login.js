import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';


const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return <Wrapper>
        <div className="container">
            <h1>SpaceX Launches</h1>
            <button className="button" onClick={loginWithRedirect}
                style={{
                    margin: "2rem 0",
                    padding: "1rem 2rem",
                    widht: "120px",
                    cursor: "pointer",
                    borderRadius:"10px"
                }}
            >Login / Sign up</button>
        </div>
    </Wrapper>;
};

const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
	.container {
		width: 90vw;
		max-width: 600px;
		text-align: center;
	}
	img {
		margin-bottom: 2rem;
	}
	h1 {
		margin-bottom: 1.5rem;
	}
`;
export default Login;
