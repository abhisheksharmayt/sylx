"use client";

import "./style.css";
import { clients } from "./clients-data";
import { HiExternalLink } from "react-icons/hi";
import { FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Videos = () => {
  return (
    <main>
      <section className="video-portfolio-section">
        <div className="video-intro-div">
          <h1 className="intro">
            Hi, I am <span className="name">Abhishek Sharma</span>
          </h1>
          <h4 className="info">
            An undergrad who loves to edit videos and knows how to make them{" "}
            <span className="hightlight">engaging</span>
          </h4>
        </div>
        <div className="mail-div">
          <div className="copy-text-div">
            <p className="mail-text">abhisheksharmayt2@gmail.com</p>
          </div>
          <div
            className="copy-icon-div"
            onClick={() => {
              navigator.clipboard.writeText("abhisheksharmayt2@gmail.com");
            }}
          >
            <FaRegCopy className="copy-icon-link" />
          </div>
        </div>
        <div className="clients-div">
          <div className="clients-title">
            <p>Work Exprience</p>
          </div>
          <div className="clients">
            {clients.map((curr) => {
              const { id, img, name, link_params } = curr;
              return (
                <div key={id} className="client-card">
                  <div className="dark-overlay">
                    <Link href={`/archive/videos/${link_params}`}>
                      <HiExternalLink
                        style={{ color: "#eee", height: "30px", width: "30px" }}
                      />
                    </Link>
                  </div>
                  <Image 
                    className="client-logo" 
                    src={img} 
                    alt={`${name} Logo`}
                    width={70}
                    height={70}
                  />
                  <p className="client-name">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Videos;
