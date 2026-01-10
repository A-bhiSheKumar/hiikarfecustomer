import { useState } from "react";
import SubCategoryModal from "./modals/SubCategoryModal";

const CATEGORY = {
  key: "salon",
  title: "Women's Salon & Spa",
  subCategories: [
    { id: "salon", title: "Salon for Women" },
    { id: "spa", title: "Spa for Women" },
    { id: "hair", title: "Hair Studio" },
    { id: "makeup", title: "Makeup & Styling" },
  ],
};

const PrimaryServiceCategories = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          border-soft border-soft-hover
          rounded-2xl
          bg-white
          p-4
          flex flex-col items-center text-center
          w-40
          transition
        "
      >
        <div className="h-16 w-16 rounded-xl bg-gray-100 mb-3" />

        <p className="text-sm font-medium leading-snug">
          {CATEGORY.title}
        </p>
      </button>

      <SubCategoryModal
        open={open}
        category={CATEGORY}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default PrimaryServiceCategories;
