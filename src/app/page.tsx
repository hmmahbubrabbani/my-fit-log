import { IWorkout } from "@/types/workout.type";
import WorkoutCard from "@/components/shared/WorkoutCard";
import Banner from "@/components/shared/Banner";

export default async function Home() {
  
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", { cache: "no-store", });
  const workouts: IWorkout[] = await res.json();

  return (
    <div>
      
      <Banner />

      <section id="library" className="container mx-auto px-4 py-12 scroll-mt-20">
        <div className=" mb-10 space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-wide">THE LIBRARY</h2>
          <p className="text-base-content/70 font-medium">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {!workouts || workouts.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}