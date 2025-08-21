import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', positive: 65, negative: 20, neutral: 15 },
  { name: 'Tue', positive: 70, negative: 18, neutral: 12 },
  { name: 'Wed', positive: 55, negative: 30, neutral: 15 },
  { name: 'Thu', positive: 80, negative: 12, neutral: 8 },
  { name: 'Fri', positive: 75, negative: 15, neutral: 10 },
  { name: 'Sat', positive: 85, negative: 10, neutral: 5 },
  { name: 'Sun', positive: 78, negative: 12, neutral: 10 },
];

export function SentimentChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Sentiment Trends</CardTitle>
        <CardDescription>
          Daily sentiment analysis over the past week
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="name" 
              className="text-muted-foreground" 
              fontSize={12}
            />
            <YAxis 
              className="text-muted-foreground" 
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="positive" 
              stackId="1" 
              stroke="#10b981" 
              fill="#10b981" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="neutral" 
              stackId="1" 
              stroke="#6b7280" 
              fill="#6b7280" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="negative" 
              stackId="1" 
              stroke="#ef4444" 
              fill="#ef4444" 
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}