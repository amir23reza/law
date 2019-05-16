import types from './types';

export function AddNavigation(property) {
    return {
        type: types.ADD_NAVIGATION,
        property
    }
}