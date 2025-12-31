export interface Resource {
  id: number;
  title: string;
  category: string;
  sub_category: string;
  address: string;
  hours: string;
  description?: string; // Le '?' signifie que c'est optionnel
}