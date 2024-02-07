import { getFlowers } from "@/actions/getFlowers";
import { HomePage } from "@/components/pages/HomePage";

export default async function Home() {
  const flowers = await getFlowers();
  return <HomePage flowers={flowers} />;
}
