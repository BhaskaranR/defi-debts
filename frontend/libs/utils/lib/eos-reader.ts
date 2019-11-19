import { environment } from '@dex-env';
import {BigNumber} from 'bignumber.js';

const formatRow = (result, model) => {
    result.rows = result.rows.map(model.fromJson);
    return result;
};
const getRowsOnly = result => result.rows;
const getFirstOnly = result => result.rows.length ? getRowsOnly(result)[0] : null;

export const read = async ({reader, table, index, upper_bound = null, limit = 10, model = null, scope =  environment.CONTRACT_NAME, firstOnly = false, rowsOnly = false, key_type = null, index_position = null}) => {
    let additions = index !== null ? {lower_bound:index, upper_bound: upper_bound ? upper_bound : new BigNumber(index).plus(limit).toString()} : {};
    if(key_type) additions = Object.assign({key_type}, additions);
    if(index_position) additions = Object.assign({index_position}, additions);
    const code = environment.CONTRACT_NAME;
    return await reader.getTableRows(Object.assign({ json:true, code, scope, table, limit }, additions)).then(result => {
        if(model) result = formatRow(result, model);
        if(firstOnly) return getFirstOnly(result);
        if(rowsOnly) return getRowsOnly(result);
        return result;
    });
};