import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <div>
      <Card className="bg-slate-100 dark:bg-slate-800 justify-start p-4 pb-0">
        <CardContent>
          <h4 className="text-3xl font-bold text-slate-950 dark:text-slate-100 mb-4">
            {title}
          </h4>
          <div className="flex justify-between">
            {icon}
            <h2 className="flex justify-between font-bold dark:text-slate-100 ml-2">
              {count}
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
