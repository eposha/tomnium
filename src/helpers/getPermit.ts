export const permitAccessStatus = {
  COURSE_STATUS_AVAILABLE: null,
  COURSE_STATUS_FREE_ACCESS: {
    freeModule: true,
    module: false,
  },
  COURSE_STATUS_COMPLETED: {module: true, freeModule: true},
  COURSE_STATUS_FULL_ACCESS: {module: true, freeModule: true},
};
