import { AuthCheck } from "@/lib/auth-check";

export default function DashboardPage() {
  return (
    <AuthCheck>
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Total Points Value
              </h3>
              <p className="text-2xl font-bold text-blue-600">$0</p>
              <p className="text-sm text-gray-500">Across all cards</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Monthly Spending
              </h3>
              <p className="text-2xl font-bold text-green-600">$0</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Potential Savings
              </h3>
              <p className="text-2xl font-bold text-purple-600">$0</p>
              <p className="text-sm text-gray-500">With optimal card usage</p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-blue-500 hover:text-blue-600 transition-colors">
                <div className="text-2xl mb-2">+</div>
                <div className="font-medium">Add Credit Card</div>
                <div className="text-sm text-gray-500">Track a new card</div>
              </button>

              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-green-500 hover:text-green-600 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium">Upload Statement</div>
                <div className="text-sm text-gray-500">Import transactions</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}
