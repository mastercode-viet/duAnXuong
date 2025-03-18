import { ProductCard } from "./ProductCart";


const products = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9dd7c60ca1a478722aa5ee46e60df82bdb5d9386",
    altText: "Syltherine chair",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: "-30%",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/941f1e2e73c9afad206902369ff88a2ca0f2c300",
    altText: "Leviosa chair",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/73021452a887b9993682491c9b1b36e22663d4fb",
    altText: "Lolito sofa",
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: "-50%",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b675c945af46a9edaaace4d02afd2f9fe63eadc",
    altText: "Respira table",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4389533ebd2eb2fb5d09e9611cae5addf289eb65",
    altText: "Grifo lamp",
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/273169ed84d306dbdd2decc7f4f22fc643a98b40",
    altText: "Muggo mug",
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    badge: "New",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20635af7c8ae82de1a4cf57c7eb50404bd7d8a87",
    altText: "Pingky bed set",
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: "-50%",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c46498c62dba9cae574ba1a4a1fa42ee91bf385",
    altText: "Potty flower pot",
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    badge: "New",
  },
];

export const ProductGrid = () => {
  return (
    <section className="px-5 py-0 mx-auto my-0 max-w-[1236px]">
      <h1 className="mb-8 text-4xl font-bold text-center text-neutral-700 max-sm:text-3xl">
        Our Products
      </h1>
      <div className="grid gap-8 mb-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <button className="mx-auto my-0 h-12 text-base font-semibold text-yellow-600 bg-white border border-yellow-600 border-solid cursor-pointer w-[245px] max-sm:w-full hover:bg-yellow-50 transition-colors">
        Show More
      </button>
    </section>
  );
};

export default ProductGrid;
