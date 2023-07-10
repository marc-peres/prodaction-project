import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const emptyInput = Template.bind({});
emptyInput.args = {
    value: '',
    label: 'input label',
};

export const inputWithText = Template.bind({});
inputWithText.args = {
    value: 'Text',
    label: 'input label',
};
