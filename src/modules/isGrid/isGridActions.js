export const GRID_VIEW_UPDATED = 'isGrid/isGridUpdated';

export const isGridUpdated = (view) => ({
  type: GRID_VIEW_UPDATED,
  payload: {
    isGrid: view,
  },
});
