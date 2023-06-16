import { StyledImage } from "./Image.styled";

import { ImageVariant } from "./Image.type";

//TODO:HTMLImageElement => HTMLDivElement로 바꿨는데 어떤 문제가 있을까?
export type Props = {
  url: string;
  variant: ImageVariant;
} & React.HTMLAttributes<HTMLDivElement>;

//TODO:img src프로퍼티와 css프로퍼티 background: url()로 주는 것의 차이는?
const Image = ({ url, variant = "MAIN", ...rest }: Props) => {
  return <StyledImage url={url} variant={variant} {...rest}></StyledImage>;
};

export default Image;
