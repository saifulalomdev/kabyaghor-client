import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";
import MainLayout from "./layouts/main-layout";
import SignUp from "./pages/sign-up";
import HomePage from "./pages/home";
import { useStatusBar } from "./hooks/use-status-bar";
import { useEffect } from "react";
import WritePage from "./pages/write";
import StorePage from "./pages/store";
import ProductDetailsPage from "./pages/product-details";
import SavedPage from "./pages/saved";
import SearchPage from "./pages/search";
import SettingsPage from "./pages/settings";
import NotificationsPage from "./pages/notifications";

export default function App() {
  const { updateStatusBar } = useStatusBar();

  useEffect(() => {
    updateStatusBar({ color: '#1E3A8A', style: 'DARK' });
  }, [updateStatusBar]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage/>}/>
        <Route element={<MainLayout />}>

          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/store/product-details" element={<ProductDetailsPage />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
