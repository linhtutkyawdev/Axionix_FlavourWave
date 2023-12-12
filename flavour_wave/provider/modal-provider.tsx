"use client";
import ProductDetailModal from "@/components/modal/product-detail-modal";
import usePreventHydration from "@/hook/use-prevent-hydration";

const ModalProvider = () => {
  usePreventHydration();

  return (
    <>
      <ProductDetailModal />
    </>
  );
};

export default ModalProvider;
