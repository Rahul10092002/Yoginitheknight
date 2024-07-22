
import Image from "next/image";

const Card = ({ imageSrc, title, description }) => {
  // return (
  //   <div className="flex flex-col items-center   rounded-lg ">
  //     <div className="w-full p-5 ">
  //       <Image
  //         className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
  //         src={imageSrc}
  //         alt={description}
  //         width={400}
  //         height={300}
  //       />
  //     </div>
  //     <div className="p-6">
  //       <h3 className="font-bold text-xl mb-2">{title}</h3>
  //       <p className="text-gray-700 text-base"></p>
  //     </div>
  //   </div>
  // );
  return (
    <article className="rounded-lg shadow-[0px_20px_207px_10px_rgba(249,_40,_249,_0.2)] transition hover:shadow-lg">
      <Image
        className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-lg"
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
      />

      <div className="bg-transparent p-4 sm:p-6">
        <>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
        </>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-black">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Card;
