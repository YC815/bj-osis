import React from "react";
import Link from "next/link";
import NavBar from "components/NavBar.js";

export default function AnonymousReport() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 mb-8">
        <h1 className="text-2xl font-bold text-center text-black">
          濱江OSIS通報系統
        </h1>
        <NavBar />
      </header>

      <main className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center">匿名通報</h1>

        <form>
          {/* 稱呼 */}
          <div className="mb-4">
            <label className="block font-medium mb-1">稱呼＊</label>
            <input
              type="text"
              defaultValue="吉米"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* 回報類型 */}
          <div className="mb-4">
            <label className="block font-medium mb-1">回報類型＊</label>
            <div className="mt-2 space-y-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="教師教學回饋"
                  className="form-radio"
                  required
                />
                <span className="ml-2">教師教學回饋</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="校園事件陳情"
                  className="form-radio"
                  required
                />
                <span className="ml-2">校園事件陳情</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="校園公共事務提案"
                  className="form-radio"
                  required
                />
                <span className="ml-2">校園公共事務提案</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reportType"
                  value="其他"
                  className="form-radio"
                  required
                />
                <span className="ml-2">其他…</span>
              </label>
            </div>
          </div>

          {/* 簡短描述 */}
          <div className="mb-4">
            <label className="block font-medium mb-1">簡短描述＊</label>
            <input
              type="text"
              placeholder="簡明扼要說明主旨"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* 詳細敘述 */}
          <div className="mb-4">
            <label className="block font-medium mb-1">詳細敘述＊</label>
            <textarea
              placeholder="事件的經過或想法的詳細描寫"
              className="w-full p-2 border rounded"
              rows={5}
              required
            ></textarea>
          </div>

          {/* 證據上傳 */}
          <div className="mb-4">
            <label className="block font-medium mb-1">證據上傳</label>
            <input
              type="url"
              placeholder="Google雲端連結（請共享權限）"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* 確認選項 */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" required className="form-checkbox" />
              <span className="ml-2">
                我確認以上內容毫無虛構＊（是，我確認，如有虛假願受校規處分）
              </span>
            </label>
          </div>

          {/* 注意事項 */}
          <p className="mb-4 text-sm text-gray-600">
            送出此表即表示您了解《濱江聯合通報平台OSIS整合標準作業流程暨準則》
          </p>

          {/* 送出按鈕 */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            送出
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            返回首頁
          </Link>
        </div>
      </main>
    </div>
  );
}
