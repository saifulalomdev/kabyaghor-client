import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";
import MainLayout from "./layouts/main-layout";
import SignUp from "./pages/sign-up";
import HomePage from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
