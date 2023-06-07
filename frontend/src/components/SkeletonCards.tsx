import { Card, Placeholder, Col } from 'react-bootstrap';

function SkeletonCards() {
  return (
    <>
      {new Array(8).fill(0).map((_, index) => (
        <Col key={index} sm={12} md={6} lg={4} xl={3}>
          <Card className='my-3 p-3 rounded'>
            <Placeholder as={Card.Img} />
            <Card.Body>
              <Placeholder as={Card.Title} animation='glow'>
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={6} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default SkeletonCards;
