import './App.css'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard.jsx";
import VerbList from "./pages/VerbList.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import LanguagePage from "./pages/LanguagePage.jsx";
import ModePage from "./pages/TypeGamePage.jsx";
import MyVerbList from "./pages/MyVerbList.jsx";
import SuscriptionPage from "./pages/SuscriptionPage.jsx";
import VisualGamePage from "./pages/VisualGamePage.jsx";
import KinesthesicGamePage from "./pages/KinesthesicGamePage.jsx";
import BadgesPage from "./pages/BadgesPage.jsx";
import AuditiveGamePage from "./pages/AuditiveGamePage.jsx";
import SettingsProfilePage from "./pages/SettingsProfilePage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "verblist",
        element: <VerbList />,
    },
    {
        path: "learning",
        element: <LearningPage />,
    },
    {
        path: "language",
        element: <LanguagePage />,
    },
    {
        path: "mode",
        element: <ModePage />,
    },
    {
        path: "my-verblist",
        element: <MyVerbList />,
    },
    {
        path: "settings-profile",
        element: <SettingsProfilePage />,
    },
    {
        path: "suscription",
        element: <SuscriptionPage />,
    },
    {
        path: "visual-game",
        element: <VisualGamePage />,
    },
    {
        path: "kinesthetic-game",
        element: <KinesthesicGamePage />,
    },
    {
        path: "badges",
        element: <BadgesPage />,
    },
    {
        path: "auditive-game",
        element: <AuditiveGamePage />,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App;