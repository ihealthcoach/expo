import { create } from "zustand";

export type User = {
  id: number;
  first_name: string;
  email: string;
};

export type UsersState = {
  users: User[];
  firstName: string;
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
};

// TODO: Hardcoded needs to be fetched from user account in database
const useUserStore = create<UsersState>((set) => ({
  users: [],
  firstName: "Casper",
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
}));

export { useUserStore };
