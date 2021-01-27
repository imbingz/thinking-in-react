import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from '../data/products';

function FilterableProductTable() {
	const [ filterText, setFilterText ] = useState('');
	const [ inStockOnly, setInStockOnly ] = useState(false);

	// handle Filter Search text change
	const handleFilterTextChange = (filterText) => {
		setFilterText(filterText);
	};
	// handle instock only checkbox change
	const handleInStockChange = (inStockOnly) => {
		setInStockOnly(inStockOnly);
	};

	return (
		<div align='center'>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				handleFilterTextChange={handleFilterTextChange}
				handleInStockChange={handleInStockChange}
			/>
			<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
		</div>
	);
}

export default FilterableProductTable;
