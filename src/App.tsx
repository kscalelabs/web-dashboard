import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "@/App.css";

import NotFoundRedirect from "@/components/NotFoundRedirect";
import PendoInitializer from "@/components/PendoInitializer";
import { ScrollToTop } from "@/components/ScrollToTop";
import SprigInitializer from "@/components/SprigInitializer";
import Footer from "@/components/footer/Footer";
import GDPRBanner from "@/components/gdpr/gdprbanner";
import { FeaturedListingsProvider } from "@/components/listing/FeaturedListings";
import Navbar from "@/components/nav/Navbar";
import APIKeys from "@/components/pages/APIKeys";
import About from "@/components/pages/About";
import Account from "@/components/pages/Account";
import Browse from "@/components/pages/Browse";
import CreateShare from "@/components/pages/CreateShare";
import EmailSignup from "@/components/pages/EmailSignup";
import Eula from "@/components/pages/Eula";
import FileBrowser from "@/components/pages/FileBrowser";
import Home from "@/components/pages/Home";
import LinkRobot from "@/components/pages/LinkRobot";
import Listing from "@/components/pages/Listing";
import Login from "@/components/pages/Login";
import Logout from "@/components/pages/Logout";
import NotFound from "@/components/pages/NotFound";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import Profile from "@/components/pages/Profile";
import ResearchPage from "@/components/pages/ResearchPage";
import Signup from "@/components/pages/Signup";
import Terminal from "@/components/pages/Terminal";
import TermsOfService from "@/components/pages/TermsOfService";
import { AlertQueue, AlertQueueProvider } from "@/hooks/useAlertQueue";
import { AuthenticationProvider } from "@/hooks/useAuth";
import ROUTES from "@/lib/types/routes";
import ProtectedRoute from "@/components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <AuthenticationProvider>
        <FeaturedListingsProvider>
          <AlertQueueProvider>
            <AlertQueue>
              <ScrollToTop>
                <div className="min-h-screen bg-gray-12 text-gray-100 font-mono">
                  <Navbar />
                  <GDPRBanner />
                  <PendoInitializer />
                  <SprigInitializer />
                  <div className="flex-grow">
                    <div className="mt-24 mb-6 mx-4 sm:mx-6 md:mx-10 xl:mx-16 2xl:mx-28 max-full">
                      <Routes>
                        {/* Public routes */}
                        <Route path={ROUTES.SIGNUP.path} element={<Signup />} />
                        <Route path={ROUTES.SIGNUP.EMAIL.path} element={<EmailSignup />} />

                        {/* Protected routes */}
                        <Route
                          path={ROUTES.HOME.path}
                          element={
                            <ProtectedRoute>
                              <Home />
                            </ProtectedRoute>
                          }
                        />

                        {/* General pages */}
                        <Route
                          path={ROUTES.ABOUT.path}
                          element={
                              <About />
                          }
                        />
                        <Route
                          path={ROUTES.RESEARCH.path}
                          element={<ResearchPage />}
                        />
                        <Route
                          path={ROUTES.TOS.path}
                          element={<TermsOfService />}
                        />
                        <Route
                          path={ROUTES.PRIVACY.path}
                          element={<PrivacyPolicy />}
                        />
                        <Route path={ROUTES.EULA.path} element={<Eula />} />

                        {/* Account */}
                        <Route
                          path={ROUTES.ACCOUNT.path}
                          element={<Account />}
                        />
                        <Route path={ROUTES.LOGOUT.path} element={<Logout />} />
                        <Route path={ROUTES.SIGNUP.path} element={<Signup />} />
                        <Route
                          path={ROUTES.SIGNUP.EMAIL.path}
                          element={<EmailSignup />}
                        />
                        <Route path={ROUTES.KEYS.path} element={<APIKeys />} />
                        <Route
                          path={ROUTES.PROFILE.path}
                          element={<Profile />}
                        />

                        {/* Listings */}
                        <Route path={ROUTES.BOTS.path}>
                          <Route
                            path={ROUTES.BOTS.$.BROWSE.relativePath}
                            element={
                              <ProtectedRoute>
                                <Browse />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path={ROUTES.BOTS.$.CREATE.relativePath}
                            element={<CreateShare />}
                          />
                        </Route>
                        <Route
                          path={ROUTES.BOT.path}
                          element={
                            <ProtectedRoute>
                              <Listing />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path={ROUTES.FILE.path}
                          element={<FileBrowser />}
                        />

                        {/* Terminal */}
                        <Route
                          path={ROUTES.TERMINAL.path}
                          element={<Terminal />}
                        />
                        <Route
                          path={ROUTES.TERMINAL.WITH_ID.path}
                          element={<Terminal />}
                        />

                        {/* Link robot */}
                        <Route
                          path={ROUTES.LINK.path}
                          element={<LinkRobot />}
                        />

                        {/* Not found */}
                        <Route
                          path={ROUTES.NOT_FOUND.path}
                          element={
                            <ProtectedRoute>
                              <NotFound />
                            </ProtectedRoute>
                          }
                        />
                        <Route path="*" element={<NotFoundRedirect />} />
                      </Routes>
                    </div>
                  </div>
                  <Footer />
                </div>
              </ScrollToTop>
            </AlertQueue>
          </AlertQueueProvider>
        </FeaturedListingsProvider>
      </AuthenticationProvider>
    </Router>
  );
};

export default App;
