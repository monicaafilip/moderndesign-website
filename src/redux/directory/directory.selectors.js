import { createSelector } from 'reselect';

const selectProds = state => state.produse;

export const selectProducts = createSelector(
    [selectProds],
    produse => produse.products
);