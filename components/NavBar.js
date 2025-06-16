// components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap justify-center space-x-4 mb-1">
      <Link href="/realname" className="text-blue-500 hover:underline">
        實名通報
      </Link>
      <Link href="/anonymous" className="text-blue-500 hover:underline">
        匿名通報
      </Link>
      <Link href="/sop" className="text-blue-500 hover:underline">
        SOP流程
      </Link>
      <Link href="/faq" className="text-blue-500 hover:underline">
        FAQ
      </Link>
      <Link href="/standard" className="text-blue-500 hover:underline">
        標準作業流程暨準則
      </Link>
      <Link href="/responses" className="text-blue-500 hover:underline">
        案件回應
      </Link>
    </nav>
  );
}
