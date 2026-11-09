"use client";

import { useRef } from "react";

interface VideoPlayerProps {
  src: string;
  delayMs?: number; // Thời gian delay giữa các lần lặp (mặc định 10000ms = 10s)
}

export default function LoopVideo({ src, delayMs = 10000 }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnded = () => {
    // Khi video chạy xong, đợi delayMs rồi mới play lại
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, delayMs);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg bg-black">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted /* Bắt buộc phải muted thì trình duyệt mới cho phép autoPlay */
        playsInline /* Hỗ trợ autoplay mượt trên iOS */
        onEnded={handleEnded}
        /* KHÔNG thêm thuộc tính `controls` để ẩn hoàn toàn thanh tương tác */
        /* KHÔNG thêm thuộc tính `loop` của HTML vì ta xử lý delay qua JS */
        className="w-full h-full object-cover pointer-events-none"
        /* pointer-events-none: Ngăn người dùng click/chuột phải vào video */
      />
    </div>
  );
}
