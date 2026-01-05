// types/CategoryMenuProps.ts
export interface CategoryMenuProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}