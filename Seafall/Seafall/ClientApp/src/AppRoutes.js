import { About } from "./components/About";
import { Tombs } from "./components/Tombs";
import { Home } from "./components/Home";
import { Milestones } from "./components/Milestones";
import { CaptainsBook } from "./components/CaptainsBook";

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
    },
    {
    path: '/milestones',
    element: <Milestones />
    },
    {
    path: '/captainsbook',
    element: <CaptainsBook />
    }
];

export default AppRoutes;
