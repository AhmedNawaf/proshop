import {
  LoaderFunctionArgs,
  useLoaderData,
  Link,
  useParams,
} from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Spinner,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { getProduct } from '../utils/products';
import { QueryClient, useQuery } from '@tanstack/react-query';

function productIdQuery(productId: string | undefined) {
  return {
    queryKey: ['product', productId],
    queryFn: async () => getProduct(productId),
  };
}

export async function loader(
  queryClient: QueryClient,
  { params }: LoaderFunctionArgs
) {
  return async () => {
    const { id } = params as { id: string };
    const query = productIdQuery(id);
    return queryClient.fetchQuery({
      ...query,
      staleTime: 1000 * 60 * 2,
    });
  };
}

function ProductDetails() {
  const initialData = useLoaderData() as Awaited<ReturnType<typeof getProduct>>;
  const params = useParams();
  const { data: product, isLoading } = useQuery({
    ...productIdQuery(params.id),
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
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetails;
