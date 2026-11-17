import styles from "./page.module.css";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <section aria-label="Keep going image collection">
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <figure className={styles.imageCard} key={image.src}>
            {/* Keep each uploaded image's natural aspect ratio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} />
          </figure>
        ))}
      </div>
    </section>
  );
}
