import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
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

export const action = async (args: ActionFunctionArgs) => {
  const formData = await args.request.formData();
  const times = formData.getAll("times") as string[];
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const comment = formData.get("comment") as string;

  console.log({ name, email, phone, times, comment });

  if (!name || !email || !phone || times.length === 0) {
    return json({
      sucess: false,
      errors: {
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        phone: !phone ? "Phone is required" : "",
        times: times.length === 0 ? "Time is required" : "",
      },
    });
  }

  return redirect("/enroll/coding");
};

export default function Page() {
  const actionData = useActionData<typeof action>();
  const errors = actionData?.errors;

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
        <h1 className="text-3xl">报名编码训练营</h1>
        <p className="mt-4">选择可以参加训练营的时间段报名</p>
        <Form method="POST">
          <Input
            isInvalid={!!errors?.name}
            errorMessage={errors?.name}
            type="text"
            name="name"
            label="姓名"
            className="mt-4"
          />
          <Input
            isInvalid={!!errors?.email}
            errorMessage={errors?.email}
            type="email"
            name="email"
            label="邮箱"
            className="mt-4"
          />
          <Input
            isInvalid={!!errors?.phone}
            errorMessage={errors?.phone}
            type="tel"
            name="phone"
            label="电话"
            className="mt-4"
          />
          <div className="mt-4">
            <SelectTimes
              isInvalid={!!errors?.times}
              errorMessage={errors?.times}
              times={times}
            />
          </div>
          <Textarea
            name="comment"
            label="已经学习的内容和练习期望"
            className="mt-4"
          />
          <Button type="submit" className="mt-4" color="primary">
            报名
          </Button>
        </Form>
      </div>
    </div>
  );
}
