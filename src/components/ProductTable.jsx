import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
	//decontruct props
	const { products, filterText, inStockOnly } = props;
	//set rows as an empty array that holds productcategory and product
	const rows = [];
	//set last category name as null
	let lastCategoryName = null;

	products.forEach((product) => {
		//check if products have product defined by filterText
		if (product.name.indexOf(filterText) === -1) {
			return;
		}

		//check if product is instock
		if (inStockOnly && !product.stocked) {
			return;
		}

		// for all other conditions
		if (product.category !== lastCategoryName) {
			// only render unique productcategory
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
