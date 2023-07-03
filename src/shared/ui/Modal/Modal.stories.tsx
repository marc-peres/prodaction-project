import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem10',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem100Lorem10',
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
