import Button, { ButtonProps } from './index';
import { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions'

const meta: Meta<ButtonProps> = {
    title: 'Forms/Button',
    component: Button,
    argTypes: {
        label: {
            control: 'text'
        },
        onClick: { action: 'clicked' },
        variant: {
            control: 'radio',
            options: ['primary', 'outlined', 'dark'],
        },
        disabled: {
            control: 'boolean',
        }
    }
}

export default meta;

type Story = StoryObj<ButtonProps>

export const primary: Story = {
    args: {
        label: "Primary Button",
        variant: 'primary',
        onClick: action("primary-clicked")
    },
    tags:['autodocs']
}
export const outlined: Story = {
    args: {
        label: "Outlined Button",
        variant: 'outlined',
        onClick: action("outlined-clicked")
    },
    tags: ['autodocs']
}
export const dark: Story = {
    args: {
        label: "Dark Button",
        variant: 'dark',
        onClick: action("dark-clicked")
    },
    tags: ['autodocs']
}
export const disabled: Story = {
    args: {
        label: "Disabled Button",
        variant: 'primary',
        disabled: true,
        onClick: action("disabled-clicked")
    },
    tags: ['autodocs']
}