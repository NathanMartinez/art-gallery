import "../styles/home-card.css";

export default function HomeCard({ bgVideo, title }) {
  return (
    <div className="home-card">
      <h1>{title}</h1>
      <video autoPlay muted loop className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}
