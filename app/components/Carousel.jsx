import CarouselItem from "./CarouselItem";

export default function Carousel() {
  return (
    <div className="carousel carousel-center bg-white rounded-box max-w-md space-x-10 ">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
  );
}
