import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "报名" },
    {
      name: "description",
      content: "选择可以参加训练营的时间段报名",
    },
  ];
};

export default function Page() {
  return (
    <div className="font-sans w-full">
      <div className="p-4">
        <h1 className="text-3xl">报名Coding</h1>
        <p className="mt-4">选择可以参加训练营的时间段报名</p>
      </div>
    </div>
  );
}
