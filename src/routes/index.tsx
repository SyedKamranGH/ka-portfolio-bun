// routes/index.tsx
import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Layout from "../layout";
// import ErrorBoundary from "../components/ErrorBoundary";

// Lazy load pages for better performance
// const Homepage = lazy(() => import("../pages/Homepage"));
// const ExperienceDetail = lazy(() => import("../pages/ExperienceDetail"));

// Loading component
const LoadingFallback: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="50vh"
  >
    <CircularProgress color="primary" size={60} />
  </Box>
);

// Error fallback component
const ErrorFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="50vh"
    textAlign="center"
    p={3}
  >
    <h2>Something went wrong</h2>
    <p>{error?.message || "An unexpected error occurred"}</p>
    <button onClick={() => window.location.reload()}>Reload Page</button>
  </Box>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            {/* <ErrorBoundary fallback={<ErrorFallback />}>
              <Homepage />
            </ErrorBoundary> */}
          </Suspense>
        ),
      },
      {
        path: "experience/:id",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            {/* <ErrorBoundary fallback={<ErrorFallback />}>
              <ExperienceDetail />
            </ErrorBoundary> */}
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
