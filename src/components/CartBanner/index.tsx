import HeroBanner from "../HeroBanner";
import { CartBannerProps } from "./types";

function CartBanner({ url }: CartBannerProps) {
  return <HeroBanner backgroundImage={url} />;
}

export default CartBanner;
