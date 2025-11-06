const images = [
  "/images/rice1.jpg",
  "/images/rice2.jpg",
  "/images/mill.jpg"

];

const Gallery = () => (
  <section className="p-6 text-center">
    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Rice ${i + 1}`}
          className="rounded-xl shadow-lg hover:scale-105 transition-transform"
        />
      ))}
    </div>
  </section>
);
export default Gallery;
