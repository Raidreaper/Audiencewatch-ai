import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Heart, Share } from "lucide-react";

const mentions = [
  {
    id: 1,
    platform: 'Twitter',
    author: 'Sarah Johnson',
    handle: '@sarahj_tech',
    content: 'Just tried the new AudienceWatch AI dashboard - absolutely loving the real-time insights! 🚀',
    sentiment: 'positive',
    timestamp: '2 min ago',
    engagement: { likes: 12, comments: 3, shares: 2 }
  },
  {
    id: 2,
    platform: 'LinkedIn',
    author: 'Mike Chen',
    handle: 'mike-chen-marketing',
    content: 'Been using social monitoring tools for years, but this one really stands out for competitor analysis.',
    sentiment: 'positive',
    timestamp: '5 min ago',
    engagement: { likes: 8, comments: 1, shares: 0 }
  },
  {
    id: 3,
    platform: 'Twitter',
    author: 'TechReporter',
    handle: '@techreporter',
    content: 'The sentiment analysis could be more accurate, sometimes misses context in sarcastic posts.',
    sentiment: 'negative',
    timestamp: '12 min ago',
    engagement: { likes: 5, comments: 2, shares: 1 }
  }
];

export function RecentMentions() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Recent Mentions</CardTitle>
        <CardDescription>
          Latest social media mentions in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mentions.map((mention) => (
          <div key={mention.id} className="flex space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">
                {mention.author.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{mention.author}</p>
                  <p className="text-xs text-muted-foreground">{mention.handle}</p>
                  <Badge 
                    variant={mention.sentiment === 'positive' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {mention.sentiment}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{mention.timestamp}</p>
              </div>
              <p className="text-sm text-foreground">{mention.content}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Heart className="h-3 w-3" />
                  <span>{mention.engagement.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{mention.engagement.comments}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Share className="h-3 w-3" />
                  <span>{mention.engagement.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}