import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {} = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card
        title="Get started"
        value={
          "Read our getting started guide to make the most out of your Capitalmind subscription"
        }
      />
      <Card
        title="Community"
        value={
          "Join the conversation on our exclusive community on Slack for Capitalmind subscribers"
        }
      />
      <Card
        title="Visit website"
        value={"Keep up with our latest content on our website"}
      />
    </>
  );
}

export function Card({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex justify-between p-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <ArrowTopRightOnSquareIcon className="w-4"></ArrowTopRightOnSquareIcon>
      </div>
      <p
        className={`${lusitana.className}
          rounded-xl px-4 py-2 text-sm text-gray-600`}
      >
        {value}
      </p>
    </div>
  );
}

export async function PostsCard() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet."
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus risus. Donec vel tortor sem. Aliquam rhoncus sapien vitae lobortis fringilla. Ut feugiat diam neque, in fermentum dolor aliquam in. Vivamus fringilla vehicula urna iaculis commodo. Sed dictum condimentum sapien ut varius. Vivamus pharetra ut risus vitae vulputate. Aliquam et mi accumsan, venenatis nulla ut, varius ligula. Pellentesque porttitor, felis quis tincidunt faucibus, arcu lacus lobortis mi, ut lacinia augue dui in massa. Vestibulum id dolor ornare, rhoncus enim a, accumsan dolor. Sed maximus tempus tempor. Vivamus ultricies ac ipsum id lacinia."
        }
      />
      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet."
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus risus. Donec vel tortor sem. Aliquam rhoncus sapien vitae lobortis fringilla. Ut feugiat diam neque, in fermentum dolor aliquam in. Vivamus fringilla vehicula urna iaculis commodo. Sed dictum condimentum sapien ut varius. Vivamus pharetra ut risus vitae vulputate. Aliquam et mi accumsan, venenatis nulla ut, varius ligula. Pellentesque porttitor, felis quis tincidunt faucibus, arcu lacus lobortis mi, ut lacinia augue dui in massa. Vestibulum id dolor ornare, rhoncus enim a, accumsan dolor. Sed maximus tempus tempor. Vivamus ultricies ac ipsum id lacinia."
        }
      />
      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet."
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus risus. Donec vel tortor sem. Aliquam rhoncus sapien vitae lobortis fringilla. Ut feugiat diam neque, in fermentum dolor aliquam in. Vivamus fringilla vehicula urna iaculis commodo. Sed dictum condimentum sapien ut varius. Vivamus pharetra ut risus vitae vulputate. Aliquam et mi accumsan, venenatis nulla ut, varius ligula. Pellentesque porttitor, felis quis tincidunt faucibus, arcu lacus lobortis mi, ut lacinia augue dui in massa. Vestibulum id dolor ornare, rhoncus enim a, accumsan dolor. Sed maximus tempus tempor. Vivamus ultricies ac ipsum id lacinia."
        }
      />
      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet."
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus risus. Donec vel tortor sem. Aliquam rhoncus sapien vitae lobortis fringilla. Ut feugiat diam neque, in fermentum dolor aliquam in. Vivamus fringilla vehicula urna iaculis commodo. Sed dictum condimentum sapien ut varius. Vivamus pharetra ut risus vitae vulputate. Aliquam et mi accumsan, venenatis nulla ut, varius ligula. Pellentesque porttitor, felis quis tincidunt faucibus, arcu lacus lobortis mi, ut lacinia augue dui in massa. Vestibulum id dolor ornare, rhoncus enim a, accumsan dolor. Sed maximus tempus tempor. Vivamus ultricies ac ipsum id lacinia."
        }
      />
      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet."
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus risus. Donec vel tortor sem. Aliquam rhoncus sapien vitae lobortis fringilla. Ut feugiat diam neque, in fermentum dolor aliquam in. Vivamus fringilla vehicula urna iaculis commodo. Sed dictum condimentum sapien ut varius. Vivamus pharetra ut risus vitae vulputate. Aliquam et mi accumsan, venenatis nulla ut, varius ligula. Pellentesque porttitor, felis quis tincidunt faucibus, arcu lacus lobortis mi, ut lacinia augue dui in massa. Vestibulum id dolor ornare, rhoncus enim a, accumsan dolor. Sed maximus tempus tempor. Vivamus ultricies ac ipsum id lacinia."
        }
      />
      <Post
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet."
        value={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus risus. Donec vel tortor sem. Aliquam rhoncus sapien vitae lobortis fringilla. Ut feugiat diam neque, in fermentum dolor aliquam in. Vivamus fringilla vehicula urna iaculis commodo. Sed dictum condimentum sapien ut varius. Vivamus pharetra ut risus vitae vulputate. Aliquam et mi accumsan, venenatis nulla ut, varius ligula. Pellentesque porttitor, felis quis tincidunt faucibus, arcu lacus lobortis mi, ut lacinia augue dui in massa. Vestibulum id dolor ornare, rhoncus enim a, accumsan dolor. Sed maximus tempus tempor. Vivamus ultricies ac ipsum id lacinia."
        }
      />
    </>
  );
}

export function Post({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex justify-between p-4">
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          rounded-xl px-4 py-2 text-sm text-gray-600 h-[15vh] overflow-hidden text-ellipsis`}
      >
        {value}
      </p>

      <a className="text-xs px-4 text-blue-500" href="">Read full post</a>
    </div>
  );
}
