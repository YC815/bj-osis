import Link from "next/link";

export default function Responses() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">案件回應</h1>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">最新案件回應</h2>
          {/* 範例列表，可替換為真實資料 */}
          <ul className="space-y-4">
            <li className="border p-4 rounded">
              <h3 className="font-bold">案件 1</h3>
              <p>回應內容範例...</p>
            </li>
            <li className="border p-4 rounded">
              <h3 className="font-bold">案件 2</h3>
              <p>回應內容範例...</p>
            </li>
          </ul>
        </section>
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            返回首頁
          </Link>
        </div>
      </main>
    </div>
  );
}
