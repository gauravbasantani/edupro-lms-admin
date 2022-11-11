import React from 'react'
import Header from './components/Header';

const GuardedRoute = (props) => {
    if (props.auth) {
        return (
                <>
                    <Header />
                    <props.Component />
                    {/* <Footer /> */}
                </>
        )
    }
    else {
        window.location.href = "/";
    }
}
export default GuardedRoute;