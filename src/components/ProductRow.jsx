import React from 'react';

function ProductRow(props) {
	const { product } = props;

	return (
		<tr>
			<td align='left'>{product.name}</td>
			<td align='right'>{product.price}</td>
		</tr>
	);
}

export default ProductRow;
