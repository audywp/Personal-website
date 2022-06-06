import { useState, useEffect, useCallback } from 'react';
import { Typography } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import { COLOR } from '../helpers/color';
import { Container, FlexBox } from '../styles/components/Box';
import { Fade } from 'react-reveal';
import { UseIsMobile } from '../helpers/isMobileSize';

const { Text: AntdText } = Typography;

export default function Home() {
  const [designation, setDesignation] = useState('Frontend');
  const [isMobile, getCurrentWidth] = UseIsMobile();

  useEffect(() => {
    getCurrentWidth();
  }, [getCurrentWidth]);

  const Text = ({
    children,
    size = isMobile ? '16px' : '3vw',
    fontWeight = 400,
    display = 'block',
    code = false,
    className,
  }) => {
    return (
      <AntdText className={className} code={code} style={{ color: COLOR.text, fontSize: size, display, fontWeight }}>
        {children}
      </AntdText>
    );
  };

  const onAnimationState = useCallback(() => {
    setDesignation((prevState) => {
      switch (prevState) {
        case 'Frontend':
          return 'Backend';

        case 'Backend':
          return 'Mentor';

        case 'Mentor':
          return 'Frontend';

        default:
          return prevState;
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      onAnimationState();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [onAnimationState]);

  const RenderIntro = () => {
    return (
      <Container display='flex' flexDir='row' justify='center' alignItems='center' height={'80vh'}>
        <FlexBox justify='center' alignItems='center'>
          <Typography style={{ maxWidth: 480 }}>
            <Text>Hi, I am Audy!</Text>
            <Text>I have experience as a</Text>

            <Fade top>
              <Text size={48} fontWeight={700}>
                {designation}
              </Text>
            </Fade>

            <Text>in developing web and mobile apps.</Text>
          </Typography>
        </FlexBox>

        {isMobile ? null : (
          <FlexBox>
            <Image
              style={{ zIndex: 0 }}
              src={require('../assets/images/audy.png')}
              alt='audywp'
              objectFit='cover'
              width={900}
              height={900}
            />
          </FlexBox>
        )}
      </Container>
    );
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Audy Wisuda Pratama' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RenderIntro />
    </>
  );
}

