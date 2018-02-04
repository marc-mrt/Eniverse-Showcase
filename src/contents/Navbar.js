// @flow

export const menus = [
  { name: 'what', display: 'What we do' },
  { name: 'esports', display: 'eSports' },
  { name: 'events', display: 'Our events' },
  { name: 'partners', display: 'Our partners' },
];
export const navStyle = {
  zIndex: '100',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
};
export const generateStyleForBurger = (isActive: boolean) => ({
  backgroundColor: isActive ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
});
export const generateClassesForBurger = (isActive: boolean) =>
  (isActive ? 'navbar-menu is-active' : 'navbar-menu');
