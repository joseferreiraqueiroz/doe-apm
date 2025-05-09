
import { mixins } from '@/styles/fonts/mixins';
import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #0d0d0d ;
  color: ${({ theme }) => theme.white};
  padding: 3rem 1rem;
    padding-top: 2rem;
    border-top: 1px solid ${props => props.theme["gray-600"]};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Logo = styled.h2`
  font-size: ${mixins.fonts.titleS};
  color: ${({ theme }) => theme['brand-purple']};
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme['gray-300']};
  text-decoration: none;
  font-size: ${mixins.fonts.textS};
  display: flex;
  align-items: center;
  gap: 0.5rem;
    transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme['brand-purple']};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  a {
    color: ${({ theme }) => theme['gray-300']};

    &:hover {
      color: ${({ theme }) => theme['brand-purple']};
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: ${({ theme }) => theme['gray-400']};
  font-size: 0.8rem;
  margin-top: 2rem;
`;
