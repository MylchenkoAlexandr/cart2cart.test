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

                </div>
            </div>
        </div>
    );
}
