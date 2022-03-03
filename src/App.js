import AppRoutes from "routes/AppRoutes";
import ThemeProvider from "context/ThemeContext";
import 'styles/app.scss';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
