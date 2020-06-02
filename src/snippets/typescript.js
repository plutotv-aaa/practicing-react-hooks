
export const A = `
interface IUser {
  username: string;
  email:  string;
  password: string;
}

const [user, setUser] = React.useState<IUser | null>(initialUserData);

`;
