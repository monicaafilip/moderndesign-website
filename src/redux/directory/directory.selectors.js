import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectoryProducts = createSelector(
    [selectDirectory],
    directory => directory.products
);