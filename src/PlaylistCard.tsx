import { FunctionComponent } from "react";
import { SiYoutubemusic, SiSpotify, SiApplemusic } from "react-icons/si";

interface PlaylistCardProps {
  title: string;
  genre: string;
  description: string;
  ymLink: string;
  aLink: string;
  sLink: string;
  img: string;
}

const PlaylistCard: FunctionComponent<PlaylistCardProps> = ({
  title,
  genre,
  description,
  ymLink,
  aLink,
  sLink,
  img,
}) => {
  return (
    <div className="text-white flex flex-col justify-between bg-[#701f70] p-2 pt-10 rounded-lg w-[400px]">
      <div className="flex flex-col gap-4 mx-auto rounded-lg p-4 text-center">
        <h2 className="text-4xl">{title}</h2>
        <div className="w-[300px] h-[300px] mx-auto">
          <img
            src={img}
            alt=""
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
        <p className="text-xl">Жанр: {genre}</p>
      </div>
      <p className="mt-6">{description}</p>
      <div>
        <div className="bg-white w-full h-[2px] mt-2"></div>
        <div className="flex flex-row justify-between mt-4 text-4xl">
          {ymLink && (
            <a href={ymLink} target="_blank">
              <SiYoutubemusic />
            </a>
          )}
          {aLink && (
            <a href={aLink} target="_blank">
              <SiApplemusic />
            </a>
          )}
          {sLink && (
            <a href={sLink} target="_blank">
              <SiSpotify />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
