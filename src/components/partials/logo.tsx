import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={'/'}
      className={`navbar-item font-bold text-3xl text-red-500 ${className}`}
    >
      Fahaha
    </Link>
  );
}
