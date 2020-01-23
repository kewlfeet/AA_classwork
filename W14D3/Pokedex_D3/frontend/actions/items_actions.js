import * as apiUtil from "../util/api_util";

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
})

export const requestItems = items => ({
    // apiUtil.receiveItems(items).then
})

