export interface MenuSection {
    name: string;
    summary: string;
}

const DASHBOARD = 'dashboard';
const PROFILE = 'profile';
export const SECTIONS: { [key: string]: MenuSection } = {
    [DASHBOARD]: {
        name: 'Dashboard',
        summary: 'Main Screen'
    },
};

export const PROFILESECTION = {
    [PROFILE] : {
        name: 'Profile',
        summary: 'Profile Screen'
    }
}
