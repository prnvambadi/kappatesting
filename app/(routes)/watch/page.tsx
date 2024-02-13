import React from "react";
import WatchList from "@/components/Watch/videosList";
import ShortcutList from "@/components/ShortCutList";
export default async function Watch() {
  return (
    <main className="flex flex-col">
    <ShortcutList />
    <WatchList />
  </main>


  );
}

