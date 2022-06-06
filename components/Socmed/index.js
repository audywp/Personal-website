import React from 'react';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { COLOR } from '../../helpers/color';

export default function Socmed() {
  return (
    <div className='socialmedia'>
      <a
        href='https://github.com/audywp'
        target='_blank'
        style={{ color: COLOR.primary, fontSize: 24 }}
        rel='noreferrer'
      >
        <GithubFilled />
      </a>

      <a
        href='https://www.linkedin.com/in/audy-wisuda-pratama-517370b3/'
        target='_blank'
        style={{ color: COLOR.primary, fontSize: 24 }}
        rel='noreferrer'
      >
        <LinkedinFilled />
      </a>

      <a
        target='_blank'
        href='mailto:audywisudapratama@gmail.com'
        style={{ color: COLOR.primary, fontSize: 24 }}
        rel='noreferrer'
      >
        <MailFilled />
      </a>
    </div>
  );
}
