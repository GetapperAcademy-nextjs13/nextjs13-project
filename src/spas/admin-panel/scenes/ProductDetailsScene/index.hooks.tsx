import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectors } from "@/spas/admin-panel/redux-store";
import { useMemo } from "react";

export const useProductDetailsScene = () => {
  const { productId } = useParams();
  const productList = useSelector(selectors.getProductsList);

  const product = useMemo(
    () => productList.find((p) => p.id === productId),
    [productId, productList],
  );
  return { product };
};
