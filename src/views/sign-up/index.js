import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import FieldError from '../../components/FieldError';

import { signUp } from '../../store/actions/auth';

import styles from './sign-up.module.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const { loggedIn, error, data } = useSelector(state => state.auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(signUp(data));
  };

  if (loggedIn) {
    // Todo - Move this side effect
    localStorage.setItem('token', data.token);
    return <Navigate to="/todos" />;
  }

  return (
    <div>
      <h2 className={styles.title}>
        Welcome back!
      </h2>
      <p className={styles.subTitle}>
        Sign up to start using Simpledo today.
      </p>
      {error && <Error>{error}</Error>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <Input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && <FieldError>This field is required</FieldError>}
        </div>
        <div className={styles.field}>
          <Input
            type="email"
            placeholder="Email"
            //eslint-disable-next-line
            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
          />
          {errors?.email?.type === "required" && <FieldError>This field is required</FieldError>}
          {errors?.email?.type === "pattern" && (
            <FieldError>Value does not match email format</FieldError>
          )}
        </div>
        <div className={styles.field}>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors?.password?.type === "required" && <FieldError>This field is required</FieldError>}
          {errors?.password?.type === "minLength" && (
            <FieldError>Password should have 8 characters atleast</FieldError>
          )}
        </div>
        <Link to="/login" className={styles.link}>Do have an account? Sign in.</Link>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;