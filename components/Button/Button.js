import React from 'react';
import { Button as MainButton, Typography } from 'antd';
import { COLOR } from '../../helpers/color';

const { Text } = Typography;

export default function Button({ title, buttonType = 'primary', onClick = () => {} }) {
  return (
    <MainButton onClick={onClick} type={buttonType}>
      <Typography>
        <Text code style={{ color: COLOR.darkCyan, fontWeight: 'bold' }}>
          {title}
        </Text>
      </Typography>
    </MainButton>
  );
}
