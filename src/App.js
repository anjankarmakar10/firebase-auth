import AppNavbar from "./components/Navbar/AppNavbar";
import AuthProvider from "./contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <AppNavbar />
    </AuthProvider>
  );
}

export default App;
