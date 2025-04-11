import React, { useState, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/Dashboard";
// Import Toaster từ react-hot-toast
import { Toaster } from "react-hot-toast";

// Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please refresh the page.</h2>;
    }

    return this.props.children;
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dashboard />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}

      {/* Toaster để hiển thị thông báo toast */}
      <ErrorBoundary>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#fff",
              color: "#333",
            },
            success: {
              style: {
                background: "#EDFBD8",
                border: "1px solid #A3D9A5",
                color: "#0A541E",
              },
            },
            error: {
              style: {
                background: "#FDEDED",
                border: "1px solid #F1AEB5",
                color: "#842029",
              },
            },
          }}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;
