export interface Frequents {
    subjects: Frequent[];
}
export interface Frequent {
    search: {
        city: string;
        serviceType: string;
    };
    count: number;
}

export interface Statistics {
    totalDemands: number;
    totalOffers: number;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Nationality {
  num_code: string;
  value: string;
  alpha_3_code: string;
  text: string;
  en_long_name: string;
}
