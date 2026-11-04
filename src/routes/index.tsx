import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/anatomy/Shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Shell />;
}
