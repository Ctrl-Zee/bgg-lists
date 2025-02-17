import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '../features/login/components/LoginForm';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [message, setMessage] = useState('');

  // const handleLogin = async () => {
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     setMessage(error.message);
  //   } else {
  //     navigate({ to: '/collection' });
  //   }
  // };

  return (
    // <>
    //   <div>{message}</div>
    //   <TextInput
    //     placeholder="Email"
    //     type="email"
    //     value={email}
    //     onChange={(event) => setEmail(event.currentTarget.value)}
    //   />
    //   <TextInput
    //     placeholder="Password"
    //     type="password"
    //     value={password}
    //     onChange={(event) => setPassword(event.currentTarget.value)}
    //   />
    //   <Button variant="filled" onClick={handleLogin}>
    //     Login
    //   </Button>
    // </>
    <div className="flex h-full flex-col items-center md:flex-row md:items-start md:justify-start lg:mx-auto lg:max-w-[1400px]">
      <div className="h-full w-full p-8 md:w-1/2">
        <div className="flex items-center justify-center md:hidden">
          <div className="my-16 flex h-40 w-40 items-center justify-center rounded-full bg-blue-600">
            Logo
          </div>
        </div>
        <div className="h-full items-center md:flex">
          <LoginForm />
        </div>
      </div>
      <div className="hidden h-full bg-linear-to-r from-cyan-500 to-blue-500 md:block md:w-1/2"></div>
    </div>
  );
}
