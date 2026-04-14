type UserRole = "client" | "assistant" | "admin" | null;

type AppStore = {
  initialized: boolean;
  userRole: UserRole;
  sidebarOpen: boolean;
  notificationsOpen: boolean;
};

export const store: AppStore = {
  initialized: true,
  userRole: null,
  sidebarOpen: false,
  notificationsOpen: false,
};
