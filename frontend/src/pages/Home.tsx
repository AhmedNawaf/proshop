import { Row, Col, Spinner } from 'react-bootstrap';
import { Product } from '../components';
import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../utils/products';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { IProduct } from '../types/product';
function productsQuery() {
  return {
    queryKey: ['products'],
    queryFn: getProducts,
  };
}

export async function loader(queryClient: QueryClient) {
  return async () => {
    const query = productsQuery();
    return queryClient.fetchQuery({
      ...query,
      staleTime: 1000 * 60 * 2,
    });
  };
}
function Home() {
  const initialData = useLoaderData() as IProduct[];
  const { data: products, isLoading } = useQuery({
    ...productsQuery(),
    initialData,
  });

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
