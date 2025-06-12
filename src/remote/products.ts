import {doc, getDocs, collection} from 'firebase/firestore';

import {COLLECTIONS} from '@constants/callection';

import {fireStore} from './firebase';

export const getProductsData = async (categoryId: string) => {
  const categoryRef = doc(fireStore, COLLECTIONS.CATEGORIES, categoryId);

  const productsSnap = await getDocs(collection(categoryRef, COLLECTIONS.PRODUCTS));

  const products = productsSnap.docs.map((productDoc) => ({
    ...productDoc.data(),
  }));

  return products;
};
