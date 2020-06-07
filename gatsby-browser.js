import "typeface-montserrat";
import "typeface-noto-serif";

import { timeout } from "components/Transition";

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), timeout);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), timeout);
  }
  return false;
};
