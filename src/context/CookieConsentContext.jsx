import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "dbc-cookie-consent";

const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext(null);

function readStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_CONSENT, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(null); // null tant que l'utilisateur n'a pas répondu
  const [isPreferencesOpen, setPreferencesOpen] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setHasHydrated(true);
  }, []);

  const persist = useCallback((next) => {
    setConsent(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Le stockage local peut être indisponible (navigation privée, etc.) — on continue sans persister.
    }
  }, []);

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true, marketing: true });
    setPreferencesOpen(false);
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({ necessary: true, analytics: false, marketing: false });
    setPreferencesOpen(false);
  }, [persist]);

  const savePreferences = useCallback(
    (partial) => {
      persist({ ...DEFAULT_CONSENT, ...consent, ...partial, necessary: true });
      setPreferencesOpen(false);
    },
    [consent, persist]
  );

  const value = useMemo(
    () => ({
      consent,
      hasHydrated,
      hasResponded: consent !== null,
      isPreferencesOpen,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      acceptAll,
      rejectAll,
      savePreferences,
    }),
    [consent, hasHydrated, isPreferencesOpen, acceptAll, rejectAll, savePreferences]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent doit être utilisé à l'intérieur de CookieConsentProvider");
  }
  return ctx;
}
