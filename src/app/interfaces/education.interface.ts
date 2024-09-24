// education.interface.ts
export interface University {
  title: string;
  institution: string;
  startDate: string;
  endDate?: string;
  imageUrl: string;
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
  imageUrl: string;
}

export interface Course {
  title: string;
  provider: string;
  date: string;
  imageUrl: string;
}
