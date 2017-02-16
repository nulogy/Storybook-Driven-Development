import React from 'react';
import { storiesOf } from '@kadira/storybook';
import type from './Type.css';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function MyComponentStory() {
  storiesOf('⭐️ Type', module)
    .add('type scale', () => (
      <div>
        <p className={type.micro}>micro&mdash;8/10</p>
        <p className={type.tiny}>tiny&mdash;12/20</p>
        <p className={type.small}>small&mdash;14/20</p>
        <p className={type.normal}>normal&mdash;16/20</p>
        <p className={type.large}>large&mdash;18/20</p>
        <p className={type.xlarge}>xlarge&mdash;24/30</p>
        <p className={type.xxlarge}>xxlarge&mdash;32/40</p>
        <p className={type.huge}>huge&mdash;40/50</p>
        <p className={type.giant}>giant&mdash;48/60</p>
        <p className={type.titanic}>titanic&mdash;64/80</p>
      </div>
    ))
    .add('lorem ipsum', () => (
      <div>
        <p className={type.micro}><b>micro&mdash;8/10</b></p>
        <p className={type.micro}>{loremIpsum}</p>
        <p className={type.tiny}><b>tiny&mdash;12/20</b></p>
        <p className={type.tiny}>{loremIpsum}</p>
        <p className={type.small}><b>small&mdash;14/20</b></p>
        <p className={type.small}>{loremIpsum}</p>
        <p className={type.normal}><b>normal&mdash;16/20</b></p>
        <p className={type.normal}>{loremIpsum}</p>
        <p className={type.large}><b>large&mdash;18/20</b></p>
        <p className={type.large}>{loremIpsum}</p>
        <p className={type.xlarge}><b>xlarge&mdash;24/30</b></p>
        <p className={type.xlarge}>{loremIpsum}</p>
        <p className={type.xxlarge}><b>xxlarge&mdash;32/40</b></p>
        <p className={type.xxlarge}>{loremIpsum}</p>
        <p className={type.huge}><b>huge&mdash;40/50</b></p>
        <p className={type.huge}>{loremIpsum}</p>
        <p className={type.giant}><b>giant&mdash;48/60</b></p>
        <p className={type.giant}>{loremIpsum}</p>
        <p className={type.titanic}><b>titanic&mdash;64/80</b></p>
        <p className={type.titanic}>{loremIpsum}</p>
      </div>
    ))
    .add('headings', () => (
      <div>
        <p className={type.h8}>h8&mdash;12/20</p>
        <p className={type.h7}>h7&mdash;14/20</p>
        <p className={type.h6}>h6&mdash;16/20</p>
        <p className={type.h5}>h5&mdash;18/20</p>
        <p className={type.h4}>h4&mdash;24/30</p>
        <p className={type.h3}>h3&mdash;32/40</p>
        <p className={type.h2}>h2&mdash;40/50</p>
        <p className={type.h1}>h1&mdash;48/60</p>
        <p className={type.h0}>ho&mdash;64/80</p>
      </div>
    ))
    .add('weights', () => (
      <div>
        <p className={type['fontWeight--hairline']}>fontWeight--hairline</p>
        <p className={type['fontWeight--light']}>fontWeight--light</p>
        <p className={type['fontWeight--normal']}>fontWeight / fontWeight--normal</p>
        <p className={type['fontWeight--heavy']}>fontWeight--heavy</p>
        <p className={type['fontWeight--bold']}>fontWeight--bold</p>
      </div>
    ));
}
