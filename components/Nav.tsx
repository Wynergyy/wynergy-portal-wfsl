"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Compliance", href: "/compliance" },
    { name: "Licensing", href: "/licensing" },
    { name: "Onboarding", href: "/onboarding" },
    { name: "Tools", href: "/tools" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-3">
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:underline ${
                pathname === link.href ? "font-semibold underline" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
