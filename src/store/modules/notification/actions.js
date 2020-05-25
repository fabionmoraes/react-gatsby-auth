export function signNotificationRequest(data) {
  return {
    type: '@notification/SIGN_NOTIFICATION_REQUEST',
    payload: { data },
  };
}

export function updateNotificationSuccess(notification) {
  return {
    type: '@notification/UPDATE_NOTIFICATION_SUCCESS',
    payload: { notification },
  };
}
