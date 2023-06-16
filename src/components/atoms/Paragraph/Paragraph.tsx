import { StyledParagraph } from "./Paragraph.styled";
import { ParagraphVariant } from "./Paragraph.type";

export type Props = {
  children?: React.ReactNode;
  variant: ParagraphVariant;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function Paragraph({
  children,
  variant = "MAIN",
  ...rest
}: Props) {
  return (
    <StyledParagraph variant={variant} {...rest}>
      {children}
    </StyledParagraph>
  );
}
