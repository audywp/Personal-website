import { Typography } from 'antd';
import Image from 'next/image';
import { useEffect } from 'react';
import { COLOR } from '../../helpers/color';
import { portfolios } from '../../helpers/dataPortfolio';
import { Container, FlexBox } from '../../styles/components/Box';
import { Fade } from 'react-reveal';
import { UseIsMobile } from '../../helpers/isMobileSize';

const { Title, Paragraph } = Typography;

export default function PortfolioCard() {
  const [isMobile, getCurrentWidth] = UseIsMobile();

  useEffect(() => {
    getCurrentWidth();
  }, [getCurrentWidth]);
  return (
    <Container p='0 60px'>
      <Title level={2} style={{ color: COLOR.text, textAlign: 'center' }}>
        Portfolio
      </Title>
      {portfolios.map((value, index) => {
        return (
          <FlexBox
            key={value.idx}
            m='60px 0 0 0'
            flexDir={isMobile ? 'column' : index % 2 !== 0 ? 'row-reverse' : 'row'}
            justify='center'
            alignItems='center'
          >
            <FlexBox p='20px' justify='center' alignItems='center'>
              <Typography>
                <Title level={3} style={{ color: COLOR.text }}>
                  {value.title}
                </Title>
                <Paragraph>{value.description}</Paragraph>
              </Typography>
            </FlexBox>

            <Fade right={index % 2 === 0} left={index % 2 !== 0}>
              <FlexBox flex={2} p='20px'>
                <Image src={value.image} height={400} width={600} objectFit='contain' alt={value.title} />
              </FlexBox>
            </Fade>
          </FlexBox>
        );
      })}
    </Container>
  );
}
