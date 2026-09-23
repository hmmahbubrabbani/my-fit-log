import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: IWorkout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-xl hover:border-[#ccff00] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
    >
     
      <figure className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </figure>

      
      <div className="card-body p-6 space-y-3">
        
        <div className="flex flex-wrap gap-2">
          {muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#ccff00] text-slate-800"
            >
              {muscle}
            </span>
          ))}
        </div>

       
        <h2 className="text-xl font-black uppercase text-base-content group-hover:text-[#ccff00] transition-colors">
          {name}
        </h2>

        
        <p className="text-sm font-medium text-base-content/70">
          Equipment: {equipment}
        </p>

        
        <div className="flex justify-between items-center text-sm font-bold text-base-content/90 border-t border-base-200 pt-3 mt-2">
          <div className="flex items-center gap-3">
            <span>⏱️ {duration} min</span>
            <span>🔥 {caloriesBurned} kcal</span>
            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}