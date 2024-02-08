import { TextInput, TextInputProps } from "@mantine/core";

type FreeInputProps = {
	show: boolean;
} & TextInputProps;

export default function FreeInput({ show, ...restProps }: FreeInputProps) {
	return show ? <TextInput {...restProps} /> : null;
}
