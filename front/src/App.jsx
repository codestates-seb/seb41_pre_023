import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import QuestionDetail from "./pages/QuestionDetail";
import QuestionsList from "./pages/QuestionsList";
import Signup from "./pages/Signup";
import QuestionAsk from "./pages/QuestionAsk";
import Header from "./components/Header";

const withLayout = (Component) => {
    return (
        <>
            <Header />
            <Component />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: withLayout(QuestionsList),
        errorElement: <NotFound />,
    },
    {
        path: "/:questionId", //useParams()를 쓸때 ":"이용
        element: withLayout(QuestionDetail),
    },
    {
        path: "/login",
        element: withLayout(Login),
    },
    {
        path: "/logout",
        element: withLayout(Logout),
    },
    {
        path: "/signup",
        element: withLayout(Signup),
    },
    {
        path: "/register",
        element: withLayout(QuestionAsk),
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
