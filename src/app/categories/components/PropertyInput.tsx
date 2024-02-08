"use client";
import { useState } from "react";
import { Box, Select, SelectProps } from "@mantine/core";
import { IProperty, IOption, PropertyInputState } from "@/app/utils/types";
import { fetchOptionsChild } from "@/app/utils/api_functions";
import Loader from "@/app/components/Loader";
import FreeInput from "@/app/components/FreeInput";

type PropertyInputProps = Omit<SelectProps, keyof IProperty> & IProperty;

export default function PropertyInput(props: PropertyInputProps) {
	const [options, setOptions] = useState<PropertyInputState>({
		list: props.options || [],
		selected: null,
		children: [],
		appendFreeInput: false,
		isLoading: false,
	});

	const handlePropertyChange = (value: string | null) => {
		if (value === "Other") {
			return setOptions((prev) => ({
				...prev,
				children: [],
				appendFreeInput: true,
				selected: null,
			}));
		}
		const _option = options.list.find((option) => option.name === value);
		setOptions((prev) => ({
			...prev,
			selected: _option || null,
			appendFreeInput: false,
		}));
		fetchOptionChildren(_option);
	};

	const fetchOptionChildren = (option: IOption | undefined) => {
		if (!option?.child) return;
		setOptions((prev) => ({ ...prev, isLoading: true }));
		fetchOptionsChild(option.id)
			.then((data) => setOptions((prev) => ({ ...prev, children: data })))
			.catch((error) => console.log(error))
			.finally(() => setOptions((prev) => ({ ...prev, isLoading: false })));
	};

	const data = [
		...new Set(props.options.map((option) => option.name || "")),
		"Other",
	];

	return (
		<Box mb="lg">
			<Select
				mb="sm"
				label={props.name}
				name={props.name || ""}
				placeholder="Select an option"
				data={data}
				value={
					options.selected?.name ||
					(options.appendFreeInput && "Other") ||
					""
				}
				onChange={handlePropertyChange}
			/>
			<Box pl="lg" style={{ borderLeft: "1px solid #d6d6d6" }}>
				{options.children.map((prop) => (
					<PropertyInput key={prop.id} {...prop} />
				))}
			</Box>
			<FreeInput show={options.appendFreeInput} name={props.name || ""} />
			<Loader show={options.isLoading} />
		</Box>
	);
}
