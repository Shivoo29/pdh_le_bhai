'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/app/components/ui/button"

const memes = [
  { src: "/drew-it-in-my-maths-class-v0-ito7iuotfdjc1.jpeg", alt: "Keyun Nahi Ho Rahi Pdhai - Alakh Pandey", type: "image" },
  { src: "/xcxydq8th1sb1.jpeg", alt: "Pdh ke BOSDIKE(Daru piyega)", type: "image" },
  { src: "/GG2mw4oW0AAaRbp.jpeg", alt: "Maa Chudegi very soon!!!", type: "image" },
  { src: "/hq720.jpeg", alt: "back lag gayi to mare jasi halat ho jayegi", type: "image" },
  { src: "/khel_khtm.mp4", alt: "mera khel khtm hai", type: "video" }
]

export default function StudyMaterials() {
  const [mounted, setMounted] = useState(false)
  const [currentMeme, setCurrentMeme] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextMeme = () => {
    setCurrentMeme((prev) => (prev + 1) % memes.length)
  }

  if (!mounted) {
    return null
  }

  const currentItem = memes[currentMeme]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Exclusive Study Material</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        {currentItem.type === "video" ? (
          <div className="w-[300px] h-[400px]">
            <video
              src={currentItem.src}
              className="w-full h-full object-cover rounded-md"
              autoPlay
              
              loop
            />
          </div>
        ) : (
          <div className="relative w-[300px] h-[400px]">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-cover rounded-md"
              priority={currentMeme === 0}
            />
          </div>
        )}
        <p className="text-gray-600 my-4 text-center">{currentItem.alt}</p>
        <Button onClick={nextMeme} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Next Study Hack
        </Button>
      </div>
      <p className="mt-8 text-center text-gray-600 max-w-md">
        Remember, the best study hack is teel laga ke ulta let ja examinar ke aage!!!!
      </p>
      <p className="mt-4 text-sm text-gray-500">
        This is not a joke website. pdhle bhai gaand fatne main deri nahi lagegi.........
      </p>
    </div>
  )
}
