import { Box, Button } from "@mantine/core";
import { useCategoriesContext } from "../CategoriesProvider";

export default function ResetButtont({ show }: { show: boolean }) {
	const { resetFormData } = useCategoriesContext();
	return show ? (
		<Box ta="end">
			<Button c="red" bg="red.1" radius="md" onClick={resetFormData}>
				Reset
			</Button>
		</Box>
	) : null;
}
