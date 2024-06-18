export interface Education {
  establishment?: string;
  qualification?: string;
  year: number;
  areas: (string | null)[];
}