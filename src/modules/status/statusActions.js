export const STATUS_UPDATED = 'status/statusUpdated';

export const updateStatus = (status) => ({
  type: STATUS_UPDATED,
  payload: {
    status,
  },
});
