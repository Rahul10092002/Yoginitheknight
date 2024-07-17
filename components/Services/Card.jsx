// components/Card.jsx
import Image from "next/image";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <div className="w-40 h-40 overflow-hidden rounded-full mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Card;
