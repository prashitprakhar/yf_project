import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import SignUpLogin from './components/SignUpLogin';
import EmailLoginPage from './components/EmailLoginPage';
import UserHomepage from './components/UserHomepge';
import DiscussionPage from './components/DiscussionPage';
import PhoneLoginPage from './components/PhoneLoginPage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="projectLandingPage">
                    <Scene key="landingPage" component={SignUpLogin} title="We are here to help" />
                </Scene>
                <Scene key="main">
                <Scene
                    key="loginPage"
                    component={EmailLoginPage}
                    title="Please Login"
                    initial
                    />
                    <Scene 
                        key="phoneLogin"
                        component={PhoneLoginPage}
                        title="Please login"
                    />
                    <Scene
                    key="homepage"
                    component={UserHomepage}
                    title="YF"
                    left={()=>(null)}
                    />
                    <Scene 
                    key="discussionPage"
                    component={DiscussionPage}
                    title="Activities"
                    left={()=>(null)}
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;