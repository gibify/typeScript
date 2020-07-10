
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;  // Pode usar o | e colocar outro tipo.
  techs: Array<string | TechObject>; // Usar string[] quando o tipo for único
} 

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}