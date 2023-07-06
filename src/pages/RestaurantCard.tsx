import Image from "next/image";

type Props = {
  photoUrl: string;
  name: string;
  tags: string[];
  rating: number;
  numberOfReviews: number;
  priceRange: "€" | "€€" | "€€€" | "€€€€";
  speedOfPreparation: 1 | 2 | 3 | 4 | 5;
  timeToWalkInMn: number;
};

const Tag = ({ tag }: { tag: string }) => (
  <p className="mb-1 mr-1 inline-block rounded-full bg-slate-200 pl-2 pr-2">
    #{tag}
  </p>
);

const RestaurantCard = ({
  name,
  numberOfReviews,
  photoUrl,
  priceRange,
  rating,
  tags,
  speedOfPreparation,
  timeToWalkInMn,
}: Props) => {
  return (
    <div className="rounded-lg bg-orange-50 shadow-md hover:cursor-pointer hover:bg-orange-100 hover:shadow-2xl">
      <div className="relative h-40 overflow-hidden rounded-t-lg">
        <Image
          src={photoUrl}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="pb-5"
        />
      </div>

      <h1 className="text-center text-2xl font-medium tracking-tight">
        {name}
      </h1>
      <div className="p-5">
        <div className="mb-3 flex">
          <div className="w-3/4">
            {tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </div>
          <div className="w-1/4">
            <p className="text-right">{rating}/5 ⭐️</p>
            <p className="text-right">{numberOfReviews} notes</p>
            <p className="text-right">{priceRange}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p>{speedOfPreparation} ⚡️</p>
            <p>{timeToWalkInMn} min 🚶‍♀️</p>
          </div>
          <div className="w-1/2 text-right">
            <button className="mr-2 h-10 w-10 items-center justify-center rounded-full bg-orange-200 hover:bg-orange-500">
              ✏️
            </button>
            <button className="mr-2 h-10 w-10 items-center justify-center rounded-full bg-orange-200 hover:bg-orange-500">
              ✅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
