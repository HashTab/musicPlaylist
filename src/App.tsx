import PlaylistCard from "./PlaylistCard";
import { MUSICS } from "./constants";

function App() {
  return (
    <section className="gradient">
      <div className="p-16">
        <h1 className="text-6xl text-center text-white">Music Playlist</h1>
        <div className="flex flex-row gap-[20px] mt-12 h-full flex-wrap justify-center">
          {MUSICS.map((item, index) => (
            <PlaylistCard {...item} key={index} />
          ))}
        </div>
        <h2 className="text-white text-center mt-12">
          Всі зображення використані в навчальних цілях з метою популяризації
          українського контенту
        </h2>
      </div>
    </section>
  );
}

export default App;
