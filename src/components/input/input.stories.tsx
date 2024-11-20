import Input, { InputProps } from './index'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const meta: Meta<InputProps> = {
    title: 'Forms/Input', component: Input, argTypes: {
        label: {
            control: 'text'
        },
        onChange: { actions: 'input' },
        value: {
            control: 'text'
        },
        placeholder: {
            control: 'text'
        },
        required: { control: 'boolean' },
        rounded: { control: 'boolean' },
    }
}

export default meta

type Story = StoryObj<InputProps>

export const basic: Story = {
    args: {
        onChange: action('basic-input')
    },
    tags: ['autodocs']
}
export const withLabel: Story = {
    args: {
        label: "With Label",
        onChange: action('basic-input')
    },
    tags: ['autodocs']
}
export const withPlaceholder: Story = {
    args: {
        label: "Placeholder Input",
        placeholder: "Please enter your Firstname",
        onChange: action('basic-input')
    },
    tags: ['autodocs']
}
export const rounded: Story = {
    args: {
        label: "Rounded Input",
        placeholder: "Please enter your Firstname",
        rounded: true,
        onChange: action('basic-input')
    },
    tags: ['autodocs']
}
export const required: Story = {
    args: {
        label: "Required Input",
        placeholder: "Please enter your Firstname",
        required: true,
        onChange: action('basic-input')
    },
    tags: ['autodocs']
}