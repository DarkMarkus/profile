export const initialState = {
  defaultLocale: 'en',
  availableLocales: ['de', 'it'],
  sections: [
    {
      id: 'home',
      label: 'home',
      icon: null,
      route: '/',
    },
    {
      id: 'personal',
      label: 'personal',
      route: '/personal',
    },
    {
      id: 'academic',
      label: 'academic',
      route: '/academic',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
