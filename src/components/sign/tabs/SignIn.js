import React from "react";
import { Input, Checkbox } from 'antd';
import Button from '../../button';

export default function SignIn() {
    return (
        <div className="SignIn">
            <div className="wrapper">
                <div className="fields">
                    <div className="field username">
                        <p>Email</p>
                        <Input size="large" placeholder="Email" />
                    </div>
                    <div className="field password">
                        <p>Password</p>
                        <Input.Password  size="large" placeholder="Password" />
                    </div>
                    <Checkbox>Stay signed in</Checkbox>
                    <br/>
                    <Button title="Sign in"/>
                </div>
                <div className="buttons">

                    <div className="social">
                        <div className="button swipe facebook">
                            <p className="fa-icon facebook"/>
                            <span className="text">Sign in with Facebook</span>
                        </div>
                        <div className="button swipe google">
                            <p className="fa-icon google"/>
                            <span className="text">Sign in with Google</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
