import styled from 'styled-components';
import { COLOR } from '../../../helpers/color';

export const FlexBox = styled.div`
  flex-wrap: ${(props) => props.flexWrap ?? 'no-wrap'};
  display: flex;
  flex-direction: ${(props) => props.flexDir ?? 'column'};
  background: ${(props) => props.bg ?? 'none'};
  flex: ${(props) => props.flex ?? 1};
  justify-content: ${(props) => props.justify ?? 'flex-start'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
  color: ${(props) => props.color ?? COLOR.text};
  height: ${(props) => props.height ?? 'auto'};
  width: ${(props) => props.width ?? 'auto'};
  max-width: ${(props) => props.maxWidth ?? 'auto'};
  padding: ${(props) => props.p ?? 0};
  margin: ${(props) => props.m ?? 0};
`;

export const Container = styled.div`
  padding: ${(props) => props.p ?? 0};
  margin-top: ${(props) => props.mt ?? '80px'};
  height: ${(props) => props.height ?? 'auto'};
  background: ${(props) => props.bg ?? 'inherit'};
  display: ${(props) => props.display ?? 'block'};
  flex-direction: ${(props) => props.flexDir ?? 'column'};
  flex: ${(props) => props.flex ?? 1};
  justify-content: ${(props) => props.justify ?? 'flex-start'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
`;
