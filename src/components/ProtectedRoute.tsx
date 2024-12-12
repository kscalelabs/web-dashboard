import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "@/hooks/useAuth";
import ROUTES from "@/lib/types/routes";
import { useFeaturedListings } from "@/components/listing/FeaturedListings";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuthentication();
  const location = useLocation();
  const { featuredListings } = useFeaturedListings();

  const publicPaths = [
    ROUTES.SIGNUP.path,
    ROUTES.SIGNUP.EMAIL.path,
  ] as const;

  if (publicPaths.some(path => location.pathname === path)) {
    return <>{children}</>;
  }

  if (location.pathname.includes('/bots/browse') && !isAuthenticated) {
    return <Navigate to="https://dashboard.kscale.dev" state={{ from: location }} replace />;
  }

  if (location.pathname.startsWith('/bot/')) {
    const isFeaturedListing = featuredListings?.some(listing => {
      const listingPath = ROUTES.BOT.buildPath({
        username: listing.username,
        slug: listing.slug || "",
      });
      return location.pathname === listingPath;
    });

    if (!isAuthenticated && !isFeaturedListing) {
      return <Navigate to="https://dashboard.kscale.dev" state={{ from: location }} replace />;
    }
  } else if (!isAuthenticated) {
    return <Navigate to="https://dashboard.kscale.dev" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
