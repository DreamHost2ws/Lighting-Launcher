import PlayButton from "../components/PlayButton";
import ServerPanel from "../components/ServerPanel";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#0b0f1a] text-white">

      {/* LEFT */}
      <div className="w-1/4 p-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <img src="/skin.png" className="w-24 mx-auto" />
          <h2 className="text-center mt-3">Lighting Player</h2>
          <p className="text-center text-sm text-gray-400">1.21.1 Fabric</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Lighting Launcher</h1>
        <PlayButton />
      </div>

      {/* RIGHT */}
      <div className="w-1/4 p-4">
        <ServerPanel />
      </div>

    </div>
  );
}
