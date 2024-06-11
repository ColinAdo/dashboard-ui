import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const DashboardCard = () => {
  return (
    <div>
      <Card className="bg-slate-100 dark:bg-slate-800 justify-start p-4 pb-0">
        <CardContent>
          <h4 className="text-3xl font-bold text-slate-950 dark:text-slate-100 mb-4">
            Posts
          </h4>
          <div className="flex justify-between">
            <Newspaper />
            <h2 className="flex justify-between font-bold dark:text-slate-100 ml-2">
              100
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
