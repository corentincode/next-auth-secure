"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [lastLogin, setLastLogin] = useState<string | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    const fetchLastLogin = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch("/api/user/last-login")
          if (response.ok) {
            const data = await response.json()
            setLastLogin(data.lastLogin ? new Date(data.lastLogin).toLocaleString() : "First login")
          } else {
            console.error("Failed to fetch last login")
            setLastLogin("Not available")
          }
        } catch (error) {
          console.error("Error fetching last login:", error)
          setLastLogin("Not available")
        }
      }
    }

    fetchLastLogin()
  }, [session])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Email:</p>
            <p className="font-medium">{session.user?.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Last Login:</p>
            <p className="font-medium">{lastLogin || "Loading..."}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/profile"
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md text-center hover:bg-indigo-200 transition duration-150 ease-in-out"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

