
import { getCabins } from "../_lib/data-service";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
import CabinCard from "../_components/CabinCard";
export const revalidate = 0;
export const metadata = {
  title: "Cabins",
};
export default async function Page({ searchParams }) {
  const cabins = await getCabins();

  
  const filter = searchParams?.capacity ?? "all";
  console.log(filter);
  let displayedCabins;
  if (filter === "all") {
    displayedCabins = cabins;
  }
  if (filter === "small") {
    displayedCabins = cabins.filter((cabin)=> cabin.maxCapacity<=3);
  }
  if (filter === "medium") {
    displayedCabins = cabins.filter((cabin)=> cabin.maxCapacity<=7&&cabin.maxCapacity>=4);
  }
  if (filter === "large") {
    displayedCabins = cabins.filter((cabin)=> cabin.maxCapacity>=8);
  }


  return (
    
    <div>
     
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-base sm:text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex justify-end mb-3">

      <Filter />
      </div>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
            
        </div>
      )}
   
   <ReservationReminder />
    </div>
  );
}
