import Link from "next/link";

export default function SOP() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">SOP 流程</h1>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        <section className="bg-white p-6 rounded shadow mb-4">
          <h2 className="text-xl font-bold mb-2">通報處理流程</h2>
          <ol className="list-decimal list-inside">
            <li>接收通報</li>
            <li>初步審查</li>
            <li>分派處理</li>
            <li>結果回覆</li>
          </ol>
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
