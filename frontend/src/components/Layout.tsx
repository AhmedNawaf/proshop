import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Layout() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
