import ServiceCard from "../shared/SharedCard";
import HorizontalScroller from "./HorizontalScroller";


const DATA = [
  {
    title: "Intense bathroom cleaning",
    image: "https://picsum.photos/300/300?6",
    rating: "4.79 (4.1M)",
    price: "₹449",
  },
  {
    title: "Haircut for men",
    image: "https://picsum.photos/300/300?7",
    rating: "4.87 (470K)",
    price: "₹299",
  },
  {
    title: "Automatic washing machine check-up",
    image: "https://picsum.photos/300/300?8",
    rating: "4.77 (347K)",
    price: "₹199",
  },
  {
    title: "Roll-on waxing",
    image: "https://picsum.photos/300/300?9",
    rating: "4.88 (70K)",
    price: "₹899",
  },
   {
    title: "Intense bathroom cleaning",
    image: "https://picsum.photos/300/300?6",
    rating: "4.79 (4.1M)",
    price: "₹449",
  },
  {
    title: "Haircut for men",
    image: "https://picsum.photos/300/300?7",
    rating: "4.87 (470K)",
    price: "₹299",
  },
  {
    title: "Automatic washing machine check-up",
    image: "https://picsum.photos/300/300?8",
    rating: "4.77 (347K)",
    price: "₹199",
  },
  {
    title: "Roll-on waxing",
    image: "https://picsum.photos/300/300?9",
    rating: "4.88 (70K)",
    price: "₹899",
  },
];

const MostBooked = () => {
  return (
    <HorizontalScroller title="Most booked services">
      {DATA.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </HorizontalScroller>
  );
};

export default MostBooked;
