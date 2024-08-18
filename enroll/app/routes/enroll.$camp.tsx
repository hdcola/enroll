import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import SelectTimes from "~/components/SelectTimes";

export const meta: MetaFunction = () => {
  return [
    { title: "报名" },
    {
      name: "description",
      content: "选择可以参加训练营的时间段报名",
    },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.camp) {
    throw new Response("Missing camp name", { status: 404 });
  }
  return { campName: params.camp };
};

export default function Page() {
  const loaderData = useLoaderData<typeof loader>();
  const times = [
    "Tue 3:00PM-5:00PM",
    "Tue 7:00PM-9:00PM",
    "Wed 3:00PM-5:00PM",
    "Wed 7:00PM-9:00PM",
    "Thu 3:00PM-5:00PM",
    "Thu 7:00PM-9:00PM",
  ];

  return (
    <div className="font-sans w-full">
      <div className="p-4">
        <h1 className="text-3xl">报名{loaderData.campName}</h1>
        <p className="mt-4">选择可以参加训练营的时间段报名</p>
        <SelectTimes times={times} />
      </div>
    </div>
  );
}
