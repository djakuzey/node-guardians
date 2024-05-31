import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Adjust the base URL as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchQuestBySlug = async (questSlug: string) => {
  const response = await apiClient.get(`/quest`, {
    params: { questSlug },
  });

  return response.data;
};

export const fetchAllQuests = async () => {
  const response = await apiClient.get(`/quests`);
  return response.data;
}
