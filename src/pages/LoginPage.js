import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import authService from "../services/authService";
import '../styles/LoginPage.css'; 

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await authService.login(email, password);
      if (response.success) {
        localStorage.setItem("token", response.token);
        navigate("/home"); // Dopo il login vai alla home
      } else {
        alert("Login failed: " + response.message);
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Error during login");
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleLogin}>Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className="mx-2" color="danger" onClick={() => navigate("/register")}>
                Register
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
