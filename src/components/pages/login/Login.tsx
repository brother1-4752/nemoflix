import { useCallback, useEffect, useState } from "react";
import { StyledLogin } from "./Login.styled";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isBack, setIsBack] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    setIsBack(true);
  };

  const callbackFn = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (isBack) {
      callbackFn();
    }
  }, [isBack, callbackFn]);

  return (
    <StyledLogin>
      Login
      <button onClick={handleBack}>뒤로가기</button>
    </StyledLogin>
  );
}
