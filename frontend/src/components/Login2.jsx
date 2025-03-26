import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login2.css";

function Login2() {
    const [memberName, setMemberName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!memberName || !password) {
            setErrorMsg('Please fill in both fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: memberName,
                    password: password
                }),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('username', data.username);
                localStorage.setItem('isAdmin', data.isAdmin);
                navigate('/books');
            } else {
                setErrorMsg(data.message || 'Login failed');
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMsg("Server error. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {errorMsg && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMsg}</div>}
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Enter member name"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login2;
