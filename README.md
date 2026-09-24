## 🏋️‍♂️Project Name: my-fit-log — Modern Workout Library & Fitness Tracker

## Short Description:
**FitLog** is a feature-rich, responsive fitness-tracking dashboard and workout library web application built with **Next.js (App Router)**, **Tailwind CSS**, and **DaisyUI**. It empowers fitness enthusiasts to explore curated major muscle lifts, inspect comprehensive step-by-step instructions, organize personalized daily exercise routines with built-in capacity limits, and save favorites for future training sessions.

---

## 🚀 Technologies Used

* **Framework:** [Next.js](https://nextjs.org/) (App Router utilizing Server & Client Components)
* **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
* **State Management:** React Context API (`FitContext`) with persistent client state logic
* **Notifications:** React Toastify for interactive feedback alerts
* **Data Fetching:** Custom REST API integration (`https://api.abcz.workers.dev/api/fitlog`)
* **Deployment Platforms:** Vercel

---

## ✨ 5 Key Features of the Project

1. **Comprehensive Workout Library:** 
   Explore a diverse collection of lifts targeting major muscle groups, complete with dynamic visual media, duration metrics, calorie burn estimates, equipment lists, and difficulty ratings.

2. **Dynamic Live Metrics & Context Integration:** 
   Real-time tracking of user selections. The interactive navigation bar instantly reflects live counts for both "Today's Plan" and "Saved" lists via React Context.

3. **Smart Plan Capacity Control (Cap of 5):** 
   Built-in safety limit ensuring users can add a maximum of 5 workouts to "Today's Plan", complete with intelligent button disabling and status indicators once the limit is reached.

4. **Detailed Specification Tables & Guides:** 
   Immersive workout details pages featuring split layouts with high-resolution imagery, dark slate specification tables, and clean step-by-step execution instructions.

5. **Dual-Tab Dashboard & Custom Sorting:** 
   A dedicated management view (`/my-plan`) featuring dual tabs for "Today's Plan" and "Saved" items, paired with a custom sorting mechanism (by duration, calories, or rating) and quick status actions like "Mark as done".

---
