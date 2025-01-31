"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function AnimatedButton() {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <button
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
        onClick={() => setIsAnimating(true)}
        className="group"
      >
        <Link
          href="https://blogsadityapradhan.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-1"
        >
          Check Out My Blogs
          <ArrowRight
            className={`w-5 h-5 transition-all duration-300 ease-in-out ${
              isAnimating ? "translate-x-1 scale-110" : ""
            }`}
          />
        </Link>
      </button>
    </div>
  )
}

