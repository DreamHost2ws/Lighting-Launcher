import { launchMinecraft } from "../../launcher/mc-launch";

export default function PlayButton() {
  return (
    <button
      className="bg-gradient-to-r from-yellow-400 to-orange-500 px-12 py-5 rounded-2xl text-black font-bold text-xl hover:scale-105 transition"
      onClick={() => launchMinecraft("LightingPlayer")}
    >
      ▶ PLAY LIGHTING
    </button>
  );
}
