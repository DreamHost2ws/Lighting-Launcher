import { servers } from "../../launcher/servers";

export default function ServerPanel() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <h2 className="text-lg mb-3">Partner Servers</h2>

      {servers.map((s, i) => (
        <div
          key={i}
          className="p-2 mb-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
        >
          <p className="font-bold">{s.name}</p>
          <p className="text-xs text-gray-400">{s.ip}</p>
        </div>
      ))}
    </div>
  );
}
