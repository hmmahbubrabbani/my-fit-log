"use client";
import React, { createContext, useState, ReactNode } from "react";
import { IWorkout } from "@/types/workout.type";
import { toast } from "react-toastify";

interface IFitContextType {
  savedList: IWorkout[];
  todaysPlan: IWorkout[];
  addToSaved: (workout: IWorkout) => void;
  addToTodaysPlan: (workout: IWorkout) => void;
  removeFromSaved: (id: string | number) => void;
  removeFromTodaysPlan: (id: string | number) => void;
}

export const FitContext = createContext<IFitContextType | undefined>(undefined);

export const FitProvider = ({ children }: { children: ReactNode }) => {
  const [savedList, setSavedList] = useState<IWorkout[]>([]);
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);

  const addToSaved = (workout: IWorkout) => {
    if (!savedList.some((item) => item.id === workout.id)) {
      setSavedList([...savedList, workout]);
      toast.success("Workout added to Saved List!");
    } else {
      toast.info("Already in your Saved List!");
    }
  };

  const addToTodaysPlan = (workout: IWorkout) => {
    if (!todaysPlan.some((item) => item.id === workout.id)) {
      setTodaysPlan([...todaysPlan, workout]);
      toast.success("Workout added to Today's Plan!");
    } else {
      toast.info("Already in Today's Plan!");
    }
  };

  const removeFromSaved = (id: string | number) => {
    setSavedList(savedList.filter((item) => item.id !== id));
    toast.error("Removed from Saved List");
  };

  const removeFromTodaysPlan = (id: string | number) => {
    setTodaysPlan(todaysPlan.filter((item) => item.id !== id));
    toast.error("Removed from Today's Plan");
  };

  return (
    <FitContext.Provider
      value={{
        savedList,
        todaysPlan,
        addToSaved,
        addToTodaysPlan,
        removeFromSaved,
        removeFromTodaysPlan,
      }}
    >
      {children}
    </FitContext.Provider>
  );
};