import { Row, Col } from 'react-bootstrap';
import { Product, SkeletonCards } from '../components';
import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../utils/products';
import { QueryClient, useQuery } from '@tanstack/react-query';

function productsQuery() {
  return {
    queryKey: ['products'],
    queryFn: getProducts,
  };
}

export function loader(queryClient: QueryClient) {
  return async () => {
    const query = productsQuery();
    return queryClient.ensureQueryData(query);
  };
}
function Home() {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loader>>
  >;

  const { data: products, isLoading } = useQuery({
    ...productsQuery(),
    initialData,
    staleTime: 1000 * 60 * 2,
    useErrorBoundary: true,
  });

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {isLoading ? (
          <SkeletonCards />
        ) : (
          products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
}

export default Home;
