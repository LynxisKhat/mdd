import Head from "next/head";
import MilestoneTimeline from "./milestoneTime";

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>Company Timeline</title>
      </Head>
      <main className="bg-white min-h-screen">
        <MilestoneTimeline />
      </main>
    </div>
  );
}