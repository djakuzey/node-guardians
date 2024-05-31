'use client';

import React from 'react';
import { fetchQuestBySlug } from '@/sevices/apiService';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Image from 'next/image';
import {
  DifficultyList,
  RewardItem,
  SwordIconWrapper,
  TagRow,
  Title
} from '@/components/QuestItem/styles';
import Tag from '@/components/Tag';
import SwordIcon from '@/icons/swordIcon';
import { formatNumber } from '@/helpers/numbers';
import { Quest } from '@/types/quest';
import Button from '@/components/Button';
import { useAtom } from 'jotai';
import { guardianAtom } from '@/atoms/guardian';

const QuestPage: React.FC<{ params: { slug: string } }> = ({ params }: { params: { slug: string } }) => {
  const { data: quest, isLoading } = useQuery<Quest>({
    queryKey: ['quest', params.slug],
    queryFn: () => fetchQuestBySlug(params.slug as string),
  });

  const [guardian, setGuardian] = useAtom(guardianAtom);

  const handleClaimRewards = () => {
    setGuardian((prevGuardian) => ({
      gold: prevGuardian.gold + (quest?.rewards?.gold || 0),
      experience: prevGuardian.experience + (quest?.rewards?.expPoints || 0),
    }));
  }

  return (
    <QuestContainer>
      <QuestContent>
        <BorderContainer>
          <Image
            src="/assets/border.png"
            alt=""
            layout='fill'
          />
        </BorderContainer>

        {!isLoading && quest && (
          <>
            <QuestImageContainer bgUrl={quest.cover} />
            <QuestItemContent>
              <Title>{quest.title}</Title>
              <TagsAndRewards>
                <TagRow>
                  <Tag><Image alt="" src="/assets/solidity.svg" width={18} height={18} style={{ marginRight: "4px" }}/>{quest.language?.label}</Tag>
                  <Tag>
                    <DifficultyList>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <SwordIconWrapper light={value <= quest.difficulty} key={value}>
                          <SwordIcon/>
                        </SwordIconWrapper>
                      ))}
                    </DifficultyList>
                  </Tag>
                  <Tag>{quest.type?.label}</Tag>
                </TagRow>

                <Rewards>
                  <RewardItem>
                    <Image alt="" src="/assets/gold.png" width={24} height={24}/>
                    {formatNumber(quest.rewards?.gold)}
                  </RewardItem>
                  <RewardItem>
                    <Image alt="" src="/assets/exp.png" width={24} height={24}/>
                    {formatNumber(quest.rewards?.expPoints)}
                  </RewardItem>
                </Rewards>
              </TagsAndRewards>
              <Description>{quest.description}</Description>
              <ButtonsContainer>
                <Button variant="outline" link="/">Go Back</Button>
                <Button onClick={handleClaimRewards}>Airdrop rewards to The Guardian</Button>
              </ButtonsContainer>
            </QuestItemContent>
          </>
        )}
      </QuestContent>
    </QuestContainer>
  );
};

const QuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const QuestContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 735px;
  min-height: 508px;
  width: 100%;
  padding: 20px 16px 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.darkGold};
`;

const BorderContainer = styled.div`
	position: absolute;
	top: 3px;
	left: 3px;
	width: calc(100% - 6px);
	height: calc(100% - 6px);
	z-index: 0;
`

const QuestImageContainer = styled.div<{ bgUrl: string }>`
  width: 100%;
  height: 176px;
  position: relative;
  clip-path: ${({ theme }) => theme.polygon};
  background-color: ${({ theme }) => theme.colors.gold};
  background-image: url("${(props) => props.bgUrl}");
  background-size: cover;
  background-position: center;
`

const TagsAndRewards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const QuestItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing['3.5xs']};
`

const Rewards = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 35px;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing['3.5xs']};
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing['3xs']};
  height: 135px;
  margin-bottom: 28px;
`

export default QuestPage;
