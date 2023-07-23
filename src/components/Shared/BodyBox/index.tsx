import WrapperStyles from "./styles";
interface Props {
  padding?: string;
  children: any;
}
const BodyBox = ({ children, padding }: Props) => {
  return <WrapperStyles padding={padding}>{children}</WrapperStyles>;
};

export default BodyBox;
