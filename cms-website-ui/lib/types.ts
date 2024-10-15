export interface FlyingMachineSearchParams {
    Attack: number;
    Defense: number;
    Agility: number;
    Speed: number;
    Capacity: number;
    page: number;
    pageSize: number;
    weapons: string;
    sort: string;
}

export interface Weapon {
    id: number;
    Name: string;
}

export interface Machine {
    documentId: string;
    id: number;
    Image: {
        url: string;
    },
    Name: string;
    Attack: number;
    Defense: number;
    Speed: number;
    weapons: Weapon[];
}

export interface CreateContactMessageFormState {
    errors?: {
        Name?: string[];
        Email?: string[];
        Message?: string[];
    }
    message?: string;
    success?: string;
}