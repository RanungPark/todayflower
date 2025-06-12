import {fetchImgURL, imgOptimization} from '@utils/img';

interface ShopDatas {
  id: number;
  children: string;
  src: string;
  url: string;
}

export const shopDatas: ShopDatas[] = [
  {
    id: 1,
    children: 'Fresh Flowers',
    src:
      fetchImgURL({category: 'fresh_flowers', name: 'fresh_flowers_rep'}) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/fresh_flowers`,
  },
  {
    id: 2,
    children: 'Dried Flowers',
    src:
      fetchImgURL({category: 'dried_flowers', name: 'dried_flowers_rep'}) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/dried_flowers`,
  },
  {
    id: 3,
    children: 'Live Plants',
    src:
      fetchImgURL({category: 'live_plants', name: 'live_plant_rep'}) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/live_plants`,
  },
  {
    id: 4,
    children: 'Designer Vases',
    src:
      fetchImgURL({category: 'designer_vases', name: 'designer_vases_rep'}) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/designer_vases`,
  },
  {
    id: 5,
    children: 'Aroma Candels',
    src:
      fetchImgURL({category: 'aroma_candles', name: 'aroma_candles_rep'}) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/aroma_candles`,
  },
  {
    id: 6,
    children: 'Fresheners',
    src:
      fetchImgURL({category: 'fresheners', name: 'fresheners_rep'}) +
      imgOptimization({
        width: 400,
        height: 400,
      }),
    url: `/categories/fresheners`,
  },
];
