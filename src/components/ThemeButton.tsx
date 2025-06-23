import Link from 'next/link';

export function PrimaryButton({ 
  children, 
  href,
  className = ''
}: { 
  children: React.ReactNode, 
  href: string,
  className?: string 
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 border border-emerald-700 shadow-md hover:shadow-lg hover:shadow-emerald-600/20 text-lg group ${className}`}
    >
      {children}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export function OutlineButton({ 
  children, 
  href,
  className = ''
}: { 
  children: React.ReactNode, 
  href: string,
  className?: string 
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50/10 hover:text-emerald-100 font-medium px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/10 text-lg group ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="mr-3 w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
      {children}
    </Link>
  );
}