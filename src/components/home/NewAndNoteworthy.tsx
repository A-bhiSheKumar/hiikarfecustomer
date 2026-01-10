import ServiceCard from "../shared/SharedCard";
import SmartCarousel from "./SmartCarousel";


const DATA = [
  { id: "1", title: "Insta Help", image: "https://picsum.photos/300/300?1", badge: "NEW" },
  { id: "2", title: "Wall Revamp", image: "https://picsum.photos/300/300?2", badge: "NEW" },
  { id: "3", title: "Electrician", image: "https://picsum.photos/300/300?3" },
  { id: "4", title: "Water Purifier", image: "https://picsum.photos/300/300?4" },
  { id: "5", title: "Carpenter", image: "https://picsum.photos/300/300?5" },
    { id: "2", title: "Wall Revamp", image: "https://picsum.photos/300/300?2", badge: "NEW" },
  { id: "3", title: "Electrician", image: "https://picsum.photos/300/300?3" },
  { id: "4", title: "Water Purifier", image: "https://picsum.photos/300/300?4" },
];

const NewAndNoteworthy = () => {
  return (
    <SmartCarousel
      title="New and noteworthy"
      items={DATA.map((item) => ({
        id: item.id,
        title: item.title,
        element: <ServiceCard {...item} />,
      }))}
    />
  );
};

export default NewAndNoteworthy;
