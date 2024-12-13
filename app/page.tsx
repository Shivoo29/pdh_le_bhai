import Link from 'next/link'
import { Button } from "@/app/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Ultimate Study Hacks</h1>
      <p className="text-xl text-blue-600 mb-8 text-center max-w-2xl">
        Unlock the secrets to acing your exams! Our exclusive study materials will revolutionize your learning experience.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Access Exclusive Study Materials</h2>
        <p className="text-gray-600 mb-4">
          Click below to get instant access to our curated collection of study hacks and materials!
        </p>
        <Link href="/study-materials">
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Study Materials Now!
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        Disclaimer: see on the next page....
      </p>
    </div>
  )
}
