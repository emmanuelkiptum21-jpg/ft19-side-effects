import { useState } from "react";
import ProductCard from "./product-card";

function RandomProduct({ products }) {
	const [randomProduct, setRandomProduct] = useState(null);

	const showRandomProduct = () => {
		if (products.length === 0) return;

		let randomIndex;

		do {
			randomIndex = Math.floor(Math.random() * products.length);
		} while (
			products.length > 1 &&
			products[randomIndex].id === randomProduct?.id
		);

		setRandomProduct(products[randomIndex]);
	};

	return (
		<div className="mt-10 flex flex-col items-center gap-4">

			<button
				onClick={showRandomProduct}
				className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-md"
			>
				Random Product
			</button>

			{randomProduct && (
				<div
					id={`random-product-${randomProduct.id}`}
					className="w-full max-w-sm"
				>
					<h2 className="text-xl font-bold mb-3 text-center">
						Random Product
					</h2>

					<ProductCard {...randomProduct} />

					{/* Button and ID side by side below the card */}
					<div className="flex items-center justify-center gap-4 mt-4">
						<button
							onClick={showRandomProduct}
							className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-md"
						>
							Next Random
						</button>

						<p className="text-sm font-medium">
							Product ID: {randomProduct.id}
						</p>
					</div>
				</div>
			)}

		</div>
	);
}

export default RandomProduct;