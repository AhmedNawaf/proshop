import { Layout, Error } from './components';
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        index
        element={<Home />}
        loader={() => HomeLoader(queryClient)}
        errorElement={<Error />}
      />
      <Route
        path='product/:id'
        element={<ProductDetails />}
        loader={(obj) => ProductLoader(queryClient, obj)}
      />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
