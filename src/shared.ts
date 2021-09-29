export function importAll(r : __WebpackModuleApi.RequireContext) {
  let images: any = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

export function intersectionObserverCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  })
}

export const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
}