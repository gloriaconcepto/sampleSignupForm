import React from "react";
import { Row, Col } from "reactstrap";

const LoginPageTwo = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={{ size: 6, offset: 3 }} sm={{ size: 12 }}>
                    <div className="login_right_text">
                        <h3>Already have an account?</h3>
                        <p>it's easy to start,just sign in with you</p>
                        <p>Facebook account or email </p>
                        <button type="button" className="btn btn-light">
                            Sign in
                        </button>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default LoginPageTwo;
