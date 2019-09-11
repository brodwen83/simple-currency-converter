export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

export const changePrimaryColor = (color: string) => ({
  type: CHANGE_PRIMARY_COLOR,
  color,
});
