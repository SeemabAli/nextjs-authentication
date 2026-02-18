"use client";

import { useParams } from "next/navigation";

export default function UserProfile() {
  const params = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            User Profile {params.id}
          </h1>

          <p className="text-gray-500 mt-2">
            View and edit your profile information
          </p>
        </div>
      </div>
    </div>
  );
}
