// Jeu d'icônes minimalistes "trait fin", dessinées sur mesure pour rester
// cohérentes avec la direction artistique (pas de bibliothèque d'icônes tierce).
const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <line x1="20" y1="20" x2="15.5" y2="15.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16.5" x2="12" y2="20" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16v10.5H9.5L5 20v-4H4Z" />
      <line x1="8" y1="9.5" x2="16" y2="9.5" />
      <line x1="8" y1="12.5" x2="13.5" y2="12.5" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8 0 3.4 2.7 5.7 5.6 5.7.9 0 1.4-.5 1.4-1.2 0-.6-.4-.9-.4-1.6 0-.9.8-1.6 1.9-1.6h1.9c3 0 5.6-2 5.6-5.1 0-2.4-2.7-4.2-7.5-4.2Z" />
      <circle cx="7.8" cy="10.2" r="0.9" />
      <circle cx="10.5" cy="7.3" r="0.9" />
      <circle cx="14.3" cy="7.3" r="0.9" />
      <circle cx="16.6" cy="10.2" r="0.9" />
    </>
  ),
  trend: (
    <>
      <polyline points="3.5,17 9.5,10.5 13.5,14 20.5,6" />
      <polyline points="15,6 20.5,6 20.5,11.5" />
    </>
  ),
  folder: (
    <path d="M3.5 6.5a1 1 0 0 1 1-1h4.8l2 2.3h8.2a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
  ),
  euro: (
    <>
      <path d="M15.8 6.6a6.6 6.6 0 1 0 0 10.8" />
      <line x1="4.5" y1="10.3" x2="13.5" y2="10.3" />
      <line x1="4.5" y1="13.3" x2="12.3" y2="13.3" />
    </>
  ),
  check: (
    <polyline points="4,12.5 9.5,18 20,5" />
  ),
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13,6 19,12 13,18" />
    </>
  ),
  chevronDown: <polyline points="5,8.5 12,15.5 19,8.5" />,
  menu: (
    <>
      <line x1="3.5" y1="7" x2="20.5" y2="7" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <line x1="3.5" y1="17" x2="20.5" y2="17" />
    </>
  ),
  close: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <polyline points="4,7 12,13 20,7" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5 9 6l-1.7 2.6a13 13 0 0 0 6.1 6.1L15 12.9l2.5 2.5c1 1 1 2 .3 2.9-.7.9-1.6 1.4-2.7 1.4-5.5 0-11.5-6-11.5-11.5 0-1.1.5-2 1.4-2.7.9-.7 1.9-.7 2.9-.3Z" />
  ),
  location: (
    <>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.4" fill="currentColor" />
      <path d="M11 16.5V10M11 12.7c0-1.5 1.1-2.7 2.6-2.7 1.5 0 2.4 1 2.4 2.8v3.7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M14.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.4-1.3h1.4V5.8c-.2 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.9H9.5v2.7h2.1v7Z" />
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.5, className = "", ...rest }) {
  const glyph = paths[name];
  if (!glyph) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  );
}
