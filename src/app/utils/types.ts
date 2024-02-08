export interface ICategory {
	id: number;
	name: string;
	description: string | null;
	image: string;
	slug: string;
	circle_icon: string;
	disable_shipping: number;
	children: ICategory[] | null;
}

export interface IProperty {
	id: number;
	name: string | null;
	description: string | null;
	slug: string | null;
	parent: number | null;
	list: boolean;
	type: string | null;
	value: string | null;
	other_value: string | null;
	options: IOption[];
}

export interface IOption {
	id: number;
	name: string | null;
	slug: string | null;
	parent: number | null;
	child: boolean;
}

// Categories Context Types
export type FormDataState = {
	categories: ICategory[];
	selectedCategory: ICategory | null;
	subCategories: ICategory[];
	selectedSubCategory: ICategory | null;
	properties: IProperty[];
	selected: Record<string, string>;
};

export type CategoriesContextType = FormDataState & {
	isLoading: boolean;
	handleCategoryChange: (value: string | null) => void;
	handleSubCategoryChange: (value: string | null) => void;
	updateSelectedData: (data: FormDataState["selected"]) => void;
   resetFormData: () => void;
};

export type PropertyInputState = {
	list: IOption[];
	selected: IOption | null;
	children: IProperty[];
	appendFreeInput: boolean;
	isLoading: boolean;
};
