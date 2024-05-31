'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchAllQuests } from '@/sevices/apiService';
import styled from 'styled-components';
import QuestItem from '@/components/QuestItem';
import { Quest } from '@/types/quest';
import Link from 'next/link';
import Image from 'next/image';
import Border from "@/icons/border";

const HomePage: React.FC = () => {
	const { data: quests, error, isLoading } = useQuery({
		queryKey: ['quests'],
		queryFn: () => fetchAllQuests(),
});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {(error as Error).message}</div>;
	}

	return (
		<QuestsPageContent>
			<BorderContainer>
				<Image
					src="/assets/border.png"
					alt=""
					layout='fill'
				/>
			</BorderContainer>
			<QuestList>
				{quests?.map((quest: Quest, index: number) => (
					<Link href={`/quest/${quest.slug}`}	key={index}>
							<QuestItem
								title={quest.title}
								difficulty={quest.difficulty}
								gold={quest.rewards.gold}
								exp={quest.rewards.expPoints}
								cover={quest.cover}
								language={quest.language.label}
								type={quest.type.label}
							/>
					</Link>
				))}
			</QuestList>
		</QuestsPageContent>
	);
};

const QuestsPageContent = styled.div`
	display: flex;
	max-width: 1600px;
	width: 100%;
	margin: 55px auto 80px;
	height: 100%;
	border: 1px solid ${({ theme }) => theme.colors.darkGold};
	background: ${({ theme }) => theme.colors.black};
	position: relative;
	padding: 30px 30px 6px 30px;
	overflow: hidden;
`

const QuestList = styled.div`
	overflow: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	height: 100%;
	z-index: 1;
	position: relative;
	gap: ${({ theme }) => theme.spacing["4xs"]};
	
	a {
		text-decoration: none;
		color: inherit;
	}
`

const BorderContainer = styled.div`
	position: absolute;
	top: 3px;
	left: 3px;
	width: calc(100% - 6px);
	height: calc(100% - 6px);
	z-index: 0;
`

export default HomePage;
