import produce from 'immer';

const INITIAL_STATE = {
  notification: 0,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notification/SIGN_NOTIFICATION_REQUEST': {
        draft.notification = 0;
        break;
      }
      case '@notification/UPDATE_NOTIFICATION_SUCCESS': {
        draft.notification = action.payload.notification;
        break;
      }
      default:
    }
  });
}
