import MostBooked from "../home/MostBooked";
import NewAndNoteworthy from "../home/NewAndNoteworthy";
import PromoBanner from "../home/PromoBanner";
import PrimaryServiceCategories from "../PrimaryServiceCategories";

const Home = () => {
  return (
    <div className="space-y-24">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Home services,
              <br />
              reimagined for modern living
            </h1>

            <p className="mt-6 text-gray-600 max-w-md text-base leading-relaxed">
              Find trusted professionals for cleaning, repair, beauty,
              and more — all on hiikarcare.
            </p>

            {/* PRIMARY CATEGORIES */}
            <div className="mt-10">
              <PrimaryServiceCategories />
            </div>
          </div>

          {/* RIGHT – VISUAL GRID (PLACEHOLDERS / CMS IMAGES) */}
          <div className="grid grid-cols-2 gap-5">
            <div className="aspect-[4/5] rounded-3xl bg-gray-100" />
            <div className="aspect-[4/5] rounded-3xl bg-gray-200 translate-y-10" />
            <div className="aspect-[4/5] rounded-3xl bg-gray-200" />
            <div className="aspect-[4/5] rounded-3xl bg-gray-100 translate-y-10" />
          </div>

        </div>
      </section>

      {/* ================= NEW & NOTEWORTHY ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <NewAndNoteworthy />
      </section>

      {/* ================= MOST BOOKED ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <MostBooked />
      </section>

      {/* ================= PROMO ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <PromoBanner />
      </section>

    </div>
  );
};

export default Home;
