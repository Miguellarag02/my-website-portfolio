import { useLanguage } from "../context/LanguageContext.jsx";

const VideoViewer = ({ videoLink }) => {
  const { UI_TEXTS } = useLanguage();

  if (!videoLink) {
    return (
      <div className="h-full w-full rounded-xl border p-4 text-white-600">
        {UI_TEXTS.video.noVideo}
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-xl border bg-black">
      <video
        key={videoLink}
        className="h-full w-full object-contain"
        autoPlay
        controls
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoLink} type="video/mp4" />
        {UI_TEXTS.video.cannotShowVideo}{" "}
        <a className="underline" href={videoLink} target="_blank" rel="noreferrer">
          {UI_TEXTS.video.openInTab}
        </a>
      </video>
    </div>
  );
};

export default VideoViewer;
