import React from "react";
import { Input, Checkbox } from 'antd';
import Button from '../../button';

export default function ForgotYourPassword() {
    return (
        <div className="ForgotYourPassword">
            <div className="wrapper">
                <div className="fields">
                    <div className="field email">
                        <p>Email</p>
                        <Input size="large" placeholder="Email" />
                        <p className="notification">The password recovery instructions will be sent to the email address you have provided.</p>
                    </div>
                    <Button title="Send"/>
                </div>
            </div>
        </div>
    );
}
