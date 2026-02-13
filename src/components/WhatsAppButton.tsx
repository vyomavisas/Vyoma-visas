
export function WhatsAppButton() {
  
const WhatsAppIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
  >
    <path d="M16 2.9C9.1 2.9 3.5 8.5 3.5 15.4c0 2.7.9 5.2 2.3 7.2L3 29l6.6-2.7c1.9 1 4 1.5 6.4 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 2.9 16 2.9zm0 22.7c-2.2 0-4.3-.6-6.1-1.7l-.4-.2-3.9 1.6 1.6-3.8-.3-.4c-1.2-1.9-1.8-4.1-1.8-6.4C5.1 9.5 10 4.6 16 4.6s10.9 4.9 10.9 10.9S22 25.6 16 25.6zm6.1-7.9c-.3-.1-1.9-.9-2.2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.3 3c.1.2 2.2 3.4 5.4 4.8.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.4z" />
  </svg>
);

  return (
    <a
      href="https://wa.me/918105099612?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20know%20more%20about%20your%20visa%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
