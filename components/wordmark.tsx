import Image from "next/image";

type WordmarkProps = {
  variant: "header" | "hero";
};

export function Wordmark({ variant }: WordmarkProps) {
  const hero = variant === "hero";
  const size = hero ? 72 : 28;

  return (
    <span className={`wordmark wordmark-${variant}`}>
      <Image
        src={hero ? "/icons/icon-512.png" : "/icons/icon-192.png"}
        alt=""
        width={size}
        height={size}
        className="wordmark-logo"
        priority
      />
      <span className="wordmark-name">
        <span className="awit">Awit</span>
        <span className="station">Station</span>
      </span>
    </span>
  );
}
