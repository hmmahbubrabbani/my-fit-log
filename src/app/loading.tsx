export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
      {/* DaisyUI Spinner with Tailwind colors */}
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-lg font-medium text-gray-600 animate-pulse">
        Workouts Loading....
      </p>
    </div>
  );
}