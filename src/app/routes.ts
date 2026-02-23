import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { ClassDetailPage } from "./pages/ClassDetailPage";
import { BookingPage } from "./pages/BookingPage";
import { PaymentPage } from "./pages/PaymentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/search",
    Component: SearchResultsPage,
  },
  {
    path: "/class/:id",
    Component: ClassDetailPage,
  },
  {
    path: "/booking/:id",
    Component: BookingPage,
  },
  {
    path: "/payment/:id",
    Component: PaymentPage,
  },
]);
