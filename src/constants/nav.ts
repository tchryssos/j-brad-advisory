/**
 * Without defining an explicit height for the nav bar,
 * Mantine will use 100vh for its main component, resulting in an overflow
 * equal to the height of the nav. Very lame.
 *
 * These heights were just taken by measuring how big the nav bar
 * wanted to be regularly, so this will probably need to change if the nav
 * significantly changes
 *
 * See https://github.com/mantinedev/mantine/discussions/399#discussioncomment-1617195
 */
export const NAV_HEIGHTS = {
  base: 66,
  md: 72,
};
