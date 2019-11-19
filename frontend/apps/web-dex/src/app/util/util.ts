import { environment } from '@dex-env';

export const generateTransaction = (account, name, data) => ({
    actions: [{
        account: environment.CONTRACT_NAME,
        name: name,
        authorization: [{
            actor: account,
            permission: 'active',
        }],
        data: data,
    }],
})

export const transactionConfig = { broadcast: true, expireSeconds: 300 };