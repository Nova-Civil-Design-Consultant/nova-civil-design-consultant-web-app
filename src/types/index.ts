// User and Authentication Types
export interface User {
  email: string;
  loginTime: number;
}

export interface UserSession {
  email: string;
  loginTime: number;
}

// Component Props Types
export interface AdminDashboardProps {
  setUser: (user: User | null) => void;
}

export interface SignInProps {
  setUser: (user: User | null) => void;
}

export interface ProtectedRouteProps {
  role: string;
  component: React.ComponentType;
  user: User | null;
}

// Navigation Types
export interface NavItem {
  title: string;
  active: boolean;
}

// Material-UI Copyright Props
export interface CopyrightProps {
  sx?: object;
}
