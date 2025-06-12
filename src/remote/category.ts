import {getDoc, doc} from 'firebase/firestore';

import {COLLECTIONS} from '@constants/callection';

import {fireStore} from './firebase';

export const getCategoryData = async (categoryId: string) => {
  const categoryRef = doc(fireStore, COLLECTIONS.CATEGORIES, categoryId);

  const categorySnap = await getDoc(categoryRef);

  if (!categorySnap.exists()) throw new Error('카테고리 없음');

  const {title, imgPath} = categorySnap.data();

  return {
    title,
    imgPath,
  };
};
