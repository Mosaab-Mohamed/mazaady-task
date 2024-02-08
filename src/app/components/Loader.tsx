import {
	Box,
	Loader as MantineLoader,
	LoaderProps as MantineLoaderProps,
} from "@mantine/core";

type LoaderProps = {
	show: boolean;
} & MantineLoaderProps;

export default function Loader({ show, ...resProps }: LoaderProps) {
	return show ? (
		<Box ta="center">
			<MantineLoader color="blue" size={20} {...resProps} />
		</Box>
	) : null;
}
