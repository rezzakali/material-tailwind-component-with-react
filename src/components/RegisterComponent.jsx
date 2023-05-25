import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, check);
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex items-center justify-center dark:text-white"
    >
      <Typography variant="h4">Sign Up</Typography>
      <Typography className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            size="lg"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Checkbox
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
          label={
            <Typography
              variant="small"
              className="flex items-center font-normal dark:text-white"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Button className="mt-6" fullWidth type="submit">
          Register
        </Button>
        <Typography className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
};
export default RegisterComponent;
