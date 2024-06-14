import DashboardCard from "@/components/dashboard/dashboardCard";
import PostsTable from "@/components/post/postsTable";

import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={200}
          icon={<Newspaper className="dark:text-slate-100" />}
        />
        <DashboardCard
          title="Category"
          count={12}
          icon={<Folder className="dark:text-slate-100" />}
        />
        <DashboardCard
          title="Users"
          count={150}
          icon={<User className="dark:text-slate-100" />}
        />
        <DashboardCard
          title="Comments"
          count={200}
          icon={<MessageCircle className="dark:text-slate-100" />}
        />
      </div>
      <PostsTable limit={5} />
    </>
  );
}
