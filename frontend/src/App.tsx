import { Header, Footer } from './components';
import { Container } from 'react-bootstrap';
import { Home } from './pages';
function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
