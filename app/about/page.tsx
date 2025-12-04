export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tentang Kami</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <p className="text-lg text-gray-600 mb-4">
          Kami adalah tim pengembang yang passionate tentang teknologi web modern.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Dengan menggunakan Next.js 15, kami dapat membuat website yang cepat, 
          SEO-friendly, dan mudah di-maintain.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Teknologi yang Kami Gunakan</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Next.js 15 - React framework</li>
            <li>TypeScript - Type safety</li>
            <li>Tailwind CSS - Styling</li>
            <li>Supabase - Database & Auth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}