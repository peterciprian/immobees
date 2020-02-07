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
export enum nationality {
    AB,
    AC,
    AF,
    AH,
    AI,
    AK,
    AL,
    AM,
    AN,
    AR,
    AS,
    AT,
    AU,
    AY,
    AZ,
    BA,
    BB,
    BC,
    BE,
    BF,
    BH,
    BI,
    BL,
    BN,
    BO,
    BR,
    BS,
    BT,
    BU,
    BY,
    BZ,
    CA,
    CB,
    CC,
    CE,
    CG,
    CH,
    CI,
    CM,
    CO,
    CP,
    CR,
    CU,
    CV,
    CY,
    CZ,
    DA,
    DC,
    DE,
    DH,
    DK,
    DO,
    DR,
    DU,
    EC,
    EG,
    EK,
    EL,
    EN,
    ER,
    ES,
    ET,
    EV,
    FG,
    FI,
    FJ,
    FL,
    FR,
    GA,
    GB,
    GC,
    GE,
    GH,
    GL,
    GM,
    GR,
    GU,
    GY,
    HA,
    HE,
    HI,
    HO,
    HT,
    HU,
    IC,
    ID,
    IN,
    IQ,
    IR,
    IS,
    IT,
    JA,
    JM,
    JO,
    JW,
    KA,
    KI,
    KL,
    KO,
    KR,
    KS,
    KT,
    KU,
    KW,
    KY,
    KZ,
    LA,
    LB,
    LE,
    LI,
    LP,
    LU,
    LV,
    MA,
    MB,
    MC,
    MD,
    ME,
    MG,
    MI,
    ML,
    MM,
    MN,
    MO,
    MR,
    MS,
    MU,
    MW,
    MY,
    MZ,
    NA,
    NB,
    NC,
    NE,
    NG,
    NI,
    NM,
    NO,
    NS,
    NV,
    NZ,
    OG,
    OH,
    OJ,
    OM,
    OS,
    OT,
    PA,
    PE,
    PG,
    PH,
    PK,
    PM,
    PN,
    PO,
    PP,
    PR,
    PU,
    PW,
    PY,
    QA,
    RC,
    RD,
    RE,
    RG,
    RI,
    RK,
    RM,
    RO,
    RR,
    RS,
    RU,
    RW,
    SA,
    SB,
    SC,
    SD,
    SE,
    SH,
    SI,
    SK,
    SL,
    SM,
    SN,
    SO,
    SP,
    SR,
    SS,
    SU,
    SV,
    SW,
    SX,
    SY,
    SZ,
    TA,
    TB,
    TH,
    TJ,
    TK,
    TL,
    TM,
    TN,
    TO,
    TS,
    TT,
    TU,
    TV,
    TW,
    UA,
    UC,
    UD,
    UG,
    UK,
    UL,
    UR,
    US,
    UZ,
    VA,
    VE,
    VI,
    VT,
    WA,
    YA,
    YE,
    YK,
    YO,
    YU,
    ZA,
    ZI,
    ZM,
    ZU
}

export interface Account {
    name: string;
    age: number;
    spokenLanguages: string | string[];
    school: string;
    subject: Subject;
    roomType: string;
    client?: Client;
    moveIntoAt?: string | Date;
    price: Price;
}

export interface Subject {
    serviceType: string;
    roomType?: string;
    address: Address;
    pictures?: Picture[];
    description?: string;
    price?: Price;
    floorArea?: number;
    roomArea?: number;
    innerHeight?: number;
    client: Client;
    furnished?: string;
    building?: string;
    condition?: string;
    residents?: number;
    roomMates?: number;
    floors?: number;
    details?: Details;
}

export interface Address {
    city?: string;
    postalCode?: number;
    district?: string;
    county?: string;
    country?: string;
    street?: string;
    number?: number;
    googleAddress?: string;
    display?: string;
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

export interface Price {
    fee?: number;
    currency: string;
    min: number;
    max: number;
    billsIncluded: boolean;
    caution?: number;
}

export interface Client {
  gender?: string;
  nationality?: string;
  qualification?: string;
  hasErasmus?: boolean;
  moveIntoAt?: Date;
}

export interface Picture {
  data: string;
  label: string;
}

export interface Accounts {
    accounts: Account[];
}

