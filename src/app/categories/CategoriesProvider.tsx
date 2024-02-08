import {
	createContext,
	useState,
	useContext,
	useEffect,
	PropsWithChildren,
} from "react";
import { fetchCategories, fetchProperties } from "@/app/utils/api_functions";
import type { CategoriesContextType, FormDataState } from "@/app/utils/types";

const CategoriesContext = createContext<CategoriesContextType | null>(null);

export default function CategoriesProvider(props: PropsWithChildren) {
	const [formData, setFormData] = useState<FormDataState>({
		categories: [],
		selectedCategory: null,
		subCategories: [],
		selectedSubCategory: null,
		properties: [],
		selected: {},
	});
	const [isLoading, setIsLoading] = useState(false);

	// Set Categories list on initial rendering
	useEffect(() => {
		fetchCategories()
			.then((data) =>
				setFormData((prev) => ({ ...prev, categories: data.categories }))
			)
			.catch((error) => console.log(error));
	}, []);

	// Update main category on selecting one
	const handleCategoryChange = (value: string | null) => {
		const _category = formData.categories.find((cat) => cat.name === value);
		setFormData((prev) => ({
			...prev,
			selectedCategory: _category || null,
			subCategories: _category?.children || [],
			selectedSubCategory: null,
			properties: [],
		}));
	};

	// Update subCategory and fetch its properties on selecing subCategory
	const handleSubCategoryChange = (value: string | null) => {
		const _category = formData.subCategories.find(
			(cat) => cat.name === value
		);
		setFormData((prev) => ({
			...prev,
			selectedSubCategory: _category || null,
		}));
		if (_category) {
			setIsLoading(true);
			fetchProperties(_category.id)
				.then((data) =>
					setFormData((prev) => ({ ...prev, properties: data }))
				)
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}
	};

	const updateSelectedData = (data: Record<string, string>) => {
		setFormData((prev) => ({ ...prev, selected: data }));
	};

	const resetFormData = () => {
		setFormData((prev) => ({
			...prev,
			selectedCategory: null,
			subCategories: [],
			selectedSubCategory: null,
			properties: [],
			selected: {},
		}));
	};

	return (
		<CategoriesContext.Provider
			value={{
				...formData,
				isLoading,
				handleCategoryChange,
				handleSubCategoryChange,
				updateSelectedData,
				resetFormData,
			}}
		>
			{props.children}
		</CategoriesContext.Provider>
	);
}

export const useCategoriesContext = () => useContext(CategoriesContext)!;
