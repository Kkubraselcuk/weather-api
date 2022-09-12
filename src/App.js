import './App.scss';
import Home from './components/Home';
import Detail from './components/Detail';
import { LoginProvider } from './context/LoginContext';
import { WeatherProvider } from './context/WeatherContext';
import ErrorBoundary from './components/ErrorBoundary';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
function App() {
  return (
    <>
    
      <LoginProvider>
        <WeatherProvider>
        <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cityName" element={<ErrorBoundary type="detail"><Detail /> </ErrorBoundary>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
        </Routes>
      </BrowserRouter>
        </WeatherProvider>
      </LoginProvider>
    </>
  );
}

export default App;
