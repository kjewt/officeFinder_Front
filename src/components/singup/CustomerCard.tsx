import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { useQuery, useMutation } from 'react-query';
// import { AiOutlineEyeInvisible } from "react-icons/ai";

export const CustomerCard = () => {
  const navigate = useNavigate();
  const clickBackButton = () => {
    window.location.replace('/Join');
  };

  const postLogin = useMutation(
    'signUP',
    () =>
      fetch('api/agents/signup', {
        method: 'POST',
        body:JSON.stringify({
          email: signup?.email,
          name: '이름이야',
          password: signup?.password,
          businessNumber: signup?.businessNumber,
        })
      }),
    {
      onSuccess: res => {
        console.log('RES', res);
      },
      onError: error => {
        console.log(error);
      },
    },
  );

  const [signup, setSignup] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    businessNumber: '',
  });

  const handleFormData = e => {
    let { name, value } = e.target;
    console.log({ name, value });
    setSignup(prev => {
      return { ...prev, [name]: value };
    });
  };

  const clickSignupButton = () => {
    postLogin.mutate();
  }
  const validateEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const validatePassword = password => {
    const passwordRegex = /^\S{10,20}$/;
    return passwordRegex.test(password);
  };

  console.log({ signup });
  return (
    <>
      <div className="shadow-md rounded-xl p-8 w-[400px] h-[520px] mx-auto my-4 flex-col items-center">
        <h3 className="font-black">일반회원 회원가입</h3>
        <div className="pt-6">
          <Input
            inputLabel={'이메일'}
            placeholder={'이메일을 입력해 주세요'}
            warning={
              signup.email.trim() ? (validateEmail(signup.email) ? '맞습니다' : '이메일 형식이 아닙니다') : ''
            }
            type={'email'}
            value={signup.email}
            name={'email'}
            onChange={handleFormData}
          />
          <Input
            inputLabel={'비밀번호'}
            placeholder={'10~20자리의 비밀번호를 입력해주세요'}
            warning={
              signup.password.trim() ? (validatePassword(signup.password) ? '' : '10~20자리로 입력해주세요') : ''
            }
            type={'password'}
            value={signup.password}
            name={'password'}
            onChange={handleFormData}
          />
          <Input
            value={signup.passwordConfirm}
            name={'passwordConfirm'}
            inputLabel={'비밀번호'}
            placeholder={'한 번 더 입력해주세요'}
            warning={
              signup.passwordConfirm.trim()
                ? signup.password === signup.passwordConfirm
                  ? '맞습니다'
                  : '일치하지 않습니다'
                : ''
            }
            type={'password'}
            onChange={handleFormData}
          />
          {/* <AiOutlineEyeInvisible className="absolute left-10 text-xl mx-4" /> */}
          <Button
            clickHandler={()=>clickSignupButton()}
            style={'btn btn-outline btn-primary w-80 m-2 text-base'}
            text={'회원가입'}
            disabled={
              !validateEmail(signup.email) ||
              !validatePassword(signup.password) ||
              signup.password !== signup.passwordConfirm 
            }
          />
          <Button clickHandler={clickBackButton} text={'다시 선택하기'} style={'btn btn-outline btn-primary w-80 m-2 text-base'} />

        </div>
      </div>
    </>
  );
};
