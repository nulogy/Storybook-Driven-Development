import React from 'react';
import { shallow } from 'enzyme';
import keys from 'lodash/keys';
import FormController from './FormController';

describe('Measurement FormController', () => {
  let subject;
  // eslint-disable-next-line react/prop-types
  const Mock = props => <span>{ props.children }</span>;
  const child = () => subject.find('Mock');
  const expectStateAndPropsToMatch = (key, value) => {
    expect(subject.state()[key]).toBe(value);
    expect(child().props()[key]).toBe(value);
  };

  beforeEach(() => {
    subject = shallow(
      <FormController>
        <Mock />
      </FormController>,
    );
  });

  describe('form values', () => {
    const expectedFormNames = expect.arrayContaining([
      'intervalName',
      'startMilestone',
      'endMilestone',
      'measurementType',
    ]);

    it('maintains form values in its state', () => {
      expect(keys(subject.state())).toEqual(expectedFormNames);
    });

    it('passes required form values to children', () => {
      expect(keys(child().props()))
        .toEqual(expectedFormNames);
    });

    it('sets defaults to be empty strings', () => {
      expectStateAndPropsToMatch('intervalName', '');
      expectStateAndPropsToMatch('startMilestone', '');
      expectStateAndPropsToMatch('endMilestone', '');
    });
  });

  describe('toggle state', () => {
    it('passes default toggle state to its children', () => {
      expectStateAndPropsToMatch('measurementType', 'milestone');
    });
  });

  describe('handleChange', () => {
    it("passes a handleChange callback to it's children", () => {
      expect(subject.instance().handleChange).toBeInstanceOf(Function);
      expect(child().prop('handleChange')).toBe(subject.instance().handleChange);
    });

    it('updates state with the name and value of the target recieved in the event', () => {
      const mockEvent = {
        target: {
          name: 'intervalName',
          value: 'changed value',
        },
      };
      subject.instance().handleChange(mockEvent);

      expectStateAndPropsToMatch('intervalName', 'changed value');
    });

    it('works with radio fields as well', () => {
      const mockEvent = {
        target: {
          name: 'measurementType',
          value: 'interval',
        },
      };
      subject.instance().handleChange(mockEvent);

      expectStateAndPropsToMatch('measurementType', 'interval');
    });
  });
});
