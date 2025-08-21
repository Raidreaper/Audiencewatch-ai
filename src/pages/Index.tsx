import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SentimentChart } from "@/components/dashboard/SentimentChart";
import { RecentMentions } from "@/components/dashboard/RecentMentions";
import { Eye, Hash, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="lg:pl-64">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your brand today.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <MetricCard
              title="Total Mentions"
              value="2,847"
              change="+12.3%"
              changeType="positive"
              description="from last week"
              icon={<Eye className="h-4 w-4" />}
            />
            <MetricCard
              title="Positive Sentiment"
              value="73%"
              change="+5.2%"
              changeType="positive"
              description="from last week"
              icon={<TrendingUp className="h-4 w-4" />}
            />
            <MetricCard
              title="Active Keywords"
              value="24"
              change="+2"
              changeType="positive"
              description="new this week"
              icon={<Hash className="h-4 w-4" />}
            />
            <MetricCard
              title="Competitors"
              value="8"
              change="0"
              changeType="neutral"
              description="being tracked"
              icon={<Users className="h-4 w-4" />}
            />
          </div>

          {/* Charts and Recent Activity */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <SentimentChart />
            <RecentMentions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
