export interface Employee {
    personalInfo: PersonalInformation;
    salary: string;
    dateJoined: string;
    skills: string[];
    weeklyHours: number;
    daysOff: number;
    jobTitle: string;
}

export interface PersonalInformation {
    firstName: string;
    middleName?: string;
    lastName: String;
    nationality: string;
    maritalStatus: string;
    primaryLanguage: string;
    email: string;
    age: string;
    address: string;
    phoneNumber: string;
}
