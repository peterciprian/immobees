export interface Profile {
  name: string;
  introduction: string;
  avatar: Avatar;
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
  gender: string;
  nationality: string;
  qualification: string;
  hasErasmus: boolean;
  spokenLanguages: string[];
  moveIntoAt: string;
  school: string;
  profession: string;
  children: number;
  pets: number;
  smoking: boolean;
  leaveOnWeekends: boolean;
  personality: string;
  subject: Subject;
}

export interface Avatar {
    url: string;
}

export interface Address {
    city: string;
    postalCode: string;
    district?: string;
    county?: string;
    country: string;
    street: string;
    number: string;
    googleAddress: string;
    display: string;
}

export interface Price {
    fee: number;
    min: number;
    max: number;
    billsIncluded: boolean;
    caution: number;
    currency: string;
}

export interface Picture {
    url: string;
    label: string;
}

export interface Client {
    gender: string;
    nationality: string;
    qualification: string;
    hasErasmus: boolean;
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
    parking: boolean;
    shortPeriod: boolean;
}

export interface Subject {
    serviceType: string;
    roomType: string;
    address: Address;
    description: string;
    price: Price;
    pictures: Picture[];
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
    createdAt: Date;
    updatedAt: Date;
}
