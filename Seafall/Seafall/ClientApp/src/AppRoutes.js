import { About } from "./components/About";
import { Tombs } from "./components/Tombs";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/tombs',
    element: <Tombs />
  }
];

export default AppRoutes;
