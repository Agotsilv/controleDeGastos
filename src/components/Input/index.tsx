import { TextInput, TextInputProps } from "react-native";
import { Container } from "./style";

type Props = TextInputProps;

export default function Input({ ...rest }: Props){
    return <Container {...rest}  />
}