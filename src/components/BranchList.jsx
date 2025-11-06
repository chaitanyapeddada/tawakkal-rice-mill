const branches = [
  { name: "Main Branch", location: "Jangaon", available: true },
  { name: "Main Branch", location: "Ganguphad Jangaon", available: true },
];

const BranchList = () => (
  <section className="p-6">
    <h2 className="text-2xl font-semibold mb-4 text-center">Our Branches</h2>
    <ul className="max-w-lg mx-auto">
      {branches.map((b, i) => (
        <li
          key={i}
          className="mb-3 p-3 bg-white rounded-lg shadow-sm flex justify-between items-center"
        >
          <span>{b.name} — {b.location}</span>
          <span className={b.available ? "text-green-600" : "text-red-600"}>
            {b.available ? "Available" : "Closed"}
          </span>
        </li>
      ))}
    </ul>
  </section>
);
export default BranchList;
