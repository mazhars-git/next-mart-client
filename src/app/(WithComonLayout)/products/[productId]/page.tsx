const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  return (
    <div>
      <h1>{(await params).productId}</h1>
    </div>
  );
};

export default ProductDetailsPage;
