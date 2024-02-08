import { ICategory } from "@/app/utils/types";
import { Select, SelectProps } from "@mantine/core";

type CategoryInputProps = {
	categories: ICategory[];
	selectedCategory: ICategory | null;
} & SelectProps;

export default function CategoryInput(props: CategoryInputProps) {
	const { categories, selectedCategory, ...restProps } = props;
	const data = [...new Set(categories)].map((cat) => cat.name);

	return (
		<Select
			mb="lg"
			data={data}
			value={selectedCategory?.name || null}
			{...restProps}
		/>
	);
}
