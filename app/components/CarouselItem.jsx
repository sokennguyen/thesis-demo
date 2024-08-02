import Image from "next/image";

export default function CarouselItem() {
  return (
    <div className="carousel-item">
      <div className="flex flex-col space-y-1">
        <Image
          width={160}
          height={240}
          alt="appstore"
          src="/pencil.jpg"
          //width and height are set inside the Image component
          className="rounded-box w-40 h-56 object-fill"
        />

        <div className="flex flex-row items-center space-x-1">
          <div className="flex rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div>(10)</div>
        </div>
        <div>
          <div className="text-xs text-gray-300">A Brand</div>
          <div className="text-lg">Yellow Pencil</div>
          <div className="flex flex-row space-x-1">
            <div className="text-gray-400 line-through">5$</div>
            <div className="text-red-600">3$</div>
          </div>
        </div>
      </div>
    </div>
  );
}
