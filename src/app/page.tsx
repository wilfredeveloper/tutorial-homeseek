import { HouseDetailsForm } from "@/components/component/add-house-details-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <HouseDetailsForm />
    </main>
  );
}
