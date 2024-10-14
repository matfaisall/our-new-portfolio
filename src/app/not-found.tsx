import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-white font-bold">404 - Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  );
}
