"use client";
import { useContext, useState } from "react";
import { FitContext } from "@/context/FitContext";
import Link from "next/link";
import Image from "next/image";
import { IWorkout } from "@/types/workout.type";

export default function MyPlanContent() {
  const context = useContext(FitContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<string>("default");

  if (!context) return null;
  const { todaysPlan, savedList, removeFromTodaysPlan, removeFromSaved } = context;

  const totalExercises = todaysPlan.length;
  const totalMinutes = todaysPlan.reduce((acc, item) => acc + item.duration, 0);
  const totalCalories = todaysPlan.reduce((acc, item) => acc + item.caloriesBurned, 0);

 
  const sortWorkouts = (list: IWorkout[]) => {
    const listCopy = [...list];
    if (sortBy === "duration") {
      return listCopy.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      return listCopy.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      return listCopy.sort((a, b) => b.rating - a.rating);
    }
    return listCopy;
  };

  const displayedList = sortWorkouts(activeTab === "plan" ? todaysPlan : savedList);

  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 stats shadow bg-slate-800 border border-slate-900">
        <div>
          <div className="stat">
            <div className="stat-title font-semibold">Exercises</div>
            <div className="stat-value text-[#ccff00] text-3xl">{totalExercises}</div>
          </div>
        </div>
        <div>
          <div className="stat">
            <div className="stat-title font-semibold">Minutes</div>
            <div className="stat-value text-3xl">{totalMinutes}</div>
          </div>
        </div>
        <div>
          <div className="stat">
            <div className="stat-title font-semibold">Calories</div>
            <div className="stat-value text-3xl">{totalCalories}</div>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        
        <div className="tabs tabs-boxed bg-base-200 p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`tab font-bold px-6 py-2 rounded-lg transition-all ${
              activeTab === "plan" ? "text-slate-50 shadow" : ""
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`tab font-bold px-6 py-2 rounded-lg transition-all ${
              activeTab === "saved" ? "text-slate-50 shadow" : ""
            }`}
          >
            Saved
          </button>
        </div>

       
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-base-content/70">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered select-sm font-medium w-44"
          >
            <option value="default">Default</option>
            <option value="duration">Duration (Low to High)</option>
            <option value="calories">Calories (High to Low)</option>
            <option value="rating">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      
      <div className="space-y-4">
        {displayedList.length > 0 ? (
          displayedList.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col md:flex-row items-center justify-between bg-base-100 border border-base-200 p-4 rounded-2xl shadow-sm gap-4"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={workout.image} alt={workout.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg uppercase">{workout.name}</h3>
                  <p className="text-xs text-base-content/60 font-medium">Equipment: {workout.equipment}</p>
                 <div className="flex gap-4 text-xs font-semibold mt-1 text-base-content/70 items-center">
  
                    <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ccff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                         {workout.duration} min
                    </span>

 
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ccff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {workout.caloriesBurned} kcal
                    </span>

  
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {workout.rating}
                    </span>
                </div>
                </div>
              </div>

             
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <Link href={`/workouts/${workout.id}`} className="btn btn-sm btn-outline rounded-3xl">
                  View Details
                </Link>

                
                {activeTab === "plan" && (
                  <button
                    onClick={() => {
                     
                      removeFromTodaysPlan(workout.id);
                    }}
                    className="btn btn-sm bg-[#ccff00] rounded-3xl hover:bg-[#b3e600] text-slate-900 border-none font-bold flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Mark as done
                  </button>
                )}

                
                <button
                  onClick={() =>
                    activeTab === "plan"
                      ? removeFromTodaysPlan(workout.id)
                      : removeFromSaved(workout.id)
                  }
                  className="btn btn-sm btn-outline text-white border-0 font-bold px-3"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 space-y-4 bg-base-200 rounded-3xl">
            <h3 className="text-2xl font-black uppercase">
              NOTHING HERE YET
            </h3>
            <p className="text-base-content/70 font-medium">
             Browse the library and add a lift to get today moving.
                
            </p>
            <Link href="/" className="btn bg-[#ccff00] text-black rounded-3xl font-bold border-none">
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}