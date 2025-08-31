export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white border-opacity-30 rounded-full animate-spin"></div>
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-white text-lg font-medium mt-4">Loading PartyWave...</p>
      </div>
    </div>
  )
}