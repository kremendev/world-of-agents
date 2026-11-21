/** The drawer's handle's name, wherever it is: "Activity", and how many "For you" items wait. */
export const activityLabel = (unread: number) => (unread > 0 ? `Activity, ${unread} for you` : 'Activity');
