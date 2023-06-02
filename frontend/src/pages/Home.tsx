import { Row, Col } from 'react-bootstrap';
import { IProduct } from '../types/product';
import { Product } from '../components';
import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../utils/products';

export async function loader() {
  const products: IProduct[] = await getProducts();
  return products;
}
function Home() {
  const products = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
