export default function Card({ title, body, image }) {
  // Deteksi karakter berdasarkan ID gambar atau title
  const highlight = title.toLowerCase().includes("ompong")
    ? "ring-yellow-400"
    : title.toLowerCase().includes("amadiketu")
    ? "ring-blue-500"
    : "ring-pink-500";

  const bgColor = title.toLowerCase().includes("ompong")
    ? "bg-yellow-50"
    : title.toLowerCase().includes("amadiketu")
    ? "bg-blue-50"
    : "bg-pink-50";

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ring-4 ${highlight} ${bgColor}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm italic">“{body.replace(/“|”/g, "")}”</p>
      </div>
    </div>
  );
}
