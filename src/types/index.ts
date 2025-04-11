export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    gender: 'male' | 'female' | 'other';
}

export interface VaccineRecommendation {
    vaccineName: string;
    recommendedAgeGroup: string;
    gender: 'male' | 'female' | 'other';
}

export interface PreviousReport {
    id: string;
    userId: string;
    vaccineName: string;
    dateAdministered: Date;
    notes?: string;
}