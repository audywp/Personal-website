import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Layout, Drawer } from 'antd';
import Button from '../Button/Button';
import { FlexBox } from '../../styles/components/Box';
import { COLOR } from '../../helpers/color';
import { Text } from '../../styles/components/Text/TextWrapper';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { UseIsMobile } from '../../helpers/isMobileSize';

export default function Navbar() {
  const [bgColor, setBgColor] = useState('none');
  const [visible, setVisible] = useState(false);
  const [isMobile, getCurrentWidth] = UseIsMobile();

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    getCurrentWidth();
  }, [getCurrentWidth]);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', (event) => {
        if (event.currentTarget.pageYOffset > 0) {
          setBgColor(COLOR.darkBlue);
        } else {
          setBgColor('none');
        }
      });
    }
  }, []);

  const downloadCV = () => {
    //Check the Browser type and download the File.
    let isIE = false || !!document.documentMode;
    if (isIE) {
      alert('your browser is not supported');
    } else {
      let a = document.createElement('a');
      a.setAttribute('download', 'AudyWisudaPratama(CV).pdf');
      a.setAttribute('href', 'https://drive.google.com/uc?export=download&id=1w26BTUU5mq6w-AYw5zk19hgIut76yr42');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Layout>
        <div
          style={{
            padding: '0 24px',
            height: 64,
            zIndex: 10,
            background: bgColor,
            display: 'flex',
            flexDirection: 'row',
            top: 0,
            position: 'fixed',
            width: '100vw',
            border: 'none',
          }}
        >
          <FlexBox flex={4} justify='center'>
            {isMobile ? (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setVisible(true);
                }}
              >
                <MenuOutlined style={{ fontSize: 24 }} />
              </a>
            ) : null}
          </FlexBox>
          {isMobile ? null : (
            <FlexBox className='navigation' flexDir='row' flex={3} alignItems='center' justify='space-evenly'>
              <Link href='/'>
                <Text.a>Home</Text.a>
              </Link>
              <Link href='/skills'>
                <Text.a>Skills</Text.a>
              </Link>
              <Link href='/portfolio'>
                <Text.a>Portfolio</Text.a>
              </Link>
              {/* <Link href='/'>
            <Text.a>Contact Me</Text.a>
          </Link> */}
            </FlexBox>
          )}

          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button onClick={downloadCV} title={'Download CV'} />
          </div>
        </div>
      </Layout>
      <Drawer
        drawerStyle={{ backgroundColor: COLOR.darkCyan }}
        headerStyle={{ backgroundColor: COLOR.darkCyan }}
        bodyStyle={{ backgroundColor: COLOR.darkCyan }}
        placement={'left'}
        width={200}
        onClose={onClose}
        visible={visible}
        closeIcon={<CloseOutlined style={{ color: COLOR.text }} />}
      >
        <FlexBox height={'200px'} className='navigation' alignItems='flex-start' justify='space-evenly'>
          <Link href='/'>
            <Text.a onClick={() => setVisible(false)}>Home</Text.a>
          </Link>
          <Link href='/skills'>
            <Text.a onClick={() => setVisible(false)}>Skills</Text.a>
          </Link>
          <Link href='/portfolio'>
            <Text.a onClick={() => setVisible(false)}>Portfolio</Text.a>
          </Link>
        </FlexBox>
      </Drawer>
    </>
  );
}
