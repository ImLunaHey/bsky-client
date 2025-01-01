import { Image } from '@/components/ui/Image';
import { BSkyQuoteNotification } from '@/lib/bluesky/types/BSkyNotification';
import { useTranslation } from 'react-i18next';

export function QuoteNotification({ notification }: { notification: BSkyQuoteNotification }) {
  const { t } = useTranslation('notifications');
  return (
    <div>
      <div className="flex flex-row gap-1 overflow-hidden max-h-16">
        <Image type="avatar" classNames={{ wrapper: 'aspect-square size-8' }} src={notification.author.avatar} />
      </div>
      <div>
        {notification.author.displayName} {t('quotedYourPost')}
      </div>
    </div>
  );
}