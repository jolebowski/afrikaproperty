import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ToastProvider } from "./components/ui/Toast";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { BlogArticle } from "./pages/BlogArticle";
import { Contact } from "./pages/Contact";
import { DestinationDetail } from "./pages/DestinationDetail";
import { Destinations } from "./pages/Destinations";
import { FAQ } from "./pages/FAQ";
import { Home } from "./pages/Home";
import { Invest } from "./pages/Invest";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";
import { PropertiesList } from "./pages/PropertiesList";
import { PropertyDetail } from "./pages/PropertyDetail";
import { Publish } from "./pages/Publish";
import { CreateListing } from "./pages/promoter/CreateListing";
import { Dashboard as PromoterDashboard } from "./pages/promoter/Dashboard";
import { EditListing } from "./pages/promoter/EditListing";
import { PromoterLogin } from "./pages/promoter/Login";
import { PromoterLeads } from "./pages/promoter/PromoterLeads";
import { PromoterProfile } from "./pages/promoter/PromoterProfile";
import { PromoterSignup } from "./pages/promoter/Signup";

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<PropertiesList />} />
              <Route path="/properties/:id" element={<PropertyDetail />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:slug" element={<DestinationDetail />} />
              
              {/* Promoter Routes */}
              <Route path="/promoter/login" element={<PromoterLogin />} />
              <Route path="/promoter/signup" element={<PromoterSignup />} />
              <Route path="/promoter/dashboard" element={<PromoterDashboard />} />
              <Route path="/promoter/listings/create" element={<CreateListing />} />
              <Route path="/promoter/listings/edit/:id" element={<EditListing />} />
              <Route path="/promoter/leads" element={<PromoterLeads />} />
              <Route path="/promoter/profile" element={<PromoterProfile />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/publish" element={<Publish />} />
              
              {/* Utility Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal type="terms" />} />
              <Route path="/privacy" element={<Legal type="privacy" />} />
              <Route path="/cookies" element={<Legal type="cookies" />} />
              <Route path="*" element={<NotFound />} />
              {/* Add other routes here as we build them */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
