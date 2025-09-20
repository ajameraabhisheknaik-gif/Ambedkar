"use client"
import { useState } from "react"

interface AmbedkarPortraitProps {
  animationPhase: "scatter" | "forming" | "complete"
}

export function AmbedkarPortrait({ animationPhase }: AmbedkarPortraitProps) {
  const [imageError, setImageError] = useState(false)

  const defaultImageUrl = "https://scontent.fvga1-2.fna.fbcdn.net/v/t1.15752-9/550436770_1339818940874014_1177510279035325013_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DAVx8TT7uvMQ7kNvwEa9SlY&_nc_oc=AdmAjwm4gIwJhH7PlAzaqK9EcJW2ys2EaqMF7pPf0usvz4lGDvGOnzVFk7pKQtkahv_Gp_KaLkPCxA998RdwKIiF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fvga1-2.fna&oh=03_Q7cD3QFMFaMr-oYpyU-IV-08-zUPBifyauOvFlbG3Kkm388F1A&oe=68F651E0"
  const fallbackImageUrl = "/placeholder.svg?height=220&width=220"

  return (
    <div className="mb-6 sm:mb-8 animate-float relative z-40">
      <div className="relative">
        <img
          src={!imageError ? defaultImageUrl : fallbackImageUrl}
          alt="Dr. B.R. Ambedkar"
          className={`w-32 h-32 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-white shadow-2xl transition-all duration-3000 ${
            animationPhase === "complete" ? "opacity-100 scale-110" : "opacity-70"
          }`}
          onError={() => setImageError(true)}
        />
        {animationPhase === "complete" && (
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-ping opacity-50"></div>
        )}
      </div>
    </div>
  )
}
