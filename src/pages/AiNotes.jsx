import React, { useState } from "react";

export default function AiNotes() {
  const [language, setLanguage] = useState("en");

  // Toggle Language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6 text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">
          {language === "en" ? "✍️ AI Notes" : "✍️ এআই নোটস"}
        </h1>
        <p className="text-sm opacity-90">
          {language === "en"
            ? "📄 Detailed notes generated for you"
            : "📄 আপনার জন্য তৈরি করা বিস্তারিত নোট"}
        </p>
      </div>

      {/* Notes Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-bold mb-2">
            {language === "en"
              ? "1. Introduction to Reaction Rates"
              : "১. বিক্রিয়ার গতির ভূমিকা"}
          </h2>
          <p>
            {language === "en"
              ? "Chemical reactions do not all occur at the same speed. Some are instantaneous, while others may take years to complete. The rate of reaction tells us how fast a chemical process occurs."
              : "রাসায়নিক বিক্রিয়া সব একই গতিতে ঘটে না। কিছু বিক্রিয়া তাৎক্ষণিক হয়, আবার কিছু সম্পূর্ণ হতে বছরের পর বছর সময় নেয়। বিক্রিয়ার হার আমাদের বলে একটি রাসায়নিক প্রক্রিয়া কত দ্রুত ঘটে।"}
          </p>
        </section>

        {/* Example */}
        <section>
          <h2 className="text-xl font-bold mb-2">
            {language === "en"
              ? "2. Example: Reaction Rate Using Moles"
              : "২. উদাহরণ: মোল দ্বারা বিক্রিয়ার হার"}
          </h2>
          <p>
            {language === "en"
              ? "Consider a hypothetical reaction: Gas A → Gas B. If 1 mole of Gas A converts into 1 mole of Gas B in 10 seconds, then the rate of reaction is 0.1 mol/s."
              : "একটি কাল্পনিক বিক্রিয়া বিবেচনা করুন: গ্যাস A → গ্যাস B। যদি ১ মোল গ্যাস A ১০ সেকেন্ডে ১ মোল গ্যাস B তে রূপান্তরিত হয়, তবে বিক্রিয়ার হার হবে ০.১ মোল/সেকেন্ড।"}
          </p>
        </section>

        {/* Key Points */}
        <section>
          <h2 className="text-xl font-bold mb-2">
            {language === "en" ? "3. Key Points" : "৩. মূল বিষয়সমূহ"}
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              {language === "en"
                ? "Reaction rate depends on factors like temperature, concentration, surface area, and catalysts."
                : "বিক্রিয়ার হার তাপমাত্রা, ঘনত্ব, পৃষ্ঠের ক্ষেত্রফল এবং অনুঘটক এর মতো উপাদানের উপর নির্ভর করে।"}
            </li>
            <li>
              {language === "en"
                ? "Faster reactions are useful in industry but may be dangerous if uncontrolled."
                : "দ্রুত বিক্রিয়া শিল্পে কার্যকর হলেও নিয়ন্ত্রণহীন হলে বিপজ্জনক হতে পারে।"}
            </li>
          </ul>
        </section>

        {/* Table Example */}
        <section>
          <h2 className="text-xl font-bold mb-2">
            {language === "en"
              ? "4. Reaction Rate Table"
              : "৪. বিক্রিয়ার হার টেবিল"}
          </h2>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-2 border border-gray-200">
                  {language === "en" ? "Time (s)" : "সময় (সেকেন্ড)"}
                </th>
                <th className="p-2 border border-gray-200">
                  {language === "en" ? "Moles of A" : "A এর মোল"}
                </th>
                <th className="p-2 border border-gray-200">
                  {language === "en" ? "Moles of B" : "B এর মোল"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="p-2 border border-gray-200">0</td>
                <td className="p-2 border border-gray-200">1.0</td>
                <td className="p-2 border border-gray-200">0.0</td>
              </tr>
              <tr className="text-center bg-gray-100">
                <td className="p-2 border border-gray-200">10</td>
                <td className="p-2 border border-gray-200">0.0</td>
                <td className="p-2 border border-gray-200">1.0</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Toggle Button */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={toggleLanguage}
            className="bg-blue-600 text-white py-2 px-10 rounded-lg shadow hover:bg-blue-700"
          >
            {language === "en" ? "Convert to Bangla" : "Convert to English"}
          </button>
        </div>
      </div>
    </div>
  );
}
