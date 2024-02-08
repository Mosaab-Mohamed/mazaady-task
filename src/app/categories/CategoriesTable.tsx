import { Paper, Table } from "@mantine/core";
import { useCategoriesContext } from "./CategoriesProvider";

export default function CategoriesTable() {
	const { selected: data } = useCategoriesContext();

	const rows = Object.entries(data);

	if (rows.length < 1) return null;

	return (
		<Paper p="md" shadow="sm" radius="md">
			<Table>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Name</Table.Th>
						<Table.Th>Value</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{rows.map((item, index) => (
						<Table.Tr key={index}>
							<Table.Td>{item[0]}</Table.Td>
							<Table.Td>{item[1]}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</Paper>
	);
}
