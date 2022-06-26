import {RegisterForm} from '@/components/auth';

const Register = () => {
  return <RegisterForm />;
};

//@ts-ignore
Register.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Register;
