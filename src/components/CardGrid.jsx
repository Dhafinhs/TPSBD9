import Card from "./Card";

const response = {
  results: [
    {
      id: 1,
      title: "Ompong skuter",
      body: "“Dibuka di HP tetap rapi dan cepat. Animasi scroll navbarnya smooth banget. Cocok jadi template project showcase!”",
      image: "https://i.imgur.com/s7yyYnu.png",
    },
    {
      id: 2,
      title: "Amadiketu",
      body: "“Dark mode-nya gak cuma gelap doang, tapi nyaman di mata. Warna birunya juga cakep, gak norak. Mantap!”",
      image: "https://i.imgur.com/XZxZ8uB.png",
    },
    {
      id: 3,
      title: "Trevthegums",
      body: "“Pas buka halaman, splash screen-nya langsung ninggalin kesan profesional. Kayak web start-up kekinian!”",
      image: "https://i.imgur.com/q2iO2Gr.png",
    },
  ],
};

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4">
      {response.results.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
