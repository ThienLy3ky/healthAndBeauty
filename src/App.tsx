import { Routes, Route } from "react-router-dom";
import Client from "page/client/index";
import Admin from "page/admin";

function App() {
  return (
    <Routes>
      <Route path="/manage/*" element={<Admin />} />
      <Route path="/*" element={<Client />} />
    </Routes>
  );
}

export default App;
