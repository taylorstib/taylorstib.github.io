interface User {
  id: number;
  email: string;
  name: string | null;
  createdAt: string;
}

async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/users`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Taylor Stib</h1>
        <p className="text-lg text-gray-600 mb-8">
          Personal site built with{" "}
          <span className="font-semibold text-black">Next.js 14</span>,{" "}
          <span className="font-semibold text-black">Neon</span> (serverless
          PostgreSQL), and{" "}
          <span className="font-semibold text-black">Prisma ORM</span>.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
          {users.length === 0 ? (
            <p className="text-gray-500 italic">No users found.</p>
          ) : (
            <ul className="space-y-3">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <p className="font-medium text-gray-900">
                    {user.name ?? "(no name)"}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Joined {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
