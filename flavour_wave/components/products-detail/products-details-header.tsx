import Image from "next/image";

interface ProductsDetailsHeaderProps {
  name?: string;
}

const ProductsDetailsHeader = ({ name }: ProductsDetailsHeaderProps) => {
  return (
    <div className="relative w-full h-[120px]">
      <div className="absolute w-full h-full bg-white/80 z-10"></div>
      <Image
        src={"/banner.jpg"}
        alt="img"
        fill
        className="object-cover w-full"
      />
      <h2 className="absolute top-[50%] translate-y-[-50%] z-20 ml-28 font-semibold text-2xl ">
        Product Detail/{name}
      </h2>
    </div>
  );
};

export default ProductsDetailsHeader;
