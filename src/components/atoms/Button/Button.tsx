import { StyledButton } from "./Button.styled";
import { ButtonVariant } from "./Button.type";

export type Props = {
  variant: ButtonVariant;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "LOGIN",
  disabled,
  children,
  ...rest
}: Props) {
  return (
    <StyledButton variant={variant} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
}
