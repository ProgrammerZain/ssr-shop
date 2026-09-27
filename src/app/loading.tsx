import { PageSkeleton } from "@/components/skeletons/PageSkeleton";

export default function Loading() {
  return (
    <div className="py-6">
      <PageSkeleton />
    </div>
  );
}
