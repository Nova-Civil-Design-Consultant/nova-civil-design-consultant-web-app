import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "./components/About";
import ActionBanner from "./components/ActionBanner";
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Results from "./components/Results";
import AdminDashboard from "./components/Admin";
import SignIn from "./components/Signin";
import ProtectedRoute from "./ProtectedRoutes";
import checkSession from './helper/index';

const App = () => {
  const [user, setUser] = useState(() => checkSession()); // Load session from localStorage
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/admin" /> : <SignIn setUser={setUser} />} 
        />

        {/* Protected Routes */}
        <Route
          path="/admin/*"
          element={<ProtectedRoute role="admin" component={() => <AdminDashboard setUser={setUser} />} user={user} />}
        />
      </Routes>
    </Router>
  );
};

// Layout for public pages
const PublicLayout = () => (
  <div className="w-full flex flex-col">
    <section id="home">
      <Header />
    </section>
    <section id="features">
      <Features />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="services">
      <Banner />
    </section>
    <section id="news">
      <Articles />
    </section>
    <section id="results">
      <Results />
    </section>
    <section id="action-banner">
      <ActionBanner />
    </section>
    <section id="contact">
      <Footer />
    </section>
  </div>
);
export default App;
