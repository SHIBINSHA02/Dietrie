function Updates() {
  // Sample health news and tips data (can be replaced with API data)
  const healthUpdates = [
    {
      id: 1,
      title: "New Study on Heart Health",
      summary: "Recent research shows that daily moderate exercise can reduce heart disease risk by 20%.",
      date: "Aug 26, 2025",
    },
    {
      id: 2,
      title: "Nutrition Tip: Hydration",
      summary: "Drinking 8 glasses of water daily improves metabolism and skin health.",
      date: "Aug 26, 2025",
    },
    {
      id: 3,
      title: "Mental Wellness Insight",
      summary: "Practicing mindfulness for 10 minutes daily can reduce stress levels significantly.",
      date: "Aug 25, 2025",
    },
  ]

  return (
    <div className="fixed top-[60px] right-0 h-[calc(100vh-60px)] w-64 bg-gray-100 border-l border-gray-200 overflow-y-auto z-10">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Daily Health Updates</h2>
        <div className="space-y-4">
          {healthUpdates.map((update) => (
            <div key={update.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{update.summary}</p>
              <p className="text-xs text-gray-500 mt-2">{update.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Updates
