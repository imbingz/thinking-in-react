import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from '../data/products';

function FilterableProductTable() {
	return (
		<div align='center'>
			<SearchBar />
			<ProductTable products={products} />
		</div>
	);
}

export default FilterableProductTable;
