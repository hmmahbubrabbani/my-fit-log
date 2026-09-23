import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workout.type";
import WorkoutActionButtons from "@/components/shared/WorkoutActionButtons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetails({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const workout: IWorkout = await res.json();

  if (!workout || !workout.id) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Workout not found!</h2>
        <Link href="/" className="btn bg-[#ccff00] text-black hover:bg-[#b3e600] mt-4 font-bold border-none">
          Back to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side: Visual / Media */}
        <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">
              {workout.name}
            </h1>
            <p className="text-base-content/80 mt-3 text-base">
              {workout.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, idx) => (
              <span
                key={idx}
                className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#ccff00] text-slate-800"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="bg-slate-800 text-white rounded-xl p-5 space-y-3 shadow-lg">
            <div className="flex justify-between border-b border-slate-700 pb-2 text-sm font-semibold">
              <span className="text-slate-400">EQUIPMENT</span>
              <span>{workout.equipment}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2 text-sm font-semibold">
              <span className="text-slate-400">DIFFICULTY</span>
              <span>{workout.difficulty}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2 text-sm font-semibold">
              <span className="text-slate-400">SETS</span>
              <span>{workout.sets}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2 text-sm font-semibold">
              <span className="text-slate-400">REPS</span>
              <span>{workout.reps}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2 text-sm font-semibold">
              <span className="text-slate-400">DURATION</span>
              <span>{workout.duration} min</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2 text-sm font-semibold">
              <span className="text-slate-400">CALORIES</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-slate-400">RATING</span>
              <span>{workout.rating}</span>
            </div>

          </div>

          <div>
            <h3 className="text-xl font-bold uppercase mb-3">Instructions</h3>
            <ol className="space-y-2 list-decimal list-inside text-base-content/80">
              {workout.instructions.map((step, idx) => (
                <li key={idx} className="text-sm font-medium leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <WorkoutActionButtons workout={workout} />
          
        </div>
      </div>
    </div>
  );
}