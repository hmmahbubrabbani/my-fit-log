import MyPlanContent from "@/components/shared/MyPlanContent";

export default function MyPlanPage() {
  return (
    <div className="container mx-auto px-4 py-10">
     <div className="mb-10 space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tight">MY PLAN</h1>
        <p className="text-base-content/70 font-medium">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <MyPlanContent />
    </div>
  );
}