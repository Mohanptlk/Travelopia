'use client';
import Image from 'next/image';
import React from 'react';
import { ImageWrapper } from './styles';

const Content = () => {
  return (
    <>
      <ImageWrapper>
        <Image
          src='/images/dummy.jpg'
          alt='Next.js Logo'
          layout='fill'
          objectFit='cover'
        />
        <div className='overlay-text'>
          <span>Title</span>
          <button type='button' onClick={() => alert('Hello, Word')}>
            Click here
          </button>
        </div>
      </ImageWrapper>
    </>
  );
};

export default Content;
