export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="loader">
        <div className="cup">
          <div className="cup-handle"></div>
          <div className="smoke one"></div>
          <div className="smoke two"></div>
          <div className="smoke three"></div>
        </div>
        <div className="load">..........................</div>
      </div>
    </div>
  );
}
