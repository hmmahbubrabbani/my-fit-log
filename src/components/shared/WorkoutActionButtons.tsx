"use client";
import { useContext } from "react";
import { FitContext } from "@/context/FitContext";
import { IWorkout } from "@/types/workout.type";

export default function WorkoutActionButtons({ workout }: { workout: IWorkout }) {
  const context = useContext(FitContext);
  if (!context) return null;
  const { addToTodaysPlan, addToSaved } = context;

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        onClick={() => addToTodaysPlan(workout)}
        className="btn bg-[#ccff00] hover:bg-[#b3e600] rounded-[8px] font-bold text-black border-none flex items-center justify-center gap-2"
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Add to today&apos;s plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="btn btn-outline rounded-[8px] font-bold flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        Save for later
      </button>
    </div>
  );
}