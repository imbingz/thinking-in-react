import React from 'react';

function SearchBar(props) {
	const { filterText, inStockOnly, handleFilterTextChange, handleInStockChange } = props;
	return (
		<form>
			<input
				type='text'
				placeholder='Search...'
				value={filterText}
				onChange={(e) => handleFilterTextChange(e.target.value)}
			/>
			<p>
				<input type='checkbox' value={inStockOnly} onChange={(e) => handleInStockChange(e.target.checked)} />
				<span style={{ color: 'green' }}>Only show products in stock</span>
			</p>
		</form>
	);
}

export default SearchBar;
