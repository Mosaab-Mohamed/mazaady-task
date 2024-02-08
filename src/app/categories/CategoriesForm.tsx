"use client";
import { Box, Button, Paper } from "@mantine/core";
import CategoryInput from "./components/CategoryInput";
import PropertyInput from "./components/PropertyInput";
import { useCategoriesContext } from "./CategoriesProvider";
import Loader from "../components/Loader";
import ResetButtont from "./components/ResetButtont";

export default function Form() {
	const {
		categories,
		selectedCategory,
		subCategories,
		selectedSubCategory,
		properties,
		isLoading,
		handleCategoryChange,
		handleSubCategoryChange,
		updateSelectedData,
	} = useCategoriesContext();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const values: Record<string, any> = {};
		formData.forEach((value, key) => {
			values[key] = value;
		});
		updateSelectedData(values);
		e.currentTarget.reset();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Box>
			<Paper shadow="sm" radius="md" p="md">
				<ResetButtont show={Boolean(selectedCategory)} />
				<form onSubmit={handleSubmit}>
					<CategoryInput
						label="Category"
						name="Category"
						placeholder="Select a category"
						categories={categories}
						selectedCategory={selectedCategory}
						onChange={handleCategoryChange}
					/>
					<CategoryInput
						label="Sub Category"
						name="Sub Category"
						placeholder="Select a sub category"
						categories={subCategories}
						selectedCategory={selectedSubCategory}
						onChange={handleSubCategoryChange}
					/>
					<Box pl="lg" style={{ borderLeft: "1px solid #d6d6d6" }}>
						{properties.map((prop) =>
							prop.options.length > 0 ? (
								<PropertyInput key={prop.id} {...prop} />
							) : null
						)}
					</Box>
					<Loader show={isLoading} />
					<Button type="submit" className="gradient-button rounded-xl">
						Apply
					</Button>
				</form>
			</Paper>
		</Box>
	);
}
