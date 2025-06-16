import Link from "next/link";
import NavBar from "components/NavBar.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center text-black">
          濱江OSIS通報系統
        </h1>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <NavBar />
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-black">
            歡迎使用濱江OSIS通報系統
          </h2>
          <p className="text-gray-700">
            請選擇通報類型或瀏覽相關資訊以了解更多平台功能。
          </p>
          <div className="max-w-4xl mx-auto p-4">
            <section className="bg-white p-6 rounded shadow mb-8">
              <h2 className="text-xl font-bold mb-4">通報方式比較表</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 border-collapse text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-2 font-semibold">
                        服務項目
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        實名通報
                      </th>
                      <th className="border border-gray-300 p-2 font-semibold">
                        匿名通報
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">實名訊息</td>
                      {/* ✔ 綠底 */}
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                      {/* ✘ 紅底 */}
                      <td className="border border-gray-300 p-2 bg-red-100 text-red-800 font-bold">
                        ✘
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        後續速度回覆
                      </td>
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                      <td className="border border-gray-300 p-2 bg-red-100 text-red-800 font-bold">
                        ✘
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">正式答覆</td>
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                      <td className="border border-gray-300 p-2 bg-red-100 text-red-800 font-bold">
                        ✘
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">速趕輔導</td>
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        案件內容處理
                      </td>
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                      <td className="border border-gray-300 p-2 bg-green-100 text-green-800 font-bold">
                        ✔
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
