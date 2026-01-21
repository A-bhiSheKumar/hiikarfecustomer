import { useState } from "react";
import SubCategoryModal from "./modals/SubCategoryModal";
import PrimaryServiceCard from "./PrimaryServiceCard";
import { PRIMARY_SERVICES } from "../data/primaryServices";

const PrimaryServiceCategories = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section
        className="
          border
          border-[#EAEAEA]
          rounded-2xl
          p-6
          bg-white
        "
      >
        <h2 className="text-[24px] font-semibold text-gray-700 mb-6">
          What are you looking for?
        </h2>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-x-5
            gap-y-6
          "
        >
          {PRIMARY_SERVICES.map((item) => (
            <PrimaryServiceCard
              key={item.key}
              title={item.title}
              image={item.image}
              badge={item.badge}
              active={item.active}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <SubCategoryModal
          open={true}
          category={{
            key: selected.key,
            title: selected.title,
            subCategories: [
              { id: "1", title: "Option 1" },
              { id: "2", title: "Option 2" },
              { id: "3", title: "Option 3" },
            ],
          }}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default PrimaryServiceCategories;
