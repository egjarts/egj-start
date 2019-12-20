import React, { memo, useReducer, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { FixedSizeGrid as Grid, areEqual } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VirtualWindowScrollbars as Scrollbars } from '../components/Scrollbars';
import { createUseStyles as makeStyles } from 'react-jss';
import StaffCard from './StaffCard';
import Toolbar from '../components/Toolbar';

import theme from '../config/theme.config';

import data from '@data/staff.js';

const useStyles = makeStyles({
  staffCardGrid: {
    '& > div > div': { position: 'relative', margin: 'auto' }
  },
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '&.scroll-content': {
      '& $wrapper': {},
      '& $contentWrapper': {},
      '& $content': {}
    }
  },
  wrapper: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: '1 1 auto',
    flexDirection: 'column'
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 3,
    overflow: 'hidden',
    flex: '1 1 auto'
  },
  content: {
    position: 'relative',
    display: 'flex',
    overflow: 'auto',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
    '-webkit-overflow-scrolling': 'touch',
    zIndex: 2
  }
});

const reduceFilters = (filters, filter) => {
  const newFilters = { ...filters, ...filter };
  const result = {
    ...newFilters,
    result: data.filter(item => {
      const include =
        (newFilters.active && item.status === 'Active') ||
        (newFilters.applied && item.status === 'Applied') ||
        (newFilters.inactive && item.status === 'Inactive') ||
        (newFilters.archived && item.status === 'Archived') ||
        (newFilters.disabled && item.status === 'Disabled');

      return include;
    }),
    count: Object.keys(initialFilters).reduce((count, filter) => {
      return count + (initialFilters[filter] ? 1 : 0);
    }, 0)
  };
  return result;
};

const breakpoints = [
  { minWidth: 0, cardWidth: 160, cardHeight: 150 },
  { minWidth: 768, cardWidth: 180, cardHeight: 170 }
];

const initialFilters = {
  active: true,
  applied: false,
  inactive: false,
  disabled: false,
  archived: false,
  deleted: false
};

const Staff = () => {
  const classes = useStyles();

  const [filters, applyFilters] = useReducer(
    reduceFilters,
    reduceFilters(initialFilters, null)
    //initialFilters
  );

  const listRef = useRef(null);
  const outerRef = useRef(null);

  return (
    <>
      <Toolbar filters={filters} applyFilters={applyFilters} />
      <div className={classes.contentWrapper}>
        <AutoSizer>
          {({ width, height }) => {
            const size = breakpoints
              .filter(breakpoint => breakpoint.minWidth <= width)
              .slice(-1)[0];

            const cardWidth = size.cardWidth;
            const cardHeight = size.cardHeight;
            const columnCount = Math.floor(width / cardWidth);
            const rowCount = Math.ceil(filters.result.length / columnCount);
            return (
              <Grid
                className={classes.staffCardGrid}
                width={width}
                height={height}
                columnCount={columnCount}
                columnWidth={cardWidth}
                rowCount={rowCount}
                rowHeight={cardHeight}
                itemData={{ cards: filters.result, columnCount }}
                outerElementType={Scrollbars}
                outerRef={outerRef}
                giveThisToHtml='okay'
              >
                {Card}
              </Grid>
            );
          }}
        </AutoSizer>
      </div>
    </>
  );
};

const Card = memo(({ columnIndex, rowIndex, style, data }) => {
  const { cards, columnCount } = data;
  const singleColumnIndex = columnIndex + rowIndex * columnCount;
  const card = cards[singleColumnIndex];

  return card ? (
    <StaffCard {...card} style={style} />
  ) : (
    <div style={style}></div>
  );
}, areEqual);

export default Staff;
