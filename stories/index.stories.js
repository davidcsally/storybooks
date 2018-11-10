import React from 'react';

import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import FormButton from '../src/elements/FormButton';

const buttonClick = () => console.log('clicked!');

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('FormButton', module)
  .addDecorator(checkA11y)
  .add('Normal', () => <FormButton onClick={action('clicked!')}>Save</FormButton>)
  .add('Inverted', () => <FormButton inverted onClick={buttonClick}>Save</FormButton>)