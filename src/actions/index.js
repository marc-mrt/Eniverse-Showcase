export const ENABLE_SCROLL_PENDING = 'ENABLE_SCROLL_PENDING';
export const DISABLE_SCROLL_PENDING = 'DISABLE_SCROLL_PENDING';

export const enableScroll = () => ({
  type: ENABLE_SCROLL_PENDING,
});

export const disableScroll = () => ({
  type: DISABLE_SCROLL_PENDING,
});
