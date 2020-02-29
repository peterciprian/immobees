export interface Address {
    city: string;
    postalCode: string;
    district: string;
    county: string;
    country: string;
    street: string;
    number: string;
    googleAddress: string;
}

export interface Price {
    fee: number;
    bills: number;
    currency: string;
    caution: number;
    billsIncluded: boolean;
}

export interface Pet {
    species: string;
    amount: number;
}

export interface Age {
    min: number;
    max: number;
}

export interface Client {
    gender: string;
    nationality: string;
    qualification: string;
    hasErasmus: boolean;
    spokenLanguages: string[];
    moveIntoAt: Date;
    school: string;
    profession: string;
    children: number;
    pets: Pet[];
    age: Age;
    smoking: boolean;
    leaveOnWeekends: boolean;
    personality: string;
}

export interface Details {
    lift: boolean;
    washingMachine: boolean;
    smokingArea: boolean;
    balcony: boolean;
    gym: boolean;
    accessible: boolean;
    petsAllowed: boolean;
    television: boolean;
    internet: boolean;
    garage: boolean;
    jakuzzi: boolean;
    airConditioner: boolean;
    privateBathroom: boolean;
    parking: string;
    shortPeriod: boolean;
}

export interface RootObject {
    serviceType: string;
    roomType: string;
    address: Address;
    description: string;
    price: Price;
    floorArea: number;
    roomArea: number;
    innerHeight: number;
    client: Client;
    furnished: string;
    building: string;
    condition: string;
    residents: number;
    roomMates: number;
    floors: string;
    details: Details;
}
