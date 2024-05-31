import styled from 'styled-components';

export const QuestItemContainer = styled.div`
  width: 100%;
  height: 230px;
  padding: ${({ theme }) => theme.spacing["2xs"]};
  position: relative;
  background: ${({ theme }) => theme.colors.darkGrey};
  clip-path: ${({ theme }) => theme.polygon};

  &:before {
    content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: 228px;
      background-color: ${({ theme }) => theme.colors.black};
      clip-path: ${({ theme }) => theme.polygon};
      pointer-events: none;
  }
`

export const ImageContainer = styled.div<{ bgUrl: string }>`
  width: 100%;
  height: 86px;
  position: relative;
  clip-path: ${({ theme }) => theme.polygon};
  background-color: ${({ theme }) => theme.colors.gold};
  background-image: url("${(props) => props.bgUrl}");
  background-size: cover;
  background-position: center;
`

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
    position: relative;
`

export const QuestItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing['3.5xs']};
`

export const QuestItemLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const TagRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing["5xs"]};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing["3.5xs"]};
`

export const DifficultyList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing["5xs"]};
  width: 100%;
  position: relative;
  align-items: center;
`

export const SwordIconWrapper = styled.div<{ light: boolean, children: React.ReactNode; }>`
  color: ${({ light, theme }) => light ? theme.colors.white : theme.colors.lightGrey};
  display: flex;
  align-items: center;
`

export const QuestItemRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
    gap: ${({ theme }) => theme.spacing["4xs"]};
`

export const RewardItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["5xs"]};
    
  img {
    margin-right: ${({ theme }) => theme.spacing["5xs"]};
  }
`
