import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockHistory = [
  { id: 1, prompt: "A cat walking on the beach at sunset", date: "2026-03-12", duration: "5s", resolution: "720p" },
  { id: 2, prompt: "Cinematic drone shot over mountains", date: "2026-03-11", duration: "10s", resolution: "1080p" },
  { id: 3, prompt: "Abstract fluid motion with neon colors", date: "2026-03-10", duration: "5s", resolution: "1080p" },
];

const VideoHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-4xl py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-body-muted hover:text-foreground transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </button>
        <h1 className="text-3xl font-bold mb-8">视频生成历史</h1>
        <div className="space-y-4">
          {mockHistory.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg bg-card border border-border flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{item.prompt}</p>
                <p className="text-xs text-body-muted mt-1">
                  {item.date} · {item.duration} · {item.resolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoHistory;
