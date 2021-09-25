import React from "react";
import { Input, Checkbox } from 'antd';
import Button from '../../button';

export default function SignUp() {
    return (
        <div className="SignUp">
            <div className="wrapper">
                <div className="fields">
                    <div className="field email">
                        <p>Email</p>
                        <Input size="large" placeholder="Email" />
                        <p className="notification">Enter a valid email for important notifications.</p>
                    </div>
                    <Checkbox>
                        By signing up, you agree to the&nbsp;<a target="_blank" href="/">Terms of Service</a>
                        <br/>
                        and&nbsp;<a target="_blank" href="/">GDPR Compliance</a>
                    </Checkbox>
                    <Button title="Sign up"/>
                </div>
                <div className="buttons">
                    <div className="social">
                        <div className="button swipe facebook">
                            <p className="fa-icon facebook"/>
                            <span className="text">Sign up with Facebook</span>
                        </div>
                        <div className="button swipe google">
                            <p className="fa-icon google"/>
                            <span className="text">Sign up with Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
