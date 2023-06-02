import { Layout } from './components';
import Home, { loader as HomeLoader } from './pages/Home';
import ProductDetails, {
  loader as ProductLoader,
} from './pages/ProductDetails';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={HomeLoader} />
      <Route
        path='product/:id'
        element={<ProductDetails />}
        loader={ProductLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
