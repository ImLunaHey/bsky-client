import { useInfiniteQuery } from '@tanstack/react-query';
import { useBlueskyStore } from '../store';
import { usePreferences } from './usePreferences';
import { BSkyPost } from '../types/BSkyPost';

type Timeline = {
  feed: {
    post: BSkyPost;
    feedContext: string;
  }[];
  cursor: string;
};

export function useTimeline(selectedFeed: string) {
  const { agent, isAuthenticated } = useBlueskyStore();
  const preferences = usePreferences();
  const savedFeedsPrefV2 = isAuthenticated
    ? preferences.data?.find((item) => item.$type === 'app.bsky.actor.defs#savedFeedsPrefV2')
    : null;
  const feeds = (
    savedFeedsPrefV2?.items as
      | (
          | {
              type: 'feed';
              value: `at://${string}`;
              pinned: boolean;
              id: string;
            }
          | {
              type: 'timeline';
              value: string;
              pinned: boolean;
              id: string;
            }
        )[]
      | undefined
  )
    ?.filter((item) => item.type === 'feed')
    ?.map((item) => item.value) ?? ['at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/whats-hot'];
  const feed = feeds.find((feed) => feed === selectedFeed) ?? feeds[0];

  return useInfiniteQuery<Timeline>({
    queryKey: ['timeline', { feed, isAuthenticated }],
    queryFn: async ({ pageParam }) => {
      if (!agent) {
        throw new Error('Not authenticated');
      }

      // // guest
      // if (!isAuthenticated) {
      //   return agent.api.app.bsky.feed.getFeed({
      //     feed: "discover",
      //   });
      // }

      // authenticated
      const cursor = pageParam as string | undefined;
      const response = await agent.api.app.bsky.feed.getFeed({
        feed,
        cursor,
      });

      return response.data as Timeline;
    },
    getNextPageParam: (lastPage) => lastPage.cursor,
    initialPageParam: undefined,
    enabled: !!agent && feed !== undefined,
    retry: 1,
  });
}
