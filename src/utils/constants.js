export const INITIAL_STATE = {
  main: { title: "", description: "" },
  ui: {
    showModal: false,
    template: "basic",
  },
  auth: {
    isLogged: false,
    token: null,
    user: null,
  },
  content: {
    items: [],
    count: 0,
  },
};

export const DATE_FORMATS = {
  default: "DD-MM-YYYY",
};
