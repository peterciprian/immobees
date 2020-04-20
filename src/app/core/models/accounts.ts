export enum serviceType {
    DEMAND,
    OFFER
}

export enum roomType {
    SHARED,
    PRIVATE
}

export enum currency {
    HUF,
    EUR
}

export enum school {
    ANNYE,
    ATE,
    ATF,
    AVKF,
    BGE,
    BHF,
    BJHF,
    BKTF,
    BME,
    BTA,
    CORVINUS,
    DE,
    DRHE,
    DUE,
    EDUTUS,
    EGHF,
    EHE,
    EJF,
    EKE,
    ELTE,
    ESZHF,
    GDF,
    GFF,
    IBS,
    KE,
    KEE,
    KJE,
    KRE,
    LFZE,
    ME,
    METU,
    MKE,
    MOME,
    MTE,
    NJE,
    NKE,
    NYE,
    OE,
    OR_ZSE,
    PE,
    PHF,
    PPKE,
    PRTA,
    PTE,
    PTF,
    SE,
    SOE,
    SRTA,
    SSTF,
    SSZHF,
    SZAGKHF,
    SZE,
    SZFE,
    SZIE,
    SZPA,
    SZTE,
    TE,
    TKBF,
    TPF,
    VHF,
    WJLF,
    WSUF,
    MILTON,
    FU,
    MCDC,
    MODART,
    UB,
    VISART,
    VK
}
export enum gender {
    FEMALE,
    MALE
}
export enum furnished {
    FULLY,
    PARTIALLY,
    MECHANIZED,
    UNFURNISHED
}
export enum building {
    PANEL,
    BRICK,
    SLIDING_FORMWORK
}
export enum condition {
    NEW,
    MINT,
    RENOVATED,
    GOOD,
    MEDIUM,
    NEEDS_RANOVATION,
    POOR,
    MODERN,
    LUXURY
}

export interface Account {
    userID: string;
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
    children: boolean;
    pets: string;
    smoking: boolean;
    leaveOnWeekends: boolean;
    personality: string;
    subject: Subject;
    active: boolean;
    confirmed: boolean;
}

export interface Avatar {
    url: string;
}

export interface Address {
    city?: string;
    postalCode?: string;
    district?: string;
    county?: string;
    country?: string;
    street?: string;
    number?: string;
    googleAddress?: string;
    display?: string;
}

export interface Price {
    fee?: number;
    min?: number;
    max?: number;
    billsIncluded?: boolean;
    caution?: number;
    currency: string;
    overhead?: number;
}

export interface Picture {
    url: string;
    label: string;
}

export interface Client {
    gender?: string;
    nationality?: string;
    qualification?: string;
    hasErasmus?: boolean;
    moveIntoAt?: string;
    description?: string;
}

export interface Details {
    lift?: boolean;
    washingMachine?: boolean;
    smokingArea?: boolean;
    balcony?: boolean;
    gym?: boolean;
    accessible?: boolean;
    petsAllowed?: boolean;
    television?: boolean;
    internet?: boolean;
    garage?: boolean;
    jakuzzi?: boolean;
    airConditioner?: boolean;
    privateBathroom?: boolean;
    parking?: boolean;
    shortPeriod?: boolean;
}

export interface Subject {
    serviceType?: string;
    roomType?: string;
    address?: Address;
    description?: string;
    price?: Price;
    pictures?: Picture[];
    floorArea?: number;
    roomArea?: number;
    innerHeight?: number;
    client?: Client;
    furnished?: string;
    building?: string;
    condition?: string;
    residents?: number;
    roomMates?: number;
    floors?: string;
    details?: Details;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface Accounts {
    accounts: Account[];
}

export interface Recommendations {
    accounts: Accounts[];
}
