import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import { useAlertQueue } from "@/hooks/useAlertQueue";
import { useAuthentication } from "@/hooks/useAuth";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const GITHUB_OAUTH_URL_BASE =
  "https://github.com/login/oauth/authorize?scope=user:email&client_id=";

const GoogleAuthButton = ({ isSignup }: { isSignup: boolean }) => {
  const [credential, setCredential] = useState<string | null>(null);
  const auth = useAuthentication();
  const { addErrorAlert } = useAlertQueue();

  useEffect(() => {
    (async () => {
      if (credential !== null) {
        const { data, error } = await auth.client.POST("/auth/google/login", {
          body: {
            token: credential,
          },
        });

        if (error) {
          addErrorAlert(error);
        } else {
          auth.login(data.api_key);
        }
      }
    })();
  }, [credential]);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const returnedCredential = tokenResponse.access_token;
      if (returnedCredential === undefined) {
        addErrorAlert("Failed to login using Google OAuth.");
      } else {
        setCredential(returnedCredential);
      }
    },
    onError: () => {
      addErrorAlert("Failed to login using Google OAuth.");
    },
    onNonOAuthError: () => {
      addErrorAlert("Failed to login using Google OAuth.");
    },
  });

  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full hover:bg-gray-9 dark:hover:bg-gray-800 flex items-center justify-center gap-3"
      onClick={() => handleGoogleLogin()}
      disabled={credential !== null}
    >
      <FcGoogle className="w-5 h-5" />
      <span className="font-medium">
        {isSignup ? "Sign up with Google" : "Login with Google"}
      </span>
    </Button>
  );
};

const GoogleAuthButtonWrapper = ({ isSignup }: { isSignup: boolean }) => {
  const [googleClientId, setGoogleClientId] = useState<string | null>(null);
  const auth = useAuthentication();
  const { addErrorAlert } = useAlertQueue();

  useEffect(() => {
    (async () => {
      if (googleClientId !== null) return;

      const { data, error } = await auth.client.GET("/auth/google/client-id");
      if (error) {
        addErrorAlert(error);
      } else {
        setGoogleClientId(data.client_id);
      }
    })();
  }, [googleClientId]);

  return googleClientId === null ? (
    <Button
      variant={"outline"}
      size={"lg"}
      className="w-full hover:bg-gray-9 dark:hover:bg-gray-800 flex items-center justify-center gap-3"
      disabled={true}
    >
      <Spinner />
    </Button>
  ) : (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleAuthButton isSignup={isSignup} />
    </GoogleOAuthProvider>
  );
};

const GithubAuthButton = ({ isSignup }: { isSignup: boolean }) => {
  const [githubClientId, setGithubClientId] = useState<string | null>(null);
  const auth = useAuthentication();
  const { addErrorAlert } = useAlertQueue();

  useEffect(() => {
    (async () => {
      if (githubClientId !== null) return;

      const { data, error } = await auth.client.GET("/auth/github/client-id");
      if (error) {
        addErrorAlert(error);
      } else {
        setGithubClientId(data.client_id);
      }
    })();
  }, [githubClientId]);

  return githubClientId === null ? (
    <Button
      variant="outline"
      size="lg"
      className="w-full bg-gray-9 flex items-center justify-center gap-3"
      disabled={true}
    >
      <Spinner />
    </Button>
  ) : (
    <Button
      variant="outline"
      size="lg"
      className="w-full hover:bg-gray-9 dark:hover:bg-gray-800 flex items-center justify-center gap-3"
      onClick={() => {
        window.open(`${GITHUB_OAUTH_URL_BASE}${githubClientId}`, "_self");
      }}
    >
      <FaGithub className="w-5 h-5" />
      <span className="font-medium">
        {isSignup ? "Sign up with GitHub" : "Login with GitHub"}
      </span>
    </Button>
  );
};

interface AuthProviderProps {
  isSignup: boolean;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ isSignup }) => {
  return (
    <div className="flex flex-col w-full space-y-3">
      {/* Google */}
      <GoogleAuthButtonWrapper isSignup={isSignup} />

      {/* Github */}
      <GithubAuthButton isSignup={isSignup} />
    </div>
  );
};

export default AuthProvider;
