import { Accounts, Account, Address, Subject } from './accounts';

export interface Recommendations {
    accounts: Accounts[];
}

export interface Profile extends Account {
    name: string;
    avatar: string;
    introduction: string;
    birthday: Date;
    gender: string;
    nationality: string;
    qualification: string;
    hasErasmus: boolean;
    spokenLanguages: string | string[];
    moveIntoAt: string;
    school: string;
    profession: string;
    children: boolean | number;
    pets: boolean | string[];
    smoking: boolean;
    leaveOnWeekends: boolean;
    personality: string;
    subject: Subject;
}
