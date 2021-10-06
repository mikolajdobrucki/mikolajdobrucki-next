export default function Carousel({ data: settings, children, name }) {
  const showItem = (direction) => {
    const scrollWidth = window.innerWidth > 1312 ? 1312 : window.innerWidth;
    const currentPosition = document.querySelector(`#${name}`).scrollLeft;

    if (direction == "next") {
      document.querySelector(`#${name}`).scrollLeft =
        currentPosition + scrollWidth;
    }

    if (direction == "prev") {
      document.querySelector(`#${name}`).scrollLeft =
        currentPosition - scrollWidth;
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__header">
        <h2>{name}</h2>
        <div className="carousel__nav">
          <button
            className="carousel__button carousel__button--prev"
            onClick={() => showItem("prev")}
          />
          <button
            className="carousel__button carousel__button--next"
            onClick={() => showItem("next")}
          />
        </div>
      </div>
      <div className="carousel__main" id={name}>
        {children}
      </div>
    </div>
  );
}
