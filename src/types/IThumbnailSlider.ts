import Splide from "@splidejs/splide";

export default interface IThumbnailSlider {
    children: React.ReactNode;
    mainSliderRef: React.RefObject<Splide>;
}