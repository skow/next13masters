import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Obuwie",
		name: "Buty Adidas białe",
		price: 2105,
		coverImage: {
			alt: "",
			src: "/products/product_1.jpg",
		},
	},
	{
		id: "2",
		category: "Obuwie",
		name: "Buty Adidas czarne",
		price: 2243,
		coverImage: {
			alt: "",
			src: "/products/product_2.jpg",
		},
	},
	{
		id: "3",
		category: "Obuwie",
		name: "Buty Adidas Biało Zielone",
		price: 3342,
		coverImage: {
			alt: "",
			src: "/products/product_3.jpg",
		},
	},
	{
		id: "4",
		category: "Obuwie",
		name: "Buty Karl Lagerfeld",
		price: 4222,
		coverImage: {
			alt: "",
			src: "/products/product_4.jpg",
		},
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-6xl">
				<ProductList products={products} />
			</section>
		</main>
	);
}
