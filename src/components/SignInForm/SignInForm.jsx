import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormUniversal from '../FormUniversal/FormUniversal';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Неправильний email').required('Email є обов\'язковим'),
  password: yup.string().required('Пароль є обов\'язковим'),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/tracker');
  };

  const fields = [
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Введіть ваш email' },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      showPassword,
      toggleShowPassword: () => setShowPassword(!showPassword),
      placeholder: 'Введіть ваш пароль',
    },
  ];

  return <FormUniversal schema={schema} onSubmit={onSubmit} fields={fields} />;
};

export default SignInForm;

















//==============================

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';

// const schema = yup.object().shape({
//   email: yup.string().email('Неправильний email').required('Email є обов\'язковим'),
//   password: yup.string().required('Пароль є обов\'язковим'),
// });

// const SignInForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     // Для демонстрації логування та навігації
//     console.log(data);
//     navigate('/tracker');
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Email</label>
//         <input type="email" {...register('email')} />
//         {errors.email && <p>{errors.email.message}</p>}
//       </div>
//       <div>
//         <label>Пароль</label>
//         <div>
//           <input type={showPassword ? 'text' : 'password'} {...register('password')} />
//           <button type="button" onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? 'Приховати' : 'Показати'}
//           </button>
//         </div>
//         {errors.password && <p>{errors.password.message}</p>}
//       </div>
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignInForm;




///===================================================================================
// import  { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const schema = yup.object().shape({
//   email: yup.string().email('Неправильний email').required('Email є обов\'язковим'),
//   password: yup.string().required('Пароль є обов\'язковим'),
// });

// const SignInForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('https://example.com/api/auth', data);
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         navigate('/tracker');
//       }
//     } catch (error) {
//       alert('Авторизація не вдалася. Перевірте ваші дані.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Email</label>
//         <input type="email" {...register('email')} />
//         {errors.email && <p>{errors.email.message}</p>}
//       </div>
//       <div>
//         <label>Пароль</label>
//         <div>
//           <input type={showPassword ? 'text' : 'password'} {...register('password')} />
//           <button type="button" onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? 'Приховати' : 'Показати'}
//           </button>
//         </div>
//         {errors.password && <p>{errors.password.message}</p>}
//       </div>
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignInForm;
















































//======================================================================================


// // import React from 'react';
// import * as Yup from 'yup';
// import FormUniversal from '../FormUniversal/FormUniversal';

// const SignInForm = () => {
//   const initialValues = {
//     email: '',
//     password: '',
//     confirmPassword: '',
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Required'),
//     password: Yup.string().required('Required'),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
//   });

//   const onSubmit = (values) => {
//     console.log('Form data', values);
//   };

//   const fields = [
//     { name: 'email', type: 'email', label: 'Email' },
//     { name: 'password', type: 'password', label: 'Password' },
//     { name: 'confirmPassword', type: 'password', label: 'Confirm Password' },
//   ];

//   return (
//     <FormUniversal
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//       fields={fields}
//       buttonText="Sign Up"
//       linkText="Already have an account? Sign In"
//       linkPath="/signin"
//     />
//   );
// };

// export default SignInForm;