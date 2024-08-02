import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormUniversal = ({ schema, onSubmit, fields }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields && Array.isArray(fields) && fields.map(({ label, name, type, showPassword, toggleShowPassword, placeholder }, index) => (
        <div key={index}>
          <label>{label}</label>
          <div>
            <input
              type={showPassword ? 'text' : type}
              placeholder={placeholder}  // Додаємо плейсхолдер
              {...register(name)}
            />
            {toggleShowPassword && (
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? 'Приховати' : 'Показати'}
              </button>
            )}
          </div>
          {errors[name] && <p>{errors[name].message}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUniversal;

//======оригінальний код 

// import { useForm } from "react-hook-form"

// export default function FormUniversal() {
//   const { register, handleSubmit } = useForm()
//   const onSubmit = (data) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   )
// }



//==========================================================================

// // import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link } from 'react-router-dom';

// export default function FormUniversal  ({ initialValues, validationSchema, onSubmit, fields, buttonText, linkText, linkPath }) {
//   return (
//     <div>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         <Form>
//           {fields.map(({ name, type, label }) => (
//             <div key={name}>
//               <label htmlFor={name}>{label}</label>
//               <Field type={type} id={name} name={name} />
//               <ErrorMessage name={name} component="div" />
//             </div>
//           ))}
//           <button type="submit">{buttonText}</button>
//         </Form>
//       </Formik>
//       <p>{linkText} <Link to={linkPath}>{linkText}</Link></p>
//     </div>
//   );
// }

