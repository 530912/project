import { useState } from "react";

export default function SignUpPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    function handleEmailChange(event) {
        setEmail(event.target.value);
        setErrorMessage("");
        setSuccessMessage("");
    }


    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setErrorMessage("");
        setSuccessMessage("");
    }


    function handleNicknameChange(event) {
        setNickname(event.target.value);
        setErrorMessage("");
        setSuccessMessage("");
    }


    function togglePasswordVisibility() {
        setShowPassword(
            (previousValue) => !previousValue
        );
    }


    function handleSubmit(event) {

        event.preventDefault();

        if (email.trim() === "") {
            setErrorMessage("이메일을 입력해주세요.");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setErrorMessage(
                "올바른 이메일 형식을 입력해주세요."
            );
            return;
        }

        if (password.length < 8) {
            setErrorMessage(
                "비밀번호는 8자 이상이어야 합니다."
            );
            return;
        }

        if (nickname.trim() === "") {
            setErrorMessage(
                "닉네임을 입력해주세요."
            );
            return;
        }

        setErrorMessage("");
        setSuccessMessage(
            "회원가입 입력이 완료되었습니다."
        );
    }


    const hasEmail =
        email.trim() !== "";

    const hasPassword =
        password.length >= 8;

    const hasNickname =
        nickname.trim() !== "";

    const isActive =
        hasEmail &&
        hasPassword &&
        hasNickname;


    return (
        <main className="signup-page">
            <div className="signup-container">
                <h1>CREATE ACCOUNT</h1>

            <form onSubmit={handleSubmit}>

                <div className="signup-field">
                    <label htmlFor="email">
                        EMAIL
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@example.com"
                    />
                </div>


                <div className="signup-field">
                    <label htmlFor="password">
                        PASSWORD
                    </label>

                    <input
                        id="password"
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="8 characters or more"
                    />

                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? "HIDE" : "SHOW"}
                    </button>
                </div>


                <div className="signup-field">
                    <label htmlFor="nickname">
                        NICKNAME
                    </label>

                    <input
                        id="nickname"
                        value={nickname}
                        onChange={handleNicknameChange}
                        placeholder="Nickname"
                    />
                </div>


                {errorMessage && (
                    <p>{errorMessage}</p>
                )}


                {successMessage && (
                    <p>{successMessage}</p>
                )}


                <button
                    type="submit"
                    disabled={!isActive}
                >
                    CREATE ACCOUNT
                </button>

            </form>

            </div>

        </main>
    );
}