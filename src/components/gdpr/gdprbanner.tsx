import React, { useEffect, useState } from "react";

const GDPRBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptOutForm, setShowOptOutForm] = useState(false);
  const [sprigConsent, setSprigConsent] = useState(true);
  const [googleAnalyticsConsent, setGoogleAnalyticsConsent] = useState(true);
  const [pendoConsent, setPendoConsent] = useState(true);

  useEffect(() => {
    const consentGiven = localStorage.getItem("gdpr-consent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sprig-consent", "true");
    localStorage.setItem("google-analytics-consent", "true");
    localStorage.setItem("pendo-consent", "true");
    localStorage.setItem("gdpr-consent", "true");
    setIsVisible(false);
    window.location.reload();
  };

  const handleOptOut = () => {
    setShowOptOutForm(true);
  };

  const handleSaveOptOutPreferences = () => {
    localStorage.setItem("sprig-consent", sprigConsent.toString());
    localStorage.setItem(
      "google-analytics-consent",
      googleAnalyticsConsent.toString(),
    );
    localStorage.setItem("pendo-consent", pendoConsent.toString());
    localStorage.setItem("gdpr-consent", "true");
    setShowOptOutForm(false);
    setIsVisible(false);
    window.location.reload();
  };

  const handleBackToBanner = () => {
    setShowOptOutForm(false);
  };

  return (
    <>
      {isVisible && !showOptOutForm && (
        <div className="bg-background p-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg flex flex-col items-center z-50 shadow-md rounded-lg border border-foreground">
          <div className="text-foreground text-xs sm:text-sm text-center mb-2 max-w-full">
            We value your privacy 🔒 <br />
            We use cookies to make it easier to interact with our website and to
            improve it. We want to better understand how our website is used.
            You can find out more about our use of cookies in our
            <a
              href="https://kscale.dev/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline ml-1"
            >
              Privacy Policy
            </a>
            .
          </div>
          <div className="flex justify-center gap-2">
            <button
              className="bg-background text-foreground border border-foreground rounded-full px-4 py-2 text-sm hover:bg-foreground"
              onClick={handleOptOut}
            >
              Opt out
            </button>
            <button
              className="bg-foreground text-foreground2 rounded-full px-4 py-2 transition-colors duration-300 hover:bg-foreground1"
              onClick={handleAccept}
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {showOptOutForm && (
        <div className="bg-background p-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg flex flex-col items-center z-50 shadow-md rounded-lg border border-foreground">
          <div className="text-foreground text-sm text-center mb-2 max-w-full">
            Please select which services you would like to opt out of.
          </div>

          <div className="flex justify-between w-full px-4 py-2">
            <label className="text-foreground text-sm">Necessary</label>
            <input
              type="checkbox"
              checked={true}
              disabled
              className="toggle-checkbox"
            />
          </div>

          <div className="flex justify-between w-full px-4 py-2">
            <label className="text-foreground text-sm">Analytics</label>
            <input
              type="checkbox"
              checked={googleAnalyticsConsent}
              onChange={() =>
                setGoogleAnalyticsConsent(!googleAnalyticsConsent)
              }
              className="toggle-checkbox"
            />
          </div>

          <div className="flex justify-between w-full px-4 py-2">
            <label className="text-foreground text-sm">User Experience</label>
            <input
              type="checkbox"
              checked={sprigConsent && pendoConsent}
              onChange={() => {
                setSprigConsent(!sprigConsent);
                setPendoConsent(!pendoConsent);
              }}
              className="toggle-checkbox"
            />
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <button
              className="bg-background text-foreground border border-foreground rounded-full px-4 py-2 text-sm hover:bg-foreground"
              onClick={handleBackToBanner}
            >
              Back
            </button>
            <button
              className="bg-foreground text-background rounded-full px-4 py-2 transition-colors duration-300 hover:bg-foreground"
              onClick={handleSaveOptOutPreferences}
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GDPRBanner;
