import type { MetaFunction } from "@remix-run/cloudflare";
import BootCampCard from "~/components/BootCampCard";

export const meta: MetaFunction = () => {
  return [
    { title: "欢迎来到训练营" },
    {
      name: "description",
      content: "Welcome to BootCamp!",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans w-full">
      <div className="p-4">
        <h1 className="text-3xl">欢迎来到训练营</h1>
        <p className="mt-4">
          我们是一群积极拥抱新技术的开发者，这里是我们的训练营，我们会在这里分享我们的学习和成果。参与训练营，你可以学习到最新的艺术、计算机技术，也可以分享你的学习经验。现在就加入我们吧！
        </p>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4">
        <BootCampCard
          title="AI视觉训练营"
          description="使用业内最先进的人工智能模型进行图像处理的技术。"
        />
        <BootCampCard
          title="Web开发训练营"
          description="学习如何开发最新的网站和应用程序，并将它们发布出去让大家使用。"
          onPress={() => {
            window.location.href = "enroll/coding";
          }}
        />
        <BootCampCard
          title="AI工具训练营"
          description="学习如何使用人工智能工具来解决实际问题。"
        />
      </div>
    </div>
  );
}
