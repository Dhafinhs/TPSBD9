export default function Card({ title, body, image }) {
  const highlight = title.toLowerCase().includes("ompong")
    ? "ring-blue-1"
    : title.toLowerCase().includes("amadiketu")
    ? "ring-blue-2"
    : "ring-blue-3";

  const bgColor = title.toLowerCase().includes("ompong")
    ? "bg-blue-1/10"
    : title.toLowerCase().includes("amadiketu")
    ? "bg-blue-2/10"
    : "bg-blue-3/10";

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ring-4 ${highlight} ${bgColor}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-bold text-primary mb-2 dark:text-blue-3">{title}</h2>
        <p className="text-blue-1 dark:text-light text-sm italic">“{body.replace(/“|”/g, "")}”</p>
      </div>
    </div>
  );
}
