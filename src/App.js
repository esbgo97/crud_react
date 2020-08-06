import React from "react";
import "./App.css";
import { Header } from "./ui/partials";
import UserPage from "./ui/pages/user/UserPage";

function App() {
  return (
    <div>
      <Header />
      <UserPage />
    </div>
  );
}

export default App;
