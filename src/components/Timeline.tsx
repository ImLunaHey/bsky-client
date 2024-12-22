import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTimeline } from '../lib/bluesky/hooks/useTimeline';
import { PostCard } from './PostCard';
import { cn } from '../lib/utils';
import { useHotkeys } from 'react-hotkeys-hook';
import { useLike } from '../lib/bluesky/hooks/useLike';
import { useRepost } from '../lib/bluesky/hooks/useRepost';
import { useSettings } from '../hooks/useSetting';
import { useTranslation } from 'react-i18next';

export function Timeline({ columnNumber = 1 }: { columnNumber: number }) {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useTimeline(columnNumber);
  const { ref, inView } = useInView();
  const experiments = useSettings((state) => state.experiments);
  const { t } = useTranslation('app');
  const like = useLike();
  const repost = useRepost();
  const posts = data?.pages.map((page) => page.feed).flat() ?? [];
  const [selectedPost, setSelectedPost] = useState<string | null>(posts?.[0]?.post.uri ?? null);
  const getPost = (uri: string | null) => (uri ? posts.find(({ post }) => post.uri === uri)?.post : null);
  const getNextPost = (uri: string | null) => {
    const index = posts.findIndex(({ post }) => post.uri === uri);
    return posts[index + 1];
  };
  const getPrevPost = (uri: string | null) => {
    const index = posts.findIndex(({ post }) => post.uri === uri);
    return posts[index - 1];
  };

  // like post
  useHotkeys(
    'l',
    () => {
      const post = getPost(selectedPost);
      if (!post?.viewer) return;

      like.mutate({ uri: post.uri, cid: post.cid, like: !post.viewer.like });
    },
    [selectedPost],
  );

  // repost post
  useHotkeys(
    't',
    () => {
      const post = getPost(selectedPost);
      if (!post) return;

      repost.mutate({ uri: post.uri, cid: post.cid });
    },
    [selectedPost],
  );

  // next post
  useHotkeys(
    'j',
    () => {
      const postUri = getNextPost(selectedPost).post.uri;
      if (!postUri) return;
      setSelectedPost(postUri);

      // scroll to the post
      const post = document.getElementById(postUri);
      if (post) {
        post.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [selectedPost],
  );

  // previous post
  useHotkeys(
    'k',
    () => {
      const postUri = getPrevPost(selectedPost).post.uri;
      if (!postUri) return;
      setSelectedPost(postUri);

      // scroll to the post
      const post = document.getElementById(postUri);
      if (post) {
        post.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [selectedPost],
  );

  // page down
  useHotkeys(
    'space',
    () => {
      window.scrollBy(0, window.innerHeight);
    },
    [],
  );

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return <div className="text-center py-8 text-gray-600 dark:text-gray-400">{t('loading')}</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map(({ post, feedContext }) => (
        <PostCard
          key={post.uri}
          post={post}
          context={feedContext}
          className={cn(experiments.devMode && selectedPost === post.uri && 'outline outline-red-500')}
          onClick={() => setSelectedPost(post.uri)}
        />
      ))}

      <div ref={ref} className="h-10">
        {isFetchingNextPage && <div className="text-center py-4 text-gray-600 dark:text-gray-400">{t('loading')}</div>}
      </div>
    </div>
  );
}
