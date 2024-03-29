import { Account, Avatar, Subject } from './accounts';

export class Profile implements Account {
    constructor() {
        this.userID = null;
        this.name = '';
        this.introduction = '';
        this.avatar = { url: null };
        this.birthday = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.lastLoginAt = new Date();
        this.gender = null;
        this.nationality = '';
        this.qualification = '';
        this.hasErasmus = null;
        this.spokenLanguages = [];
        this.moveIntoAt = new Date();
        this.school = '';
        this.profession = '';
        this.children = null;
        this.pets = '';
        this.smoking = null;
        this.leaveOnWeekends = null;
        this.personality = '';
        this.subject = {
            serviceType: 'DEMAND',
            roomType: 'PRIVATE',
            address: {
                city: '',
                postalCode: '',
                district: '',
                county: '',
                country: '',
                street: '',
                number: '',
                googleAddress: '',
                display: ''
            },
            description: '',
            price: {
                fee: null,
                min: null,
                max: null,
                billsIncluded: null,
                caution: null,
                currency: 'Ft',
                overhead: null
            },
            pictures: [],
            floorArea: null,
            roomArea: null,
            innerHeight: null,
            client: {
                gender: '',
                nationality: '',
                qualification: '',
                hasErasmus: null,
                moveIntoAt: new Date(),
                description: ''
            },
            furnished: '',
            building: '',
            condition: '',
            residents: null,
            roomMates: null,
            floors: null,
            details: {
                lift: null,
                washingMachine: null,
                smokingArea: null,
                balcony: null,
                gym: null,
                accessible: null,
                petsAllowed: null,
                television: null,
                internet: null,
                garage: null,
                jakuzzi: null,
                airConditioner: null,
                privateBathroom: null,
                parking: null,
                shortPeriod: null
            },
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.active = false;
        this.confirmed = false;
    }
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
    moveIntoAt: Date;
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
