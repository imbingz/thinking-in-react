import React from 'react';

function SearchBar() {
	return (
		<form>
			<input type='text' placeholder='Search...' />
			<p>
				<input type='checkbox' />
				<span style={{ color: 'green' }}>Only show products in stock</span>
			</p>
		</form>
	);
}

export default SearchBar;
