import Image from "next/image";

interface ICardCategoryProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const CardCategory: React.FC<ICardCategoryProps> = ({
  imageSrc,
  imageAlt = "",
  title = "",
  description,
}) => {
  return (
    <div className="Card w-full max-w-[20rem] bg-white z-10 rounded-xl overflow-hidden">
      <div className="relative w-full h-40 sm:h-48 md:h-64 bg-dark overflow-hidden rounded-t-xl">
        {imageSrc !== undefined && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 16rem"
            priority={false}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4 gap-2">
        <div className="text-dark font-bold text-[14px] sm:text-2xl">{title}</div>
        <div className="text-gray/800 text-[12px] sm:text-base leading-5 break-words">
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
