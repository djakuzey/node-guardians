import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { formatNumber } from '@/helpers/numbers';
import { useAtom } from 'jotai';
import { guardianAtom } from '@/atoms/guardian';

const Header:React.FC = () => {
  const [guardian] = useAtom(guardianAtom);

  return (
    <HeaderRow>
      <Image alt="" src="/logo-small.svg" width={82} height={36}/>
      <UserInfo>
        <StatsBlock>
          <Image alt="" src="/assets/gold.png" width={24} height={24}/>
          {formatNumber(guardian.gold)}
        </StatsBlock>
        <Divider />
        <StatsBlock>
          <Image alt="" src="/assets/exp.png" width={24} height={24}/>
          {formatNumber(guardian.experience)}
        </StatsBlock>
        <UserAvatar>
          <AvatarImage>
            <Image alt="" src="/assets/avatar.png" width={48} height={48}/>
          </AvatarImage>
        </UserAvatar>
      </UserInfo>
    </HeaderRow>
  );
}

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  height: 56px;
  padding-left: 66px;
  padding-right: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["4xs"]};
`

const Divider = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.darkGold};
  transform: rotate(45deg);
`

const StatsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.gold};
`

const UserAvatar = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: ${({ theme }) => theme.spacing["5xs"]};
  background: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.darkGrey};
  border-radius: 100%;
`

const AvatarImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default Header;

