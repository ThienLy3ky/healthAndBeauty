import { Routes, Route } from "react-router-dom";
import Client from "page/client/index";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Client />} />
    </Routes>
  );
}

export default App;
