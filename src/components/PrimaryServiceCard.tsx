type Props = {
  title: string;
  image: string;
  badge?: string;
  active?: boolean;
  onClick?: () => void;
};

const PrimaryServiceCard = ({
  title,
  image,
  badge,
  active,
  onClick,
}: Props) => {
  return (
    <div className="w-[95%] text-center">
      {/* IMAGE CARD */}
      <button
        onClick={onClick}
        className={`
          relative
          w-full
          rounded-xl
          border
          border-[#EAEAEA]
          bg-[#F7F7F7]
          px-3 py-3
          transition
          hover:-translate-y-[1px]
          hover:border-[#DADADA]
          ${active ? "border-black" : ""}
        `}
      >
        {/* Badge */}
        {badge && (
          <span
            className={`
              absolute top-2 left-2
              text-[10px]
              px-2 py-[1px]
              rounded
              font-medium
              ${
                badge === "Sale"
                  ? "bg-green-600 text-white"
                  : "bg-[#8B1D3D] text-white"
              }
            `}
          >
            {badge}
          </span>
        )}

        {/* Image */}
        <div className="flex justify-center">
          <div className="h-[56px] w-[72px] flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </button>

      {/* TITLE OUTSIDE CARD */}
      <p className="mt-2 text-[12px] leading-[1.2] font-medium text-gray-900">
        {title}
      </p>
    </div>
  );
};

export default PrimaryServiceCard;
