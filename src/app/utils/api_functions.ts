import axiosInstance from "./axios";
import { ICategory, IProperty } from "./types";

export async function fetchCategories(): Promise<{ categories: ICategory[] }> {
	const response = await axiosInstance.get("/get_all_cats");
	return response.data;
}

export async function fetchProperties(id: number): Promise<IProperty[]> {
	const response = await axiosInstance.get(`/properties?cat=${id}`);
	return response.data;
}

export async function fetchOptionsChild(id: number): Promise<IProperty[]> {
	const response = await axiosInstance.get(`/get-options-child/${id}`);
	return response.data;
}
