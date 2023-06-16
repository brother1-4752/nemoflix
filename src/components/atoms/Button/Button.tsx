import { StyledButton } from "./Button.styled";
import { ButtonVariant } from "./Button.type";

export type Props = {
  variant: ButtonVariant;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "LOGIN",
  children,
  ...rest
}: Props) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}
