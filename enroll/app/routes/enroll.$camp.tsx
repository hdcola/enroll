import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

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
  return { campName: params.camp };
};

export default function Page() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className="font-sans w-full">
      <div className="p-4">
        <h1 className="text-3xl">报名{loaderData.campName}</h1>
        <p className="mt-4">选择可以参加训练营的时间段报名</p>
      </div>
    </div>
  );
}
