export interface MenuSection {
    name: string;
    summary: string;
}

const DASHBOARD = 'dashboard';
const MENUMANGEMENT = 'menus';
const ORDERMANGEMENT = 'orders';
const PROFILE = 'profile';
export const SECTIONS: { [key: string]: MenuSection } = {
    [DASHBOARD]: {
        name: 'Dashboard',
        summary: 'Manage your sales'
    },
    [ORDERMANGEMENT] : {
        name: 'Orders',
        summary: 'Complete order management including dispatching orders, order history etc '
    },
    [MENUMANGEMENT]: {
        name: 'Menus',
        summary: 'Complete menu management include creating menu books, sections, menu, listing menu etc '
    }
};

export const PROFILESECTION = {
    [PROFILE] : {
        name: 'Profile',
        summary: 'Complete profile management include account management, transfer, staking'
    }
}
