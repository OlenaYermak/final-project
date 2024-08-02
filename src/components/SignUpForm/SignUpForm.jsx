





import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiEyeOff, FiEye } from "react-icons/fi";
import css from './SignUpForm.module.css'
import clsx from 'clsx';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


  
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)} >
            <div className={css.formWrapper}>
                <label className={css.label}>Email</label>
                <input className={css.input}
                    type="text"
                    placeholder="Enter your email"
                    {...register('email')}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
        <div className={css.formWrapper}>
            <label className={css.label}>Password</label>
               <div className={clsx(css.passwordWrapper, css.passwordGroup)}>
                    <input className={css.input}
              type={showPassword ? "text" : "password"}
             
                       
                        placeholder="Enter your password"
                        {...register('password')}
                    />
                    <button className={css.buttonTogglePassword} type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?  <FiEye />:<FiEyeOff/>}
                    </button>
                </div>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className={css.formWrapper}>
          <label className={css.label}>Repeat Password</label>
          <div className={clsx(css.passwordWrapper, css.passwordGroup)}>
                <input className={css.input}
                    type="password"
                    placeholder="Repeat password"
            {...register('confirmPassword')}
            
          />
          <button className={css.buttonTogglePassword} type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?  <FiEye />:<FiEyeOff/>}
            </button>
            </div>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <button className={css.submitButton} type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;


























////=====================робоча версія з універсальною формою початок




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormUniversal from '../FormUniversal/FormUniversal';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   email: yup.string().email('Неправильний email').required('Email є обов\'язковим'),
//   password: yup.string().required('Пароль є обов\'язковим'),
//   repeatPassword: yup.string()
//     .oneOf([yup.ref('password'), null], 'Паролі не співпадають')
//     .required('Повторення пароля є обов\'язковим'),
// });

// const SignUpForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log('Registered User:', data);
//     navigate('/tracker');
//   };

//   const fields = [
//     { label: 'Email', name: 'email', type: 'email', placeholder: 'Введіть ваш email' },
//     {
//       label: 'Пароль',
//       name: 'password',
//       type: 'password',
//       showPassword,
//       toggleShowPassword: () => setShowPassword(!showPassword),
//       placeholder: 'Введіть ваш пароль',
//     },
//     {
//       label: 'Повторіть Пароль',
//       name: 'repeatPassword',
//       type: 'password',
//       showPassword: showRepeatPassword,
//       toggleShowPassword: () => setShowRepeatPassword(!showRepeatPassword),
//       placeholder: 'Повторіть ваш пароль',
//     },
//   ];

//   return <FormUniversal schema={schema} onSubmit={onSubmit} fields={fields} />;
// };

// export default SignUpForm;


/////=============================робоча версія з універсальною формою кінець





///======================
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';

// const schema = yup.object().shape({
//   email: yup.string().email('Неправильний email').required('Email є обов\'язковим'),
//   password: yup.string().required('Пароль є обов\'язковим'),
//   repeatPassword: yup.string()
//     .oneOf([yup.ref('password'), null], 'Паролі не співпадають')
//     .required('Повторення пароля є обов\'язковим'),
// });





// const SignUpForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     // Для демонстрації логування
//     console.log('Registered User:', data);
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
//       <div>
//         <label>Повторіть Пароль</label>
//         <div>
//           <input type={showRepeatPassword ? 'text' : 'password'} {...register('repeatPassword')} />
//           <button type="button" onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
//             {showRepeatPassword ? 'Приховати' : 'Показати'}
//           </button>
//         </div>
//         {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;








//=======================================================
// // import React from 'react';
// import * as Yup from 'yup';
// import FormUniversal from '../FormUniversal/FormUniversal';

// export default function SignUpForm () {
//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Required'),
//     password: Yup.string().required('Required'),
//   });

//   const onSubmit = (values) => {
//     console.log('Form data', values);
//   };

//   const fields = [
//     { name: 'email', type: 'email', label: 'Email' },
//     { name: 'password', type: 'password', label: 'Password' },
//   ];

//   return (
//     <FormUniversal
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//       fields={fields}
//       buttonText="Sign In"
//     //   linkText="Don't have an account? Sign Up"
//     //   linkPath="/signup"
//     />
//   );
// }
