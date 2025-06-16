import Link from "next/link";

export default function Standard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">
          濱江聯合通報平台OSIS整合標準作業流程暨準則
        </h1>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        <article className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">標準作業流程暨準則內容</h2>
          <p className="mb-4">
            這裡將詳細說明相關標準及作業流程，請參閱以下內容了解平台運作原則...
          </p>
          {/* 可根據需求加入更詳細的內容 */}
        </article>
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            返回首頁
          </Link>
        </div>
      </main>
    </div>
  );
}
