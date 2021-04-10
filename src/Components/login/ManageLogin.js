import React from "react";
import { toast } from "react-toastify";
import LoginForm from "./LoginForm";
import LoginPageTwo from "./LoginPageTwo";
import { apiCall } from "../../ResponseHandler/apiCalls";
import { Row, Col, Button, ButtonToolbar, Spinner } from "reactstrap";
const ManageLogin = (props) => {
    const signIn = (data) => {
        login(data);
    };
    const login = async (requestBody) => {
        try {
            let response = await apiCall("POST", requestBody);
            if (response) {
                toast.success(`${requestBody.name} sign in successfully`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: false,
                });
            }
        } catch (error) {
            console.error(error);
            toast.error(`Sign in was not successfully`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <div className="row no-gutters">
            {/* <section className="loginPage left"> */}
            <div className="split-pane col-xs-12 col-sm-6 ">
                <div className="left">
                    <LoginForm signIn={signIn} />
                </div>
            </div>

            {/* </section> */}

            {/* <section className="loginPage right"> */}
            <div className="split-pane col-xs-12 col-sm-6 ">
                <div className="right">
                    <LoginPageTwo />
                </div>
            </div>

            {/* </section> */}
        </div>
    );
};
//REDUX CONNECT WILL BE HERE
export default ManageLogin;
