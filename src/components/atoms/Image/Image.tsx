import { StyledImage } from "./Image.styled";

import { ImageVariant } from "./Image.type";

export type Props = {
  url: string;
  variant: ImageVariant;
} & React.HTMLAttributes<HTMLDivElement>;

const Image = ({ url, variant = "MAIN", ...rest }: Props) => {
  return <StyledImage url={url} variant={variant} {...rest}></StyledImage>;
};

export default Image;
