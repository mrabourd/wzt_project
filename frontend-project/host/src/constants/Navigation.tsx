export interface MenuNav {
  name: string;
  href: string;
  color: 'guide-green' | 'guide-blue' | 'guide-yellow' | 'guide-red';
}

export const NAVIGATION_ITEMS: MenuNav[] = [
  { name: 'ARRIVING IN PARIS', href: '/arriving', color: 'guide-green' },
  { name: 'USEFUL ADDRESSES', href: '/addresses', color: 'guide-blue' },
  { name: 'YOUR SOCIAL RIGHTS', href: '/rights', color: 'guide-yellow' },
  { name: 'PROCEDURES', href: '/procedures', color: 'guide-red' },
];