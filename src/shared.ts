export function importAll(r : __WebpackModuleApi.RequireContext) {
  let images: any = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}