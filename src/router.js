import BaseLayout from "./components/BaseLayout/BaseLayout";
import FullLayout from "./components/FullLayout/FullLayout";
import Blank from "./pages/Blank";
import Login from "./pages/Login/Login";

const router = [
  {
    path: "/",
    layout: BaseLayout,
    component: Blank,
  },
  {
    path: "/login",
    layout: FullLayout,
    component: Login,
  },
];

export default router;
