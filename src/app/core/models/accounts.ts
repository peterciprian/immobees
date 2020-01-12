export interface Account {
    name: string;
    age: number;
    spokenLanguages: string[];
    school: string;
    subject: Subject;
    roomType: string;
    moveIntoAt: Date;
    price: Price;
}

export interface Subject {
    serviceType: string;
    address: Address;
}

export interface Address {
    display: string;
}

export interface Price {
    currency: string;
    min: number;
    max: number;
    billsIncluded: boolean;
}

export interface Accounts {
    accounts: Account[];
}

