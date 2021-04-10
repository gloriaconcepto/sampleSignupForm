import React, { memo, useEffect, useState } from "react";
import { Row, Col, Button, ButtonToolbar, Spinner } from "reactstrap";
// import {
//     Field,
//     reduxForm,
//     // clearFields, submit
// } from "redux-form";
import "./form.css";

const LoginForm = memo((props) => {
    const { signIn } = props;
    const [name, setName] = useState("");
    const [Errorname, setErrorName] = useState(null);
    const [lastName, setLastName] = useState("");
    const [ErrorLastname, setErrorLastName] = useState(null);
    const [email, setEmail] = useState("");
    const [ErrorEmail, setErrorEmail] = useState(null);
    const [passWord, setPassword] = useState("");
    const [ErrorPassword, setErrorPassword] = useState(null);
    const [phone, setPhone] = useState("");
    const [ErrorPhone, setErrorPhone] = useState(null);
    const [isError, setIsError] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstName: name,
            lastName: lastName,
            email: email,
            phone: phone,
            password: passWord,
        };
        signIn(data);
    };
    const handleChange = (e, type) => {
        try {
            if (type === "name") {
                setName(e.target.value);
            }
            if (type === "lastName") {
                setLastName(e.target.value);
            }
            if (type === "password") {
                setPassword(e.target.value);
            }
            if (type === "email") {
                setEmail(e.target.value);
            }
            if (type === "phone") {
                setPhone(e.target.value);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleOnBlur = (data, type) => {
        let text = data.target.value;
        try {
            if (type === "name") {
                if (text.length === 0) {
                    setErrorName("Name is required");
                    setIsError(true);
                } else {
                    setErrorName(null);
                }
            }

            if (type === "lastName") {
                if (text.length === 0) {
                    setErrorLastName("Last Name is required");
                    setIsError(true);
                } else {
                    setErrorLastName(null);
                }
            }

            if (type === "email") {
                if (text.length === 0) {
                    setErrorEmail("Email is required");
                    setIsError(true);
                } else {
                    console.log("hey");
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text)) {
                        setErrorEmail("Invalid email address");
                    } else {
                        setErrorEmail(null);
                    }
                }
            }

            if (type === "password") {
                if (text.length === 0) {
                    setErrorPassword("Password is required");
                    setIsError(true);
                } else {
                    setErrorPassword(null);
                }
            }

            if (type === "phone") {
                if (text.length === 0) {
                    setErrorPhone("Phone is required");
                    setIsError(true);
                } else {
                    if (!/^(\d{11})$/.test(text)) {
                        setErrorPhone("Invalid phone number");
                    } else {
                        setErrorPhone(null);
                    }
                }
            }
            //check for general error
            if (ErrorPhone === null && ErrorPassword === null && ErrorEmail === null && ErrorLastname === null && Errorname === null) {
                setIsError(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <div style={{ textAlign: "center", marginTop: "15%" }}>
                <h3>Sign up with</h3>
            </div>
            <Row>
                <Col lg={{ size: 6 }} sm={{ size: 6, offset: 1 }} className="moveLeft">
                    <div className="login_left_form">
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col className={`input-group ${Errorname ? "error" : ""}`}>
                                    <label>Name *</label>
                                    <input type="text" onChange={(e) => handleChange(e, "name")} value={name} onBlur={(value) => handleOnBlur(value, "name")} />
                                    {Errorname && Errorname.length > 0 && <div className="error-message">{Errorname}</div>}
                                </Col>
                                <Col className={`input-group ${ErrorLastname ? "error" : ""}`}>
                                    <label>Last Name *</label>
                                    <input type="text" onChange={(e) => handleChange(e, "lastName")} value={lastName} onBlur={(value) => handleOnBlur(value, "lastName")} />
                                    {ErrorLastname && ErrorLastname.length > 0 && <div className="error-message">{ErrorLastname}</div>}
                                </Col>
                            </Row>
                            <Row>
                                <Col className={`input-group ${ErrorEmail ? "error" : ""}`}>
                                    <label>Email *</label>
                                    <input type="text" onChange={(e) => handleChange(e, "email")} value={email} onBlur={(value) => handleOnBlur(value, "email")} />
                                    {ErrorEmail && ErrorEmail.length > 0 && <div className="error-message">{ErrorEmail}</div>}
                                </Col>
                            </Row>
                            <Row>
                                <Col className={`input-group ${ErrorPhone ? "error" : ""}`}>
                                    <label>Telephone Number *</label>
                                    <input type="tel" onChange={(e) => handleChange(e, "phone")} value={phone} onBlur={(value) => handleOnBlur(value, "phone")} />
                                    {ErrorPhone && ErrorPhone.length > 0 && <div className="error-message">{ErrorPhone}</div>}
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col className={`input-group ${ErrorPassword ? "error" : ""}`}>
                                    <label>PassWord *</label>
                                    <input type="password" onChange={(e) => handleChange(e, "password")} value={passWord} onBlur={(value) => handleOnBlur(value, "password")} />
                                    {ErrorPassword && ErrorPassword.length > 0 && <div className="error-message">{ErrorPassword}</div>}
                                </Col>
                            </Row>
                            <input type="submit" value="Sign up" disabled={isError} />
                        </form>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
});

// export default reduxForm(
// {
//     form:'login_form',
//     enableReinitialize: true,
//     keepDirtyOnReinitialize: false,
// }
// )(LoginForm);

export default LoginForm;
