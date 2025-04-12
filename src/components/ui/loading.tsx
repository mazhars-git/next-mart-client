import "../../app/spinner.css";
const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* <!-- From Uiverse.io by Z4drus -->  */}
      <div className="loader">
        <svg viewBox="0 0 100 100" height="100px" width="100px">
          <defs>
            <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" id="gradient1">
              <stop stop-color="#4f8ef7" offset="0%"></stop>
              <stop stop-color="#a663cc" offset="50%"></stop>
              <stop stop-color="#f74f6f" offset="100%"></stop>
            </linearGradient>
            <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" id="gradient2">
              <stop stop-color="#f7b34f" offset="0%"></stop>
              <stop stop-color="#5ef7a5" offset="50%"></stop>
              <stop stop-color="#4f8ef7" offset="100%"></stop>
            </linearGradient>
          </defs>
          <circle
            stroke="url(#gradient1)"
            r="40"
            cy="50"
            cx="50"
            className="loader-circle circle-1"
          ></circle>
          <circle
            stroke="url(#gradient2)"
            r="30"
            cy="50"
            cx="50"
            className="loader-circle circle-2"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
