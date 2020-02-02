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
