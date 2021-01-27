import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
	//decontruct props
	const { products } = props;
	//set rows as an empty array that holds productcategory and product
	const rows = [];
	//set last category name as null
	let lastCategoryName = null;

	products.forEach((product) => {
		// only render unique productcategory
		if (product.category !== lastCategoryName) {
			rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
		}
		//if same, set lastCategoryName as product category name
		lastCategoryName = product.category;
		//render product
		rows.push(<ProductRow product={product} key={product.name} />);
	});

	return (
		<table>
			<thead>
				<tr>
					<th align='left'>Name</th>
					<th align='right'>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

export default ProductTable;
