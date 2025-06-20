export default function Call() {
  return (
    <div className="flex gap-6 justify-center items-center p-4">
      {/* Audio Call Button */}
      <button className="call-btn" title="Audio Call">
        <i className="fa-solid fa-phone icon" />
        <span className="glow-circle"></span>
      </button>

      {/* Video Call Button */}
      <button className="call-btn" title="Video Call">
        <i className="fa-solid fa-video icon" />
        <span className="glow-circle"></span>
      </button>
    </div>
  );
}
