import { atom } from 'jotai';

export interface Guardian {
  gold: number;
  experience: number;
}

const initialGuardian: Guardian = {
  gold: 0,
  experience: 0,
}

export const guardianAtom = atom<Guardian>(initialGuardian)
