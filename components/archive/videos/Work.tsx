"use client";

import { clients } from "./clients-data";
import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";
import "./style.css";

interface WorkProps {
  id: string;
}

const Work = ({ id }: WorkProps) => {
  if (id === "markitup") {
    const client = clients.find((curr) => curr.link_params == id);
    return (
      <main>
        <section className="videos-section">
          <div className="client-title">
            <div className="title">
              <h1>{client?.name}</h1>
              <div className="underline"></div>
            </div>
            <h4 className="info">
              Edited <span className="hightlight">youtube videos</span> and{" "}
              <span className="hightlight">reels</span> for different clients
              according to their needs and tried to make them as engaging as
              possible. Here are some videos,
            </h4>
          </div>
          <div className="videos-list">
            {client?.videos.map((curr) => {
              const { video_id, thumbnail, video_link } = curr;
              return (
                <a key={video_id} href={video_link} target="_blank" rel="noopener noreferrer">
                  <div className="video-div">
                    <div className="dark-overlay">
                      <AiFillPlayCircle
                        style={{ color: "#eee", height: "50px", width: "50px" }}
                      />
                    </div>
                    <Image 
                      src={thumbnail} 
                      alt="video"
                      width={320}
                      height={180}
                      style={{ height: '180px', width: 'auto' }}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <h1>Page Not Found</h1>
      </main>
    );
  }
};

export default Work;
