import * as React from "react";

interface SectionHeaderProps {
    title: string;
    description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <header className="flex flex-col items-center mb-16 text-center max-md:mb-10 max-sm:mb-8">
            <h2 className="mb-4 text-3xl font-bold text-zinc-800 max-md:text-3xl max-sm:text-2xl">
                {title}
            </h2>
            <p className="text-xl text-stone-500 max-md:text-lg max-sm:text-base">
                {description}
            </p>
        </header>
    );
};

interface CategoryCardProps {
    image: string;
    altText: string;
    title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, altText, title }) => {
    return (
        <article className="flex flex-col items-center">
            <img
                src={image}
                alt={altText}
                className="w-full h-[480px] object-cover rounded-[8px] mb-[20px]"
            />
            <h3 className="text-2xl font-bold text-zinc-800 max-md:text-xl max-sm:text-lg">
                {title}
            </h3>
        </article>
    );
};

interface CTAButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="gap-2.5 px-20 py-6 text-white uppercase bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200 max-md:px-5 max-md:mt-10"
        >
            {children}
        </button>
    );
};

const ContentBox: React.FC = () => {
    return (
        <article className="flex relative flex-col items-start pt-16 pr-20 pb-9 pl-10 mb-0 max-w-full bg-yellow-50 rounded-xl w-[643px] max-md:px-5 max-md:mb-2.5">
            <span className="font-semibold tracking-[3px]">New Arrival</span>
            <h2 className="mt-1 text-5xl text-yellow-600 leading-[65px] max-md:text-4xl max-md:leading-[55px]">
                Discover Our New Collection
            </h2>
            <p className="self-stretch mt-9 text-lg font-medium leading-6 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis.
            </p>
            <div className="mt-14">
                <CTAButton>Buy Now</CTAButton>
            </div>
        </article>
    );
};

const categories = [
    {
        image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/735a83c82561da4af201ad04aa2bb9c4a8f71b1a",
        altText: "Dining room",
        title: "Dining",
    },
    {
        image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/914d6d8ed2d3b2fd7c3ce44573114b03afb3da05",
        altText: "Living room",
        title: "Living",
    },
    {
        image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/720caf2bd8fe520774b76cf43dda5e6e2edad8b3",
        altText: "Bedroom",
        title: "Bedroom",
    },
];

const BrowseRange: React.FC = () => {
    return (
        <section className="flex flex-col items-center px-1 py-1 w-full max-md:py-3 max-sm:py-0">
            <div className="flex relative flex-col justify-center items-end px-20 py-36 w-full min-h-[717px] max-md:px-5 max-md:py-24 max-md:max-w-full text-base font-bold rounded-none text-zinc-800">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/253a8dd81b2d87ecf13debf779f838974579f2e947ac2ba526b729e58ba098cc"
                    alt="Collection Background"
                    className="object-cover absolute inset-0 size-full pointer-events-none"
                />
                <ContentBox />
            </div>
            <div className="flex flex-col items-center w-full max-w-[1200px] mt-20">
                <SectionHeader
                    title="Browse The Range"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.title}
                            image={category.image}
                            altText={category.altText}
                            title={category.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrowseRange;