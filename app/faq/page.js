import Link from "next/link";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">FAQ</h1>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">常見問題</h2>
          <div>
            <h3 className="font-semibold">問題 1：如何進行通報？</h3>
            <p className="mb-4">
              回答：請選擇實名或匿名通報，並依照表單填寫相關資訊。
            </p>
            <h3 className="font-semibold">問題 2：我的個資會被保護嗎？</h3>
            <p className="mb-4">回答：我們採取各項安全措施保護您的資料。</p>
            {/* 可依需求添加其他常見問題 */}
          </div>
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
