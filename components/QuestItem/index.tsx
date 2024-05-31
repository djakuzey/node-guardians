import React from 'react';
import Image from 'next/image';
import Tag from '@/components/Tag';
import SwordIcon from '@/icons/swordIcon';
import { formatNumber } from '@/helpers/numbers';
import {
  ImageContainer,
  QuestItemContainer,
  QuestItemContent,
  QuestItemLeftContent,
  QuestItemRightContent,
  Title,
  TagRow,
  DifficultyList,
  SwordIconWrapper,
  RewardItem,
} from "@/components/QuestItem/styles";

interface QuestItemProps {
  title: string;
  difficulty: number;
  cover: string;
  gold: number;
  exp: number;
  language: string;
  type: string;
}

const QuestItem: React.FC<QuestItemProps> = ({
  title,
  difficulty,
  cover,
  gold,
  exp,
  language,
  type
}) => {
  return (
    <QuestItemContainer>
      <ImageContainer bgUrl={cover} />
      <QuestItemContent>
        <QuestItemLeftContent>
          <Title>{title}</Title>
          <TagRow>
            <Tag><Image alt="" src="/assets/solidity.svg" width={18} height={18} style={{ marginRight: "4px" }}/>{language}</Tag>
            <Tag>
              <DifficultyList>
                {[1, 2, 3, 4, 5].map((value) => (
                  <SwordIconWrapper light={value <= difficulty} key={value}>
                    <SwordIcon/>
                  </SwordIconWrapper>
                ))}
              </DifficultyList>
            </Tag>
            <Tag>{type}</Tag>
          </TagRow>
        </QuestItemLeftContent>
        <QuestItemRightContent>
          <RewardItem>
            <Image alt="" src="/assets/gold.png" width={24} height={24}/>
            {formatNumber(gold)}
          </RewardItem>
          <RewardItem>
            <Image alt="" src="/assets/exp.png" width={24} height={24}/>
            {formatNumber(exp)}
          </RewardItem>
        </QuestItemRightContent>
      </QuestItemContent>
    </QuestItemContainer>
  );
}



export default QuestItem;
