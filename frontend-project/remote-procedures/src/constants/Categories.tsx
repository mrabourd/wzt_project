import { CircleQuestionMark, Download, Folder, User, File, House, Scale } from 'lucide-react';

export const CATEGORIES = [
  { id: 'what', label: 'Asylum, what is that?', icon: CircleQuestionMark  },
  { id: 'permits', label: 'Residence permits', icon: Download },
  { id: 'first', label: 'First reception', icon: Folder },
  { id: 'application', label: 'Asylum application', icon: User },
  { id: 'procedures', label: 'Asylum procedures', icon: File },
  { id: 'ofpra', label: 'Ofpra file and interview', icon: Scale },
  { id: 'cnda', label: 'Appeal to CNDA', icon: House },
];