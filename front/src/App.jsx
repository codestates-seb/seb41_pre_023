import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import QuestionDetail from "./pages/QuestionDetail";
import QuestionsList from "./pages/QuestionsList";
import Signup from "./pages/Signup";
import QuestionAsk from "./pages/QuestionAsk";
// import Header from "./components/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <QuestionsList />,
        errorElement: <NotFound />,
    },
    {
        path: "/:questionId", //useParams()를 쓸때 ":"이용
        element: <QuestionDetail />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/register",
        element: <QuestionAsk />,
    },
]);

function App() {
    return (
        <>
            {/* <Header /> */}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
