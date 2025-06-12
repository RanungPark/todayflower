import {collection, doc, writeBatch} from 'firebase/firestore';

import {Button} from '@todayflower-public/ui';
import {driedFlowersBg, driedFlowersProducts} from '@mocks/data/driedFlowersDatas';
import {freshFlowersBg, freshFlowersProducts} from '@mocks/data/freshFlowersDatas';
import {livePlantsBg, livePlantsProducts} from '@mocks/data/livePlantsDatas';
import {designerVasesBg, designerVasesProducts} from '@mocks/data/designerVasesDatas';
import {aromaCandlesBg, aromaCandlesProducts} from '@mocks/data/aromaCandlesDatas';
import {freshenersBg, freshenersProducts} from '@mocks/data/freshenersDatas';
import {fireStore} from '@remote/firebase';

function ProductMockButton() {
  const handleClick = async () => {
    const batch = writeBatch(fireStore);

    const categories = [
      {
        id: 'fresh_flowers',
        ...freshFlowersBg,
        products: freshFlowersProducts,
      },
      {
        id: 'dried_flowers',
        ...driedFlowersBg,
        products: driedFlowersProducts,
      },
      {
        id: 'live_plants',
        ...livePlantsBg,
        products: livePlantsProducts,
      },
      {
        id: 'designer_vases',
        ...designerVasesBg,
        products: designerVasesProducts,
      },
      {
        id: 'aroma_candles',
        ...aromaCandlesBg,
        products: aromaCandlesProducts,
      },
      {
        id: 'fresheners',
        ...freshenersBg,
        products: freshenersProducts,
      },
    ];

    categories.forEach((category) => {
      const categoryRef = doc(collection(fireStore, 'categories'), category.id);
      batch.set(categoryRef, {
        title: category.title,
        imgPath: category.imgPath,
      });

      category.products.forEach((product) => {
        const productRef = doc(collection(categoryRef, 'products'), product.id.toString());
        batch.set(productRef, product);
      });
    });

    await batch.commit();
    alert('상품 mock 데이터 업로드 완료');
  };

  return (
    <Button full onClick={handleClick}>
      상품 mock 데이터 업로드
    </Button>
  );
}

export default ProductMockButton;
