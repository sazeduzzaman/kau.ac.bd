export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Buildings */}
      <div className="relative flex items-end gap-2">
        <div className="w-6 h-10 bg-gray-700 rounded-t-lg animate-[pulse_1.2s_ease-in-out_infinite]"></div>
        <div className="w-8 h-14 bg-gray-600 rounded-t-lg animate-[pulse_1.2s_ease-in-out_infinite_200ms]"></div>
        <div className="w-10 h-20 bg-gray-500 rounded-t-lg animate-[pulse_1.2s_ease-in-out_infinite_400ms]"></div>
        <div className="w-7 h-12 bg-gray-600 rounded-t-lg animate-[pulse_1.2s_ease-in-out_infinite_600ms]"></div>
        <div className="w-6 h-9 bg-gray-700 rounded-t-lg animate-[pulse_1.2s_ease-in-out_infinite_800ms]"></div>
      </div>

      {/* Text */}
      <p className="absolute font-medium tracking-wide text-center text-gray-300 bottom-20 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
