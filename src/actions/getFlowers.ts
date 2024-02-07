"use server";

import { flowers } from "@/data/flowers";

export async function getFlowers() {
  return flowers.sort((a, b) => a.name.localeCompare(b.name));
}
