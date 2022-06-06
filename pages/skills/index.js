import { Avatar, Card, Typography } from 'antd';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { COLOR } from '../../helpers/color';
import { Container, FlexBox } from '../../styles/components/Box';
import Image from 'next/image';
import styles from '../../styles/Skills.module.css';
import { skills as dataSkills } from '../../helpers/dataSkills';
import { UseIsMobile } from '../../helpers/isMobileSize';

const { Title } = Typography;

export default function Skills() {
  const [skills, setSkills] = useState(dataSkills);
  const [isMobile, getCurrentWidth] = UseIsMobile();

  useEffect(() => {
    getCurrentWidth();
  }, [getCurrentWidth]);

  const handleHoverTrue = (idx) => {
    setSkills((prevState) => {
      prevState[idx].isHover = true;
      return [...prevState];
    });
  };

  const handleHoverFalse = (idx) => {
    setSkills((prevState) => {
      prevState[idx].isHover = false;
      return [...prevState];
    });
  };

  return (
    <>
      <Head>
        <title>Skills</title>
        <meta name='description' content='Audy Wisuda Pratama Portfolio' />
      </Head>
      <Container style={{ overflow: 'auto' }}>
        <FlexBox justify='center' alignItems='center'>
          <Typography>
            <Title style={{ color: COLOR.text }} level={2}>
              Skills
            </Title>
          </Typography>
        </FlexBox>

        <FlexBox style={{ marginTop: 40 }} flexDir='row' flexWrap='wrap' justify='center' alignItems='center'>
          {skills.map((value, index) => {
            return (
              <Card
                key={value.idx}
                onMouseEnter={() => handleHoverTrue(index)}
                onMouseLeave={() => handleHoverFalse(index)}
                className={styles.cardBlur}
                style={{
                  height: isMobile ? 100 : 136,
                  width: isMobile ? 100 : 136,
                  background: COLOR.darkCyanOpacity('A3'),
                  marginLeft: isMobile ? 20 : 40,
                  marginRight: isMobile ? 20 : 40,
                  marginBottom: 20,
                }}
              >
                {value.isHover ? null : (
                  <Image width={120} height={120} objectFit='contain' alt={value.title} src={value.src} />
                )}
                {value.isHover ? (
                  <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}> {value.title} </p>
                ) : null}
              </Card>
            );
          })}
        </FlexBox>
      </Container>
    </>
  );
}
