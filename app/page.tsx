import { DashBoard } from "@/components/dashboard";
import { ModeToggle } from "@/components/toggleButton";

export default async function Home() {
  return (
    <div>
      <ModeToggle />
      <DashBoard />
    </div>
  );
}
