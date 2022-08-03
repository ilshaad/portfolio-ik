// I created this component to insert lazy loading to reduce load time

type Props = {};

export default function BugTrackerYoutubeEmbedCode({}: Props) {
  return (
    <iframe
      width="960"
      height="540"
      src="https://www.youtube.com/embed/UyNLsB-Q8GI"
      title="Bug Tracker app tour - ilshaad"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
