type ServiceCardProps = {
  title: string;
  image: string;
  price?: string;
  rating?: string;
  badge?: string;
};

const ServiceCard = ({
  title,
  image,
  price,
  rating,
  badge,
}: ServiceCardProps) => {
  return (
    <div className="min-w-[200px] group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100">

        {badge && (
          <span className="absolute top-2 left-2 z-10 bg-pink-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            {badge}
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium leading-tight">
          {title}
        </p>

        {rating && (
          <p className="text-xs text-gray-600">
            ⭐ {rating}
          </p>
        )}

        {price && (
          <p className="text-sm font-semibold">
            {price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
