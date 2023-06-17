import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type Props = {
  children: React.ReactNode;
  isLogged?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Authorization({ children, isLogged = false }: Props) {
  const navigate = useNavigate();

  const RouteToLoginPage = () => {
    useEffect(() => {
      navigate("/login");
    }, []);
  };

  if (!isLogged) {
    RouteToLoginPage();
  }

  return <div>{children}</div>;
}
