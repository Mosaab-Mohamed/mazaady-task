"use client";
import { Grid } from "@mantine/core";
import CategoriesProvider from "./CategoriesProvider";
import CategoriesForm from "./CategoriesForm";
import CategoriesTable from "./CategoriesTable";

export default function Page() {
	return (
		<div className="container mx-auto">
			<CategoriesProvider>
				<Grid gutter="lg">
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<CategoriesForm />
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<CategoriesTable />
					</Grid.Col>
				</Grid>
			</CategoriesProvider>
		</div>
	);
}
