import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type Props = {
  children: React.ReactNode;
  isLogged?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Authorization({ children, isLogged = false }: Props) {
  const navigate = useNavigate();

  const abc = useCallback(() => {
    navigate("/login");
  }, []);

  useEffect(() => {
    if (!isLogged) {
      abc();
    }
  }, []);

  return <div>{children}</div>;
}
