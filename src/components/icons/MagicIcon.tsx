export default function MagicIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3L6 7.5 9 6l1.5-3z" />
      <path d="M5 19l2-2" />
      <path d="M19 5l-2 2" />
      <path d="M15 19l2-2" />
      <path d="M5 5l2 2" />
    </svg>
  );
}
