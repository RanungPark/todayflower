import { ReactComponent as Facebook } from '@assets/icons/wght300/Brands/Facebook.svg';
import { ReactComponent as Instagram } from '@assets/icons/wght300/Brands/Instagram.svg';
import { ReactComponent as Pinterest } from '@assets/icons/wght300/Brands/Pinterest.svg';
import { ReactComponent as Telegram } from '@assets/icons/wght300/Brands/Telegram.svg';
import { ReactComponent as Twitter } from '@assets/icons/wght300/Brands/Twitter.svg';

export const SNSIconDatas = [
  { id: 1, IconComponent: Instagram, SNSName: 'Instagram' },
  { id: 2, IconComponent: Pinterest, SNSName: 'Pinterest' },
  { id: 3, IconComponent: Facebook, SNSName: 'Facebook' },
  { id: 4, IconComponent: Twitter, SNSName: 'Twitter' },
  { id: 5, IconComponent: Telegram, SNSName: 'Telegram' },
];

export const menuDatas = [
  {
    id: 1,
    to: '/login',
    children: 'Sign in',
  },
  {
    id: 2,
    to: '/',
    children: 'Shop',
  },
  {
    id: 3,
    to: '/servise',
    children: 'Servise',
  },
  {
    id: 4,
    to: '/contact',
    children: 'Contact',
  },
  {
    id: 5,
    to: '/about',
    children: 'About us',
  },
];

export const aboutDatas = [
  `Shipping & returns`,
  `Terms & conditions`,
  `Privacy policy`,
];

export const serviceDatas = ['Flower Subcription', 'Wedding & Event Decor'];
