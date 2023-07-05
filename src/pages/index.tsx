import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "~/utils/api";
import RestaurantCard from "./RestaurantCard";

const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      void router.push("/login");
    }
  }, [status, router]);
  const hello = api.example.randomSentence.useQuery();

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <p className="pb-10 text-2xl">{hello.data ? hello.data : ""}</p>
      </div>
      <div className="grid w-full grid-cols-4 gap-4">
       <RestaurantCard
          name="🍜 Collines d'Asie"
          numberOfReviews={89}
          photoUrl="/collines.jpeg"
          priceRange="€"
          rating={4}
          tags={["healthy", "soupes", "nouilles", "asiatique"]}
        />
        <RestaurantCard
          name="🍚 Gyudon Bar"
          numberOfReviews={6}
          photoUrl="/gyudon_bar.png"
          priceRange="€€"
          rating={4.3}
          tags={["healthy", "bowl", "asiatique"]}
        />
        <RestaurantCard
          name="🍕 Constantia"
          numberOfReviews={46}
          photoUrl="/constantia.jpeg"
          priceRange="€"
          rating={4.7}
          tags={["italien", "pizza"]}
        />
                <RestaurantCard
          name="🍔 Koff"
          numberOfReviews={73}
          photoUrl="/koff.jpeg"
          priceRange="€€"
          rating={4.2}
          tags={["burger", "fat"]}
        />
      </div>
    </>
  );
};

export default Home;
