"use client";

export default function QuickMenu() {
  const menus = [
    { title: "👤 About", id: "about" },
    { title: "📚 Step", id: "step" },
    { title: "📝 Level Test", id: "level-test" },
    { title: "✉ Contact", id: "contact" },
  ];

  return (
    <section className="block bg-white px-5 py-6 md:hidden">
      <div className="grid grid-cols-2 gap-4">
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() =>
              document
                .getElementById(menu.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:border-[#4B6584]/30 hover:shadow-md active:scale-95"
          >
            <p className="font-semibold text-[#1E2433]">
              {menu.title}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}